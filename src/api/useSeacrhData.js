import { useQuery } from "react-query";
import { API_URL, PAGE_LENGTH } from "../config";

export default function useSeacrhData(searchQuery, page = 1) {
    const { isLoading, isSuccess, isError, data } = useQuery(['seacrh', { searchQuery, page }], async () => {
        const res = await fetch(`${API_URL}/search/users?q=${searchQuery}&page=${page}&per_page=${PAGE_LENGTH}`);
        if (!res.ok) {
            alert("Error");
            throw new Error("Error");
          }
        return await res.json();
    }, { keepPreviousData : true });

    return { isLoading, isSuccess, isError, data: data || [], perPage: PAGE_LENGTH };
}
