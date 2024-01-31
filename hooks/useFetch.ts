
import useSWR from "swr";

const fetcher = async (url: string, token: string = "") => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
};

const useFetch = (endPoint: string, token: string = "") => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${endPoint}`,
    (url: string) => fetcher(url, token)
  );

  const isLoading = !data && !error;
  return { data, isLoading, error };
};

export default useFetch;
