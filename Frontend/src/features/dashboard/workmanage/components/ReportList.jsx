import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import { Ellipsis } from "lucide-react";

const ReportList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 10;
  const navigate = useNavigate();

  const reportData = [
    {
      id: 1,
      reportNo: "REP-2023-010",
      classification: "Urgent",
      writer: "John Doe",
      date: "2023-10-01",
    },
    {
      id: 2,
      reportNo: "REP-2023-009",
      classification: "Normal",
      writer: "Jane Smith",
      date: "2023-09-28",
    },
    {
      id: 8,
      reportNo: "REP-2023-008",
      classification: "Low",
      writer: "Robert Johnson",
      date: "2023-09-25",
    },
    {
      id: 7,
      reportNo: "REP-2023-007",
      classification: "Urgent",
      writer: "Emily Davis",
      date: "2023-09-22",
    },
    {
      id: 6,
      reportNo: "REP-2023-006",
      classification: "Normal",
      writer: "Michael Wilson",
      date: "2023-09-19",
    },
    {
      id: 5,
      reportNo: "REP-2023-005",
      classification: "Low",
      writer: "Sarah Brown",
      date: "2023-09-16",
    },
    {
      id: 4,
      reportNo: "REP-2023-004",
      classification: "Urgent",
      writer: "David Miller",
      date: "2023-09-13",
    },
    {
      id: 3,
      reportNo: "REP-2023-003",
      classification: "Normal",
      writer: "Lisa Anderson",
      date: "2023-09-10",
    },
    {
      id: 2,
      reportNo: "REP-2023-002",
      classification: "Low",
      writer: "James Taylor",
      date: "2023-09-07",
    },
    {
      id: 1,
      reportNo: "REP-2023-001",
      classification: "Urgent",
      writer: "Jennifer Martinez",
      date: "2023-09-04",
    },
  ];

  // Filter reports based on search term
  const filteredReports = reportData.filter(
    (report) =>
      report.reportNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.classification.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.writer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);

  return (
    <div className="max-w-1xl mx-auto p-5 mb-5">
      <div className="flex mb-5">
        <div className="p-3 border-b-2 border-blue-600 font-semibold">Overview</div>
        <div className="p-3 cursor-pointer text-gray-500">Register</div>
      </div>

      <div className="bg-white rounded-md p-5 shadow-md">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Report List</h2>
          <input
            type="text"
            placeholder="Quick Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-64"
          />
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="grid grid-cols-6 bg-gray-100 font-semibold text-sm">
            <div className="p-3 text-center">No</div>
            <div className="p-3">Report No</div>
            <div className="p-3">Classification</div>
            <div className="p-3">Writer</div>
            <div className="p-3">Date</div>
            <div className="p-3 text-center">Actions</div>
          </div>

          {currentReports.map((report) => (
            <div
              key={report.id}
              className="grid grid-cols-6 border-t text-sm cursor-pointer hover:bg-gray-50"
            >
              <div className="p-3 text-center">{report.id}</div>
              <div className="p-3">{report.reportNo}</div>
              <div className="p-3">{report.classification}</div>
              <div className="p-3">{report.writer}</div>
              <div className="p-3">{report.date}</div>
              <div className="p-3 text-center">
                <button
                  onClick={() => navigate(`/report/${report.id}`)}
                  className="px-3 py-1 text-black rounded-md"
                >
                  <Ellipsis />
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination 
          totalReports={filteredReports.length} 
          reportsPerPage={reportsPerPage} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />
      </div>
    </div>
  );
};

export default ReportList;
