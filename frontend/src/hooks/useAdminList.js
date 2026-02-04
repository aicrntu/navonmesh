import { useState, useMemo } from "react";

/**
 * Custom hook for handling common admin list logic.
 * @param {Array} data - Initial raw data.
 * @param {number} itemsPerPage - Number of items to show per page.
 */
export const useAdminList = (data, itemsPerPage = 10) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter data based on search query
    const filteredData = useMemo(() => {
        if (!searchQuery) return data;

        const query = searchQuery.toLowerCase();
        return data.filter((item) => {
            // Check all string/number values for the query
            return Object.values(item).some((val) =>
                String(val).toLowerCase().includes(query)
            );
        });
    }, [data, searchQuery]);

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredData, currentPage, itemsPerPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1); // Reset to first page on search
    };

    return {
        searchQuery,
        handleSearch,
        currentPage,
        totalPages,
        handlePageChange,
        paginatedData,
        totalItems: filteredData.length
    };
};
