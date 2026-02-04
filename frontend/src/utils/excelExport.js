import * as XLSX from 'xlsx';

/**
 * Exports JSON data to an Excel file and triggers download.
 * @param {Array} data - Array of objects to export.
 * @param {string} fileName - Name of the file (without extension).
 */
export const exportToExcel = (data, fileName) => {
    if (!data || data.length === 0) {
        alert("No data available to export");
        return;
    }

    // Process data to remove Mongo internal fields or format specific ones if needed
    const processedData = data.map((item, index) => {
        const { _id, __v, updatedAt, ...rest } = item;
        return {
            "S.No": index + 1,
            ...rest,
            "Date": item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "N/A"
        };
    });

    const worksheet = XLSX.utils.json_to_sheet(processedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
};
