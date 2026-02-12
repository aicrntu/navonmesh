import { useEffect, useState } from "react";
import { getAllInnomaker } from "../../../api/innomaker.api";
import { useAdminList } from "../../../hooks/useAdminList";
import { exportToExcel } from "../../../utils/excelExport";
import { Download, Search, ChevronLeft, ChevronRight } from "lucide-react";

const ExpandableText = ({ text, limit = 4 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return "N/A";

  const words = text.split(" ");
  if (words.length <= limit) return text;

  return (
    <div>
      <p>
        {isExpanded ? text : words.slice(0, limit).join(" ") + "..."}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-500 hover:underline text-xs mt-1 font-medium"
      >
        {isExpanded ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default function InnomakerList() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllInnomaker().then((res) => {
      setData(res.data.data);
    });
  }, []);

  const {
    searchQuery,
    handleSearch,
    currentPage,
    totalPages,
    handlePageChange,
    paginatedData,
    totalItems,
  } = useAdminList(data, 10);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Innomaker Submissions</h1>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search submissions..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-64"
            />
          </div>
          <button
            onClick={() => exportToExcel(data, "Innomaker_Submissions")}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            <Download className="w-4 h-4" />
            Export Excel
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-3 py-3 text-left">S.No</th>
              <th className="px-3 py-3 text-left">Name</th>
              <th className="px-3 py-3 text-left">Email</th>
              <th className="px-3 py-3 text-left">Phone</th>
              <th className="px-3 py-3 text-left">Participants</th>
              <th className="px-3 py-3 text-left">State</th>
              <th className="px-3 py-3 text-left">Pincode</th>
              <th className="px-3 py-3 text-left">Role</th>
              <th className="px-3 py-3 text-left">Institute</th>
              <th className="px-3 py-3 text-left">Project Name</th>
              <th className="px-3 py-3 text-left">Project Description</th>
              <th className="px-3 py-3 text-left">GitHub</th>
              <th className="px-3 py-3 text-left">Technologies</th>
              <th className="px-3 py-3 text-left">Date</th>
              <th className="px-3 py-3 text-left">File</th>
              <th className="px-3 py-3 text-left">Payment</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={item._id}
                className={`border-t hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                  }`}
              >
                <td className="px-3 py-3 font-medium">
                  {(currentPage - 1) * 10 + index + 1}
                </td>
                <td className="px-3 py-3 font-medium">{item.name}</td>
                <td className="px-3 py-3">{item.email}</td>
                <td className="px-3 py-3">{item.number}</td>
                <td className="px-3 py-3">
                  {item.participants?.length > 0 ? (
                    <div className="space-y-1">
                      {item.participants.map((p, i) => (
                        <div key={i} className="text-sm">
                          <span className="font-medium">{p.name}</span>
                          <span className="text-xs text-gray-500 block">{p.phone}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="px-3 py-3">{item.state}</td>
                <td className="px-3 py-3">{item.pincode}</td>
                <td className="px-3 py-3">{item.whoAreYou}</td>
                <td className="px-3 py-3 font-medium">{item.institute}</td>
                <td className="px-3 py-3 font-bold text-[#008fad]">{item.projectName}</td>
                <td className="px-3 py-3 min-w-[150px]">
                  <ExpandableText text={item.projectDescription} />
                </td>
                <td className="px-3 py-3">
                  {item.githubLink ? (
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Link</a>
                  ) : "N/A"}
                </td>
                <td className="px-3 py-3 min-w-[150px]">
                  <ExpandableText text={item.technologies} />
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
                      href={`${BACKEND_URL}/api/${item.project}`}
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

                <td className="px-3 py-3">
                  {item.paymentScreenshot ? (
                    <a
                      href={`${BACKEND_URL}/api/${item.paymentScreenshot}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline font-medium"
                    >
                      Receipt
                    </a>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan="11" className="px-4 py-6 text-center text-gray-500">
                  No submissions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 bg-white p-4 rounded-lg border shadow-sm">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(currentPage * 10, totalItems)}
            </span>{" "}
            of <span className="font-medium">{totalItems}</span> results
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center px-4 text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
