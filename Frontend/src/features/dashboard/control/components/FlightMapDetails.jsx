import { useState, useRef, useEffect, useMemo } from "react";
import { RxCross2 } from "react-icons/rx";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import * as turf from "@turf/turf";
// import useTranslations from "../../../../components/Language";


// eslint-disable-next-line react/prop-types
const VideoViewer = ({setVideoView, systemID}) => {
   
    const ships = [
        { id: "ship1", position: [35.062067, 129.1024905] },
    ];

    // State for each video's zoom and position
    const [video1State, setVideo1State] = useState({ scale: 1, x: 0, y: 0 });
    const [video2State, setVideo2State] = useState({ scale: 1, x: 0, y: 0 });

    const videoRefs = [useRef(null), useRef(null)];
    const isDragging = useRef(false);
    const lastPosition = useRef({ x: 0, y: 0 });

    const [drones, setDrones] = useState({});
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [shipPosition, setShipPosition] = useState([]);
    const reconnectInterval = useRef(null);
    const [wayPointsVisible, setWayPointsVisible] = useState(false);
    // const t = useTranslations();

    const droneData = [
        {
          "Drone_ID": "MDT250101VT001",
          "Vessel ID": "??",
          "lat": lat,
          "Ion": lon, 
          "alt": 426.15,
          "dist_traveled": 56.12,
          "wp_dist": 297.00,
          "dist_to_home": 1402.29,
          "vertical_speed": 0.47,
          "wind_vel": 5.12,
          "airspeed": 27.78,
          "groundspeed": 32.90,
          "roll": 17.43,
          "pitch": -3.75,
          "yaw": 150.00,
          "toh": 42.55,
          "tot": 9.02,
          "time_in_air": 3.52,
          "time_in_air_min_sec": 3.52,
          "gps_hdop": 30.00,
          "battery_voltage": 56.12,
          "battery_current": 8.00,
          "ch3percent": 50,
          "ch3out": 1500.000,
          "ch9out": 1000.000,
          "ch10out": 1000.000,
          "ch11out": 1000.000,
          "ch12out": 1000.000,
          "waypoints": 3
        }
      ];
      
      const ws = useRef(null);

      useEffect(() => {
        const connectWebSocket = () => {
          console.log("Attempting WebSocket connection...");
          const wsUrl = "ws://52.78.238.179:8080/telemetry";
          ws.current = new WebSocket(wsUrl);
    
          ws.current.onopen = () => {
            console.log("WebSocket connected.");
            if (reconnectInterval.current) {
              clearInterval(reconnectInterval.current);
              reconnectInterval.current = null;
            }
          };
    
          ws.current.onmessage = (event) => {
            try {
              const data = JSON.parse(event.data);
              if (data.drones && Array.isArray(data.drones)) {
                const updatedDrones = {};
                let updatedLat = null;
                let updatedLon = null;
                // const updatedShipPosition = [];
                data.drones.forEach((drone) => {
                  drone.waypoints = Array.isArray(drone.waypoints) ? drone.waypoints : [];
                  updatedDrones[drone.GCS_IP] = drone;
                  updatedLat = `${Math.abs(drone.lat)}° ${drone.lat >= 0 ? "N" : "S"}`;
                  updatedLon = `${Math.abs(drone.lon)}° ${drone.lat >= 0 ? "E" : "W"}`;;
                  setShipPosition([...shipPosition, drone.home_location]);
                });
                setDrones(updatedDrones);
                setLat(updatedLat);
                setLon(updatedLon);
                
    
                // setShipPosition(updatedShipPosition);
                console.log(updatedDrones);
                // console.log(updatedShipPosition);
              } else {
                console.warn("Invalid WebSocket data:", data);
              }
            } catch (error) {
              console.error("Error parsing WebSocket data:", error);
            }
          };
    
          ws.current.onerror = (error) => {
            console.error("WebSocket error:", error);
          };
    
          ws.current.onclose = () => {
            console.warn("WebSocket disconnected, retrying...");
            if (!reconnectInterval.current) {
              reconnectInterval.current = setInterval(connectWebSocket, 5000);
            }
          };
        };
    
        connectWebSocket();
    
        return () => {
          if (ws.current) ws.current.close();
          if (reconnectInterval.current) clearInterval(reconnectInterval.current);
        };
      }, []);
      // Custom Drone Icon
      const droneIcon = (rotation) =>
        new L.DivIcon({
          className: "custom-drone-icon",
          html: `<div style="transform: rotate(${rotation}deg);"><img src="droneIcon.png" width="25" height="25"/></div>`,
          iconSize: [25, 25],
          iconAnchor: [12, 12],
        });
      
    //   // Custom Ship Icon 
    //   const shipIcon = new L.Icon({
    //     iconUrl: "shipIcon.png",
    //     iconSize: [40, 40],
    //     iconAnchor: [20, 40],
    //     popupAnchor: [0, -40],
    //   });

    const shipIcons = [
          "vessel(Navy).png",
          "vessel(blue).png",
          "vessel(green).png",
          "vessel(lightYellow).png",
          "vessel(olive).png",
          "vessel(orange).png",
          "vessel(pink).png",
          "vessel(Purple).png",
          "vessel(red).png",
          "vessel(Yellow).png",
        ];
        
        const getShipIcon = (index) => {
          const hash = index;
          return shipIcons[hash % shipIcons.length];
        };
        
        const shipsWithIcons = useMemo(() => {
          return shipPosition.map((ship, index) => ({
            ...ship,
            icon: getShipIcon(index),
          }));
        }, [shipPosition]);
      

    // Handle zoom for each video
    const handleWheelZoom = (event, videoIndex) => {
        event.preventDefault();
        const zoomFactor = 0.1;
        const maxScale = 3;
        const minScale = 1;

        if (videoIndex === 0) {
            setVideo1State((prev) => {
                const newScale = event.deltaY < 0 ? prev.scale + zoomFactor : prev.scale - zoomFactor;
                return { ...prev, scale: Math.max(minScale, Math.min(newScale, maxScale)) };
            });
        } else {
            setVideo2State((prev) => {
                const newScale = event.deltaY < 0 ? prev.scale + zoomFactor : prev.scale - zoomFactor;
                return { ...prev, scale: Math.max(minScale, Math.min(newScale, maxScale)) };
            });
        }
    };

    // Handle dragging (pan) for each video when zoomed in
    const handleMouseDown = (event, videoIndex) => {
        if ((videoIndex === 0 && video1State.scale > 1) || (videoIndex === 1 && video2State.scale > 1)) {
            isDragging.current = { videoIndex, active: true };
            lastPosition.current = { x: event.clientX, y: event.clientY };
        }
    };

    const handleMouseMove = (event) => {
        if (isDragging.current?.active) {
            const videoIndex = isDragging.current.videoIndex;
            const dx = event.clientX - lastPosition.current.x;
            const dy = event.clientY - lastPosition.current.y;

            if (videoIndex === 0) {
                setVideo1State((prev) => ({
                    ...prev,
                    x: prev.x + dx,
                    y: prev.y + dy,
                }));
            } else {
                setVideo2State((prev) => ({
                    ...prev,
                    x: prev.x + dx,
                    y: prev.y + dy,
                }));
            }

            lastPosition.current = { x: event.clientX, y: event.clientY };
        }
    };

    const handleMouseUp = () => {
        isDragging.current = { videoIndex: null, active: false };
    };

    // Reset zoom for a specific video
    const resetZoom = (videoIndex) => {
        if (videoIndex === 0) {
            setVideo1State({ scale: 1, x: 0, y: 0 });
        } else {
            setVideo2State({ scale: 1, x: 0, y: 0 });
        }
    };

    return (
        <div className="w-full h-full absolute z-50 flex flex-col top-0 left-0 font-pretendard bg-white text-white">
            {/* Header */}
            <div className="w-full flex justify-between items-center pt-2 pb-2 pl-4 pr-4 bg-primary bg-opacity-70">
                <div className="w-1 h-1 rounded-full bg-[#4ECC00]"></div>
                <div className="text-sm ">Live Flight Video</div>
                <RxCross2 onClick={() => setVideoView(false)} className="cursor-pointer" />
            </div>

            {/* Video Container */}
            <div className="w-full flex items-center h-1/2 bg-primary">
                {/* Video 1 */}
                <div
                    className="w-1/2 overflow-hidden flex justify-center items-center"
                    onWheel={(e) => handleWheelZoom(e, 0)}
                    onMouseDown={(e) => handleMouseDown(e, 0)}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onDoubleClick={() => resetZoom(0)}
                >
                    <video
                        ref={videoRefs[0]}
                        src="TestVideo2.mp4"
                        autoPlay
                        loop
                        className="cursor-grab w-full h-full"
                        style={{
                            transform: `scale(${video1State.scale}) translate(${video1State.x}px, ${video1State.y}px)`,
                            transition: "transform 0.1s ease-out",
                        }}
                    ></video>
                </div>

                {/* Video 2 */}
                <div
                    className="w-1/2 overflow-hidden flex justify-center items-center"
                    onWheel={(e) => handleWheelZoom(e, 1)}
                    onMouseDown={(e) => handleMouseDown(e, 1)}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onDoubleClick={() => resetZoom(1)}
                >
                    <video
                        ref={videoRefs[1]}
                        src="TestVideo2.mp4"
                        autoPlay
                        loop
                        className="cursor-grab w-full h-full"
                        style={{
                            transform: `scale(${video2State.scale}) translate(${video2State.x}px, ${video2State.y}px)`,
                            transition: "transform 0.1s ease-out",
                        }}
                    ></video>
                </div>
            </div>

            {/* Telemetric data and map */}
            <div className="w-full flex items-center h-1/2">
                {/** Telemetric data */}
                <div className="w-1/2 h-full p-2 flex flex-col gap-2 text-black">
                    <div className="w-full flex justify-center items-center p-2 bg-primary bg-opacity-[8%] rounded-md text-sm font-semibold">Flight Info</div>
                    
                    <div className="w-full flex flex-wrap mr-2 justify-start items-center text-sm">
                    {droneData?.length > 0 ? (
                        Object.entries(droneData[0]).map(([key, value]) => (
                            <div key={key} className="w-1/3 flex items-center p-2 justify-between border-b-0.5">
                                <div className="font-semibold">{key}:</div>
                                <div>{value}</div>
                            </div>
                        ))
                        ) : (
                            <div>No drone data available</div>
                    )}


                    </div>
                </div>
                
                {/* Map */}
        <MapContainer
            center={[35.062067, 129.1024905]}
            zoom={10}
            className="z-0 w-1/2 h-full"
            zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {shipsWithIcons.map((ship, index) => (
                <Marker
                  key={index}
                  position={[ship.lat, ship.lon]}
                  icon={new L.Icon({
                    iconUrl: ship.icon,  
                    iconSize: [20, 20],
                    iconAnchor: [20, 40],
                    popupAnchor: [0, -40],
                  })}
                />
                                      ))}
              {drones && Object.values(drones).filter((drone) => drone.system_id === systemID).map((drone) => (
                <>
                <Marker
                  key={drone.GCS_IP}
                  position={[drone.lat, drone.lon]}
                  icon={droneIcon(drone.yaw)}
                >
                  <Popup>
                    <div>
                      <strong>GCS:</strong> {drone.GCS_IP} <br />
                      <strong>Altitude:</strong> {drone.alt} m <br />
                      <strong>Speed:</strong> {drone.ground_speed} m/s <br />
                      <strong>Battery:</strong> {drone.battery_voltage} V
                    </div>
                  </Popup>
                </Marker>
                <Polyline
                key={drone.GCS_IP}
                positions={drone.waypoints.map((waypoint) => [waypoint.lat, waypoint.lon])}
                color="red"
                opacity={0.5}
                weight={2}
                // dashArray="5, 10"
              />
              </>
              ))}
        {wayPointsVisible &&<Polyline positions={drones.waypoints} color="#111111" opacity={0.5} weight={2} dashArray="5, 10"/>}
        
      </MapContainer>

            </div>

        </div>
    );
};

export default VideoViewer;
