import { useState } from "react";

export function usePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); 


  const open = (data = null) => {
    setPopupData(data);
    setIsOpen(true);
    setIsEditMode(false); // Ensure we are in view mode when opening
  };


  const close = () => {
    setIsOpen(false);
    setPopupData(null);
    setIsEditMode(false);
  };

  const openEdit = () => {
    setIsEditMode(true);
    setIsOpen(true); // Ensure popup remains open
  };

  return { isOpen, popupData, isEditMode, open, close, openEdit };
}
