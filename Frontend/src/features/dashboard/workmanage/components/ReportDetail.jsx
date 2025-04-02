import { useNavigate, useParams } from "react-router-dom";

const reportDetail = {
  id: 10,
  reportNo: "REP-2023-010",
  date: "2023-10-01",
  vessel: "Ocean Explorer",
  writer: "John Doe",
  writeReason: "Monthly inspection",
  workText: "Completed routine maintenance checks on all equipment.",
  progress: "100% complete",
  performance: "All systems functioning within normal parameters.",
  arisen: "Minor oil leak detected in engine room.",
  problemReason: "Worn gasket on pump #3",
  signature: { recording: "John Doe", approved: "Jane Smith" },
  reportReason: "Scheduled maintenance report",
  detail: "All maintenance tasks were completed. The minor oil leak was fixed.",
  file: "maintenance_report_10.pdf",
};

const ReportDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold">Report Detail</h1>
        <div className="space-x-2">
          {["Sign", "Excel", "Delete", "Edit"].map((action) => (
            <button
              key={action}
              className="px-3 py-1 border rounded-md bg-white shadow-sm"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-5 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-3">Work Report</h2>
        <div className="grid gap-3">
          {Object.entries(reportDetail).map(([key, value]) => (
            <div key={key} className="grid grid-cols-2 border-b py-2">
              <div className="font-semibold text-gray-600">{key.replace(/([A-Z])/g, " $1")}</div>
              <div className="text-gray-800">{typeof value === "string" ? value : JSON.stringify(value)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-blue-600 text-white rounded-md"
        >
          Back to Report List
        </button>
      </div>
    </div>
  );
};

export default ReportDetail;
