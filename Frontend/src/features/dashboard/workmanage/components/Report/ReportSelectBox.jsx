import React from 'react'
import { useState } from 'react';
import {
    BsFillCaretDownFill
  } from "react-icons/bs";
import WorkReportRegister from './WorkReportRegister';
import IncidentReportRegister from './IncidentReport/IncidentReportRegister';
import MaintenanceReportRegister from './MaintenanceReport/MaintenanceReportRegister';
import ItemRequestReportRegister from './ItemRequestReport/ItemRequestReportRegister';
import HandoverReportRegister from './HandoverReport/HandoverReportRegister';
import TakeoverReportRegister from './TakeoverReport/TakeoverReportRegister';
import DailyReportRegister from './DailyReport/DailyReportRegister';


  const REPORT_COMPONENTS = {
    "Daily Report":()=> <DailyReportRegister/>,
    "Work Report": () => <WorkReportRegister />,
    "Incident Report": () =><IncidentReportRegister/>,
    "Maintenance Report": () => <MaintenanceReportRegister/>,
    "Item Request Report": () => <ItemRequestReportRegister/>,
    "Handover Report": () => <HandoverReportRegister/>,
    "Takeover Report": () => <TakeoverReportRegister/>
  }
    const REPORT_OPTIONS = Object.keys(REPORT_COMPONENTS)
    
    
 const ReportSelectBox=()=>{  
  
  const [selectedReport, setSelectedReport] =useState(REPORT_OPTIONS[0]);
  const SelectedReport =REPORT_COMPONENTS[selectedReport];
  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
    <div className="flex items-center mb-6">
    <h1 className="text-lg font-medium text-gray-800">Report Form</h1>
    <div className="relative w-96 left-24">
      <select value={selectedReport}
          onChange={(e) => setSelectedReport(e.target.value)} 
          className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
        
        {REPORT_OPTIONS.map((report) => (
              <option key={report} value={report}>
                {report}
              </option>
            ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <BsFillCaretDownFill className="w-4 h-4 " />
      </div>
    </div>
    </div>
    <SelectedReport />
    
    </div>
    </div>
  </div>
  )
}

export default ReportSelectBox