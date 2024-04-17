import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-white px-20 py-10">
      <Outlet />
    </div>
  );
};

export default MainLayout;
