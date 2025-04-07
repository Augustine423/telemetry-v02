import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Download } from "lucide-react";

const basicInfo = {
  ReportNo: "REP-2023-010",
  Date: "2023-10-01",
  Author: "John Doe",
  Vessel: "Ocean Explorer",
  WorkForCreation: "Monthly inspection",
};
const WorkforCreation = {
  WorkDetail: "Work for creation",
  Progress: "Work inprogress",
  Result: "Succeed",
};

const WorkReportDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [buttonText, setButtonText] = useState("Necessity");
  const [signText, setSignText] = useState("Approved Person");
  const handleDownload=()=>{
    const fileUrl="";
    const link= document.createElement("a");
    link.href= fileUrl;
    link.setAttribute("download","sample.pdf");
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="mx-5">
      <div className="bg-white p-5 rounded-md shadow-md w-full px-10">
        <h2 className="text-xl font-semibold ">Work Report</h2>
        <div className="py-5">
          <h2 className="py-2 border-b font-semibold text-lg">Basic Info</h2>

          <div className="grid gap-3 py-5 border-b ">
            {Object.entries(basicInfo).map(([key, value]) => (
              <div key={key} className="grid grid-cols-4 gap-0">
                <div className="font-semibold text-slate-900">
                  {key.replace(/([A-Z])/g, " $1")}
                </div>
                <div className="text-gray-800">
                  {typeof value === "string" ? value : JSON.stringify(value)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-5">
          <h2 className="py-2 border-b font-semibold text-lg">
            Work for Creation
          </h2>
          <div className="grid gap-3 py-5 border-b ">
            {Object.entries(WorkforCreation).map(([key, value]) => (
              <div key={key} className="grid grid-cols-4 gap-0">
                <div className="font-semibold text-slate-900">
                  {key.replace(/([A-Z])/g, " $1")}
                </div>
                <div className="text-gray-800">
                  {typeof value === "string" ? value : JSON.stringify(value)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-5">
          <h2 className="py-2 border-b font-semibold text-lg">
            Issues and obstacles
          </h2>
          <div className="grid gap-3 py-5 border-b ">
            <div className="grid grid-cols-4 gap-3">
              <div className="font-semibold text-slate-900">Problem</div>
              <div className="text-gray-800">Need to fix issues</div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="font-semibold text-slate-900">Cause</div>
              <div className="text-gray-800">Testing is required</div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="font-semibold text-slate-900">Sign</div>
              <div className="flex w-fit">
              <span className="bg-gray-200 rounded-full px-2 py-0.5 inline-flex items-center justify-center ">
                {buttonText}
              </span>
                <span className="text-sm px-3 py-2 text-gray-500">
                  {signText}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <h2 className="py-2 border-b  font-semibold text-lg">
            Other Report
          </h2>
          <div className="grid gap-3 py-5 border-b ">
            <div className="grid grid-cols-4 gap-3">
              <div className="font-semibold text-slate-900">Cause</div>
              <div className="text-gray-800">Testing is required</div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="font-semibold text-slate-900">Detail</div>
              <div className="text-gray-800">Unit testing </div>
            </div>
          </div>
        </div>
        <div className="py-5">
        <h2 className="py-2 border-b text-lg font-semibold">
            Reference File
          </h2>
          <div className="grid gap-3 py-5 border-b ">
          <div className="grid grid-cols-4 gap-3">
          <div className="font-semibold text-slate-900">Attachment</div>

          <div className="flex items-center text-gray-800">
            <span>File Title</span>
            <button className="px-2 flex items-center text-center" onClick={handleDownload}> <Download className=" w-5 h-5"/></button></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WorkReportDetail;
