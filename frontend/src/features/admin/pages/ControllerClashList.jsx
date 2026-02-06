import { useEffect, useState } from "react";
import { getAllControllerClash } from "../../../api/controllerclash.api";
import { useAdminList } from "../../../hooks/useAdminList";
import { exportToExcel } from "../../../utils/excelExport";
import { Download, Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function ControllerClashList() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        getAllControllerClash().then((res) => {
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
        <div className="p-6 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h1 className="text-2xl font-bold">Controller Clash Submissions</h1>
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
                        onClick={() => exportToExcel(data, "ControllerClash_Submissions")}
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
                            <th className="px-3 py-3 text-left">Team Name</th>
                            <th className="px-3 py-3 text-left">Captain Name</th>
                            <th className="px-3 py-3 text-left">Captain Phone</th>
                            <th className="px-3 py-3 text-left">P1 IGN / ID</th>
                            <th className="px-3 py-3 text-left">P2 IGN / ID</th>
                            <th className="px-3 py-3 text-left">Date</th>
                            <th className="px-3 py-3 text-center">Action</th>
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
                                <td className="px-3 py-3 font-medium text-blue-600">{item.teamName}</td>
                                <td className="px-3 py-3 font-medium">{item.captainName}</td>
                                <td className="px-3 py-3">{item.captainPhone}</td>
                                <td className="px-3 py-3">
                                    <div className="font-bold">{item.bgmiIGN}</div>
                                    <div className="text-xs text-gray-500">{item.bgmiPlayerId}</div>
                                </td>
                                <td className="px-3 py-3 text-xs">
                                    <div className="font-bold text-gray-700">{item.player2IGN}</div>
                                    <div className="text-gray-500">{item.player2Id}</div>
                                </td>

                                <td className="px-3 py-3 text-gray-500">
                                    {item.createdAt ? (
                                        new Date(item.createdAt).toLocaleDateString()
                                    ) : (
                                        <span>Date not found</span>
                                    )}
                                </td>

                                <td className="px-3 py-3 text-center">
                                    <button
                                        onClick={() => setSelectedItem(item)}
                                        className="bg-[#008fad] text-white px-3 py-1 rounded-md text-xs font-bold hover:bg-[#007a94] transition"
                                    >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {paginatedData.length === 0 && (
                            <tr>
                                <td colSpan="8" className="px-4 py-6 text-center text-gray-500">
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

            {/* DETAIL MODAL */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="bg-[#008fad] p-6 text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold">{selectedItem.teamName}</h3>
                                <p className="text-[#e0f2f1] text-sm opacity-90">Submission ID: {selectedItem._id}</p>
                            </div>
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition text-2xl font-light"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 overflow-y-auto space-y-8">
                            {/* Captain & Tournament Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-[#008fad] uppercase tracking-wider border-b-2 border-teal-100 pb-1">Captain Details</h4>
                                    <div className="space-y-2">
                                        <p className="text-gray-700 flex justify-between"><span className="font-semibold text-gray-500">Name:</span> {selectedItem.captainName}</p>
                                        <p className="text-gray-700 flex justify-between"><span className="font-semibold text-gray-500">Phone:</span> {selectedItem.captainPhone}</p>
                                        <p className="text-gray-700 flex justify-between"><span className="font-semibold text-gray-500">Email:</span> {selectedItem.captainEmail}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-[#008fad] uppercase tracking-wider border-b-2 border-teal-100 pb-1">Tournament Type</h4>
                                    <div className="inline-block px-4 py-2 bg-teal-50 text-[#008fad] font-black rounded-xl border border-teal-100 uppercase tracking-widest text-lg">
                                        {selectedItem.tournamentType}
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">Submitted on: {new Date(selectedItem.createdAt).toLocaleString()}</p>
                                </div>
                            </div>

                            {/* Squad Details */}
                            <div className="space-y-6">
                                <h4 className="text-sm font-black text-[#008fad] uppercase tracking-wider border-b-2 border-teal-100 pb-1">Squad Members</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { id: "", label: "Player 1 (Team Lead)" },
                                        { id: "2", label: "Player 2" },
                                        { id: "3", label: "Player 3" },
                                        { id: "4", label: "Player 4" }
                                    ].map((p, idx) => (
                                        <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 group hover:border-[#008fad] transition-colors">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="w-6 h-6 rounded-full bg-[#008fad]/10 text-[#008fad] flex items-center justify-center font-bold text-xs">{idx + 1}</span>
                                                <span className="font-bold text-gray-800 text-sm">{p.label}</span>
                                                <span className="ml-auto px-2 py-0.5 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-gray-500 group-hover:bg-[#008fad] group-hover:text-white transition-colors uppercase">
                                                    {selectedItem[p.id ? `player${p.id}Role` : "role"] || "No Role"}
                                                </span>
                                            </div>
                                            <div className="space-y-1 pl-9">
                                                <p className="text-sm text-gray-800 font-medium">{selectedItem[p.id ? `player${p.id}Name` : "playerName"]}</p>
                                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                                    <span className="bg-gray-200/50 px-2 py-0.5 rounded italic">IGN: <span className="font-bold text-gray-700">{selectedItem[p.id ? `player${p.id}IGN` : "bgmiIGN"]}</span></span>
                                                    <span className="bg-gray-200/50 px-2 py-0.5 rounded italic">ID: <span className="font-bold text-gray-700">{selectedItem[p.id ? `player${p.id}Id` : "bgmiPlayerId"]}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Payment Screenshot */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-[#008fad] uppercase tracking-wider border-b-2 border-teal-100 pb-1">Payment Proof</h4>
                                {selectedItem.paymentScreenshot ? (
                                    <div className="relative rounded-2xl overflow-hidden border-2 border-gray-100 bg-gray-50 group">
                                        <img
                                            src={`${BACKEND_URL}/api/${selectedItem.paymentScreenshot}`}
                                            alt="Payment Screenshot"
                                            className="max-h-96 w-full object-contain mx-auto"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <a
                                                href={`${BACKEND_URL}/api/${selectedItem.paymentScreenshot}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-xl hover:scale-105 transition active:scale-95"
                                            >
                                                Open Full Size
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-12 text-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-medium italic">
                                        No payment screenshot uploaded
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t bg-gray-50 flex justify-end">
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl transition active:scale-95"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
