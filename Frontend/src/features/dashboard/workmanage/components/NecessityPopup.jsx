import { useState } from "react";

export default function NecessityPopup() {
  const [buttonText, setButtonText] = useState("Necessity");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handlePopupConfirm = () => {
    setButtonText("Completion");
    setIsOpen(false);
  };

  const handlePopupRefusal = () => {
    setButtonText("Necessity"); // Change back to Necessity
    setIsOpen(false);
  };

  return (
    <div className="flex ms-auto">
      {/* Single Button */}
      <button
        onClick={handleButtonClick}
        className={`px-4 py-2 rounded-md ${
          buttonText === "Completion" ? "text-blue-500" : "bg-gray-200 text-gray-700"
        }`}
      >
        {buttonText}
      </button>

      {/* Pop-up Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p>Would you like to sign for the above flight records?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handlePopupConfirm}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md"
              >
                Sign
              </button>
              <button
                onClick={handlePopupRefusal} // Call this function on click
                className="px-4 py-2 bg-red-100 text-red-600 rounded-md"
              >
                Sign Refusal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
