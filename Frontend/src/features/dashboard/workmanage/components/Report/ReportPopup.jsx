import { X } from "lucide-react";

// eslint-disable-next-line react/prop-types
const ReportPopup = ({onClose}) =>{ 
    const closePopup = () => {
    onClose();
  };
  console.log(closePopup);
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-md shadow-md py-5 px-10 fixed top-1/2 left-1/3 -translate-y-1/2 z-50">
           
                <h2 className="font-semibold text-lg text-start">Do you want to sign the above report?</h2>
                <div className="flex flex-row justify-start py-7">
                    <label htmlFor="admonition"  className="text-gray-800 pr-5 font-semibold">Admonition</label>
                    <input type="text" id="admonition" placeholder="Please Enter" className="px-2 py-1 border rounded-md w-full"/>
                </div>
                <div className="flex flex-row">
                    <button className="border border-gray-400 px-7 py-2 rounded-md" onClick={closePopup}>Cancel</button>
                    <button className="bg-blue-200 text-blue-500 px-7 py-2 mx-5 rounded-md">Sign</button>
                    <button className="bg-orange-200 text-orange-500 px-7 py-2 rounded-md">Sign Refusal</button>
                </div>
            </div>
    </div>
    
  )
}

export default ReportPopup