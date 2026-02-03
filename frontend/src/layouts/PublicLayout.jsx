import Navbar from "../features/public/components/home/Navbar";
import Footer from "../features/public/components/home/Footer";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white w-full flex justify-center max-w-[1920px] mx-auto">
      <div className="w-full relative shadow-2xl overflow-hidden bg-white">
        <Navbar />

        <main className="">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
