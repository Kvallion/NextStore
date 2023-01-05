export type ApiFetcherOptions = {
    url: string;
    query: string;
};

export interface ApiConfig {
    apiUrl: string;
    fetch<T>(options: ApiFetcherOptions): Promise<T>;
}
