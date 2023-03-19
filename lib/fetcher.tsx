import useSWR, { SWRConfiguration } from 'swr';
const baseURL = "http://localhost:3000/";

// fetch APIを使ってJSONデータを取得する
const response = (...args: any[]) => fetch(...args).then(res => res.json()) 

export const fetcher = (endpoint: string) => {
    // SWRフックを使用して、キャッシュされたデータを取得する
    const { data, error } = useSWR(`${baseURL}${endpoint}`, response)
    return {
        data,
        isLoading : !error && !data,
        isError : error
    }
}