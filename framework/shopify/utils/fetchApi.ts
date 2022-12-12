interface FetcherParams {
    query: string;
}

type FetcherResult<T> = T;

const fetchApi = async <T>({ query }: FetcherParams): Promise<FetcherResult<T>> => {
    const url = "http://localhost:4000/graphql";

    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const { data, errors } = await res.json();

    if (errors) {
        throw new Error(errors[0].message ?? errors.message);
    }

    return data;
};

export default fetchApi;
