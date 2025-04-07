import { useNavigate, useLocation } from 'react-router-dom';

const FlightNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab based on current path
  const getActiveTab = () => {
    const path = location.pathname.split('/').pop();
    return path || 'overview';
  };

  const activeTab = getActiveTab();

  const handleTabClick = (tabName) => {
    navigate(`/flight-records/${tabName}`);
  };

  return (
    <div className="flex border-b">
      <button
        onClick={() => navigate("/dashboard/flightrecord")}
        className={`px-4 py-4 ${
          activeTab === "flightrecord"
            ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Overview
      </button>
      <button
        onClick={() => navigate("/dashboard/preflight")}
        className={`px-4 py-4 ${
          activeTab === "pre-flight"
            ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Pre Flight Record
      </button>
      <button
        onClick={() => handleTabClick("in-flight")}
        className={`px-4 py-4 ${
          activeTab === "in-flight"
            ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        In Flight Record
      </button>
      <button
        onClick={() => handleTabClick("post-flight")}
        className={`px-4 py-4 ${
          activeTab === "post-flight"
            ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Post Flight Record
      </button>
      <button
        onClick={() => handleTabClick("detail-work")}
        className={`px-4 py-4 ${
          activeTab === "detail-work"
            ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Detail Work
      </button>
    </div>
  );
};

export default FlightNav;