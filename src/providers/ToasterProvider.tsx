import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "",
        duration: 5000,
        style: {
          background: "#1C0244",
          color: "#fff",
        },

        success: {
          duration: 3000,
        },
      }}
    />
  );
};
