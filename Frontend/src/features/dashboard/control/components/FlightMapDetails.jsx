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

    const remoteVideoRef = useRef(null);
    const server = "ws://13.213.46.108:8188"; // Janus WebSocket Server
    const streamId = 1;
    const secret = "adminpwd";

    const videoRefs = [useRef(null), useRef(null)];
    const isDragging = useRef(false);
    const lastPosition = useRef({ x: 0, y: 0 });

    const [drones, setDrones] = useState({});
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [shipPosition, setShipPosition] = useState({});
    const reconnectInterval = useRef(null);
    const [wayPointsVisible, setWayPointsVisible] = useState(false);
    // const t = useTranslations();

    console.log(systemID);
    console.log(drones)
    console.log(shipPosition)

    const droneData = [
        {
          "Drone_ID": "MDT250101VT001",
          "Vessel ID": "??",
          "lat": drones.lat,
          "Ion": drones.lon, 
          "alt": drones.alt,
          "dist_traveled(m)": drones.dist_traveled,
          "wp_dist(m)": drones.wp_dist,
          "dist_to_home(m)": drones.dist_to_home,
          "null": null,
          "wind_vel(m/s)": drones.wind_vel,
          "airspeed(m/s)": drones.airspeed,
          "groundspeed(m/s)": drones.ground_speed,
          "roll": drones.roll,
          "pitch": drones.pitch,
          "yaw": drones.yaw,
          "toh": drones.toh,
          "tot": drones.tot,
          "time_in_air(s)": drones.time_in_air,
          "time_in_air_min_sec(m/s)": drones.time_in_air,
          "gps_hdop": drones.gps_hdop,
          "battery_voltage(V)": drones.battery_voltage,
          "battery_current(A)": drones.battery_current,
          "ch3percent": drones.ch3percent,
          "ch3out": drones.ch3out,
          "ch9out": drones.ch9out,
          "ch10out": drones.ch10out,
          "ch11out": drones.ch11out,
          "ch12out": drones.ch12out,
          "blank": null,
        }
      ];
      
      //Live_Stream_Drone_Camera
      useEffect(() => {
        let janus = null;
        let streaming = null;
        let remoteStream = null;
    
        // Load adapter.js first
        const adapterScript = document.createElement("script");
        adapterScript.src = "https://webrtc.github.io/adapter/adapter-latest.js";
        adapterScript.onload = () => loadJanus();
        document.body.appendChild(adapterScript);
    
        function loadJanus() {
          const janusScript = document.createElement("script");
          janusScript.src = "/janus.js"; // Load from public folder
          janusScript.onload = () => initializeJanus();
          document.body.appendChild(janusScript);
        }
    
        function initializeJanus() {
          if (!window.Janus) {
            console.error("Janus library not loaded");
            setStatus("Error: Janus.js not loaded");
            return;
          }
    
          window.Janus.init({
            debug: "all",
            callback: function () {
              if (!window.Janus.isWebrtcSupported()) {
                setStatus("WebRTC not supported!");
                return;
              }
    
              janus = new window.Janus({
                server: server,
                success: function () {
                  janus.attach({
                    plugin: "janus.plugin.streaming",
                    opaqueId: "streaming-" + window.Janus.randomString(12),
                    success: function (pluginHandle) {
                      streaming = pluginHandle;
                      setStatus("Plugin attached, starting stream...");
                      startStream();
                    },
                    error: function (error) {
                      console.error("Plugin attach error:", error);
                      setStatus("Error: " + error);
                    },
                    onmessage: function (msg, jsep) {
                      handleMessage(msg, jsep);
                    },
                    onremotetrack: function (track, mid, on) {
                      if (!remoteStream) {
                        remoteStream = new MediaStream();
                        remoteVideoRef.current.srcObject = remoteStream;
                      }
                      if (on) {
                        remoteStream.addTrack(track);
                        setStatus("Receiving video...");
                      } else {
                        remoteStream.removeTrack(track);
                        setStatus("Track removed");
                      }
                    },
                    oncleanup: function () {
                      setStatus("Stream stopped");
                      remoteStream = null;
                    },
                  });
                },
                error: function (error) {
                  console.error("Janus error:", error);
                  setStatus("Error: " + error);
                },
              });
            },
          });
        }
    
        function startStream() {
          let body = {
            request: "watch",
            id: streamId,
            secret: secret,
            offer_audio: true,
            offer_video: true,
          };
          streaming.send({ message: body });
        }
    
        function handleMessage(msg, jsep) {
          if (msg["error"]) {
            console.error("Streaming error:", msg["error"]);
            setStatus("Error: " + msg["error"]);
            return;
          }
    
          if (jsep) {
            streaming.createAnswer({
              jsep: jsep,
              tracks: [
                { type: "audio", recv: true },
                { type: "video", recv: true },
              ],
              success: function (jsep) {
                let body = { request: "start" };
                streaming.send({ message: body, jsep: jsep });
              },
              error: function (error) {
                console.error("Error creating answer:", error);
                setStatus("Error creating answer");
              },
            });
          }
        }
    
        return () => {
          if (janus) janus.destroy();
          document.body.removeChild(adapterScript);
        };
      }, []);
    

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

                const selectedDrone = data.drones.find((drone) => drone.systemid === systemID) || null;

                setDrones(selectedDrone);
                setShipPosition(selectedDrone.home_location); 
                // let updatedLat = null;
                // let updatedLon = null;
                // updatedLat = `${Math.abs(selectedDrone.lat)}° ${selectedDrone.lat >= 0 ? "N" : "S"}`;
                //   updatedLon = `${Math.abs(selectedDrone.lon)}° ${selectedDrone.lat >= 0 ? "E" : "W"}`;;
                //   setShipPosition([...shipPosition, selectedDrone.home_location]);
                
                // setLat(updatedLat);
                // setLon(updatedLon);

                // let updatedDrones = {};
                // let updatedLat = null;
                // let updatedLon = null;
                // const updatedShipPosition = [];
                // data.drones.forEach((drone) => {
                //   drone.waypoints = Array.isArray(drone.waypoints) ? drone.waypoints : [];
                //   updatedDrones[drone.GCS_IP] = drone;
                //   updatedDrones = Object.values(drones).filter((drone) => drone.systemid === systemID)
                
    
                // setShipPosition(updatedShipPosition);
                // console.log(updatedDrones);
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
          return Object.entries(shipPosition).map((ship, index) => ({
            ...ship,
            icon: getShipIcon(index),
          }));
        }, [shipPosition]);

        console.log(shipsWithIcons)
      

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
        <div className="w-full h-full absolute z-50 flex flex-col top-0 left-0 font-pretendard bg-white text-white p-0">
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
                    className="w-1/2 h-full overflow-hidden flex justify-center items-center"
                    onWheel={(e) => handleWheelZoom(e, 0)}
                    onMouseDown={(e) => handleMouseDown(e, 0)}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onDoubleClick={() => resetZoom(0)}
                >
                    {remoteVideoRef.current !== null ? (<video
                        ref={remoteVideoRef}
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="cursor-grab w-full h-full object-fill"
                        style={{
                            transform: `scale(${video1State.scale}) translate(${video1State.x}px, ${video1State.y}px)`,
                            transition: "transform 0.1s ease-out",
                        }}
                    ></video>) : 
                    (<video
                    ref={videoRefs[0]}
                    src="TestVideo2.mp4"
                    autoPlay
                    loop
                    className="cursor-grab w-full h-full object-fill"
                    style={{
                        transform: `scale(${video1State.scale}) translate(${video1State.x}px, ${video1State.y}px)`,
                        transition: "transform 0.1s ease-out",
                    }}
                ></video>)
                    }
                </div>

                {/* Video 2 */}
                <div
                    className="w-1/2 h-full overflow-hidden flex justify-center items-center"
                    onWheel={(e) => handleWheelZoom(e, 0)}
                    onMouseDown={(e) => handleMouseDown(e, 0)}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onDoubleClick={() => resetZoom(0)}
                >
                    {remoteVideoRef.current !== null ? (<video
                        ref={remoteVideoRef}
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="cursor-grab w-full h-full object-fill"
                        style={{
                            transform: `scale(${video1State.scale}) translate(${video1State.x}px, ${video1State.y}px)`,
                            transition: "transform 0.1s ease-out",
                        }}
                    ></video>) : 
                    (<video
                    ref={videoRefs[0]}
                    src="TestVideo2.mp4"
                    autoPlay
                    loop
                    className="cursor-grab w-full h-full object-fill"
                    style={{
                        transform: `scale(${video1State.scale}) translate(${video1State.x}px, ${video1State.y}px)`,
                        transition: "transform 0.1s ease-out",
                    }}
                ></video>)
                    }
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
                            <div key={key} className="w-1/3 flex items-center p-[6px] justify-between border-b-0.5">
                                <div className="font-semibold">{key}:</div>
                                <div className="overflow-scroll">{value}</div>
                            </div>
                        ))
                        ) : (
                            <div>No drone data available</div>
                    )}


                    </div>
                </div>
                
                {/* Map */}
      {drones && Object.keys(drones).length > 0 && (<MapContainer
            center={[drones.lat, drones.lon]}
            zoom={14}
            className="z-0 w-1/2 h-full"
            zoomControl={false}
            attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {/* {shipsWithIcons && Object.keys(shipsWithIcons).map((ship, index) => (
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
              ))} */}
              {drones && Object.keys(drones).length > 0 && (
                <>
                <Marker
                  key={drones.systemid}
                  position={[drones.lat, drones.lon]}
                  icon={droneIcon(drones.yaw)}
                >
                  <Popup>
                    <div>
                    <strong>Drone id:</strong> VT00{drones.systemid} / {drones.systemid} <br />
                      <strong>Altitude(m):</strong> {drones.alt} m <br />
                      <strong>Time in air (m.s)</strong> {drones.time_in_air} m.s <br />
                      <strong>Airspeed (m/s):</strong> {drones.airspeed} m/s <br />
                      <strong>Groundspeed (m/s):</strong> {drones.ground_speed} m/s <br />
                      <strong>Battery (V):</strong> {drones.battery_voltage} V
                    </div>
                  </Popup>
                </Marker>
                <Polyline
                  key={drones.GCS_IP}
                  positions={Array.isArray(drones.waypoints) ? drones.waypoints.map((waypoint) => [waypoint.lat, waypoint.lon]) : []}
                  color="red"
                  opacity={0.5}
                  weight={2}
                />
              </>
              )}
        {wayPointsVisible &&<Polyline positions={drones.waypoints} color="#111111" opacity={0.5} weight={2} dashArray="5, 10"/>}
        
      </MapContainer>)}

            </div>

        </div>
    );
};

export default VideoViewer;
