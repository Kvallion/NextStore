import { fetchApi } from "../utils";
import { ApiConfig } from "@common/types/api";

class Config {
    constructor(private _config: ApiConfig) {}

    get config() {
        return this._config;
    }
}

const configWrapper = new Config({
    apiUrl: "http://localhost:4000/graphql",
    fetch: fetchApi,
});

export function getConfig(): ApiConfig {
    return configWrapper.config;
}
