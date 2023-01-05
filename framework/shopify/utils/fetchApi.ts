import { ApiFetcherOptions } from "@common/types/api";

// type FetcherResult<T> = T;

const fetchApi = async <T>({ url, query }: ApiFetcherOptions): Promise<T> => {
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const { data, errors } = await res.json();

    if (errors) {
        throw new Error(Array.isArray(errors) ? errors.join("\n\n") : errors.message);
    }

    return data;
};

export default fetchApi;
