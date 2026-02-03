import { useEffect, useState } from "react";
import { getAllPlanx } from "../../../api/planx.api";

export default function PlanxList() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPlanx().then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold mb-6">PlanX Submissions</h1>

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
              <th className="px-3 py-3 text-left">Role</th>
              <th className="px-3 py-3 text-left">Organization</th>
              <th className="px-3 py-3 text-left">Team Member</th>
              <th className="px-3 py-3 text-left">Team Email</th>
              <th className="px-3 py-3 text-left">Team Detail</th>
              <th className="px-3 py-3 text-left">About Startup</th>
              <th className="px-3 py-3 text-left">Date</th>
              <th className="px-3 py-3 text-left">Presentation</th>
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
                {/* S.No */}
                <td className="px-3 py-3 font-medium">{index + 1}</td>

                <td className="px-3 py-3 font-medium">{item.name}</td>
                <td className="px-3 py-3">{item.email}</td>
                <td className="px-3 py-3">{item.number}</td>
                <td className="px-3 py-3">{item.state}</td>
                <td className="px-3 py-3">{item.pincode}</td>
                <td className="px-3 py-3">{item.whoAreYou}</td>
                <td className="px-3 py-3">{item.organizationName}</td>
                <td className="px-3 py-3">{item.teamMemberaName}</td>
                <td className="px-3 py-3">{item.emailOfTeam}</td>
                <td className="px-3 py-3">{item.teamDetail}</td>

                {/* Long text – keep readable */}
                <td
                  className="px-3 py-3 max-w-xs truncate"
                  title={item.aboutStartup}
                >
                  {item.aboutStartup}
                </td>

                <td className="px-3 py-3 text-gray-500">
                  {item.createdAt ? (
                    new Date(item.createdAt).toLocaleDateString()
                  ) : (
                    <span>Date not found</span>
                  )}
                </td>
                
                {/* Presentation */}
                <td className="px-3 py-3">
                  {item.presentation ? (
                    <a
                      href={`${BACKEND_URL}/${item.presentation}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
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
