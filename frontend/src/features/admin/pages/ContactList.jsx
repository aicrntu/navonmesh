import { useEffect, useState } from "react";
import { getAllContacts } from "../../../api/contact.api";

export default function ContactList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllContacts().then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>

      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 uppercase text-gray-700 text-left">
            <tr>
              <th className="px-3 py-3">S.No</th>
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Email</th>
              <th className="px-3 py-3">Phone</th>
              <th className="px-3 py-3">Message</th>
              <th className="px-3 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="px-3 py-3">{index + 1}</td>
                <td className="px-3 py-3 font-medium">{item.name}</td>
                <td className="px-3 py-3">{item.email}</td>
                <td className="px-3 py-3">{item.number || "—"}</td>
                <td className="px-3 py-3 max-w-sm truncate">
                  {item.message}
                </td>
                <td className="px-3 py-3 text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="6" className="py-6 text-center text-gray-500">
                  No messages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
