import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function AdminLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `block px-4 py-3 rounded-lg font-semibold transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white px-3 py-2 rounded-lg shadow"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        style={{ minHeight: "-webkit-fill-available" }}
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-2xl font-extrabold mb-8 tracking-wide">
          Admin Panel
        </h2>

        <nav className="space-y-2">
          <Link to="/admin/dashboard" className={linkClass("/admin/dashboard")}>
            Dashboard
          </Link>

          <Link to="/admin/contact" className={linkClass("/admin/contact")}>
            Contact
          </Link>

          <Link to="/admin/planx" className={linkClass("/admin/planx")}>
            PlanX
          </Link>

          <Link to="/admin/admad" className={linkClass("/admin/admad")}>
            AdMad
          </Link>

          <Link
            to="/admin/binarrybattle"
            className={linkClass("/admin/binarrybattle")}
          >
            Binary Battle
          </Link>

          <Link
            to="/admin/robowarrior"
            className={linkClass("/admin/robowarrior")}
          >
            Robo Warrior
          </Link>

          <Link to="/admin/innomaker" className={linkClass("/admin/innomaker")}>
            Innomaker
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
