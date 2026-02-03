import { useEffect, useState } from "react";
import { getAllbinnarybattle } from "../../../api/binarrybattle.api";

export default function BinaryBattleList() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllbinnarybattle().then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Binary Battle Submissions</h1>

      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-3 py-3 text-left">S.No</th>
              <th className="px-3 py-3 text-left">Name</th>
              <th className="px-3 py-3 text-left">Email</th>
              <th className="px-3 py-3 text-left">Phone</th>
              <th className="px-3 py-3 text-left">State</th>
              <th className="px-3 py-3 text-left">Pincode</th>
              <th className="px-3 py-3 text-left">Who Are You</th>
              <th className="px-3 py-3 text-left">Institute</th>
              <th className="px-3 py-3 text-left">Year</th>
              <th className="px-3 py-3 text-left">Degree</th>
              <th className="px-3 py-3 text-left">GitHub</th>
              <th className="px-3 py-3 text-left">Technologies</th>
              <th className="px-3 py-3 text-left">Date</th>
              <th className="px-3 py-3 text-left">Project</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={item._id}
                className={`border-t hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                }`}
              >
                <td className="px-3 py-3 font-medium">{index + 1}</td>
                <td className="px-3 py-3 font-medium">{item.name}</td>
                <td className="px-3 py-3">{item.email}</td>
                <td className="px-3 py-3">{item.number}</td>
                <td className="px-3 py-3">{item.state}</td>
                <td className="px-3 py-3">{item.pincode}</td>
                <td className="px-3 py-3">{item.whoAreYou}</td>
                <td className="px-3 py-3">{item.institute}</td>
                <td className="px-3 py-3">{item.year}</td>
                <td className="px-3 py-3">{item.degree}</td>
                <td className="px-3 py-3">{item.githubLink}</td>

                <td className="px-3 py-3">
                  {item.technologies || (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
                <td className="px-3 py-3 text-gray-500">
                  {item.createdAt ? (
                    new Date(item.createdAt).toLocaleDateString()
                  ) : (
                    <span>Date not found</span>
                  )}
                </td>

                <td className="px-3 py-3">
                  {item.project ? (
                    <a
                      href={`${BACKEND_URL}/${item.project}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td
                  colSpan="13"
                  className="px-4 py-6 text-center text-gray-500"
                >
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
