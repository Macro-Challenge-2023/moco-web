import { useEffect } from "react";

interface ModalProps {
   children: React.ReactNode;
   onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
   useEffect(() => {
      // Disable scrolling when the modal is open
      document.body.style.overflow = "hidden";
      return () => {
         // Enable scrolling when the modal is closed
         document.body.style.overflow = "unset";
      };
   }, []);

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 transition-opacity duration-500 ease-in-out">
         <div className="relative bg-white rounded-lg overflow-auto transition-transform duration-500 ease-in-out transform scale-95">
            <button
               onClick={onClose}
               className="absolute top-0 right-0 m-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200 ease-in-out flex items-center justify-center w-6 h-6"
            >
               <b>x</b>
            </button>
            <div className="p-4">{children}</div>
         </div>
      </div>
   );
}
