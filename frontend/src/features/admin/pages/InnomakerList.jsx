import { useEffect, useState } from "react";
import { getAllInnomaker } from "../../../api/innomaker.api";

export default function InnomakerList() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllInnomaker().then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Innomaker Submissions</h1>

      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 uppercase text-gray-700 text-left">
            <tr>
              <th className="px-3 py-3">S.No</th>
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Institute</th>
              <th className="px-3 py-3">Theme</th>
              <th className="px-3 py-3">Project Title</th>
              <th className="px-3 py-3">About</th>
              <th className="px-3 py-3">Date</th>
              <th className="px-3 py-3">Presentation</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="px-3 py-3">{index + 1}</td>
                <td className="px-3 py-3 font-medium">{item.name}</td>
                <td className="px-3 py-3">{item.institute}</td>
                <td className="px-3 py-3">{item.themeOfProject}</td>
                <td className="px-3 py-3">{item.titleOfProject}</td>
                <td className="px-3 py-3 max-w-xs truncate">
                  {item.aboutProject || "—"}
                </td>

                <td className="px-3 py-3 text-gray-500">
                  {item.createdAt ? (
                    new Date(item.createdAt).toLocaleDateString()
                  ) : (
                    <span>Date not found</span>
                  )}
                </td>

                <td className="px-3 py-3">
                  {item.presentation ? (
                    <a
                      href={`${BACKEND_URL}/${item.presentation}`}
                      target="_blank"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      View
                    </a>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="7" className="py-6 text-center text-gray-500">
                  No submissions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
