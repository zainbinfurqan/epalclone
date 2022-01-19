import { constants } from "./constants";

export const fetchApi = async function (path, method, body, authorization, url) {
    try {
        let apiUrl = url;

        if (!apiUrl) {
            apiUrl = constants.appKeys.BaseURL + path;
        }
        const headers = {};

        if (authorization) {
            headers.authorization = authorization;
        }

        if (method !== 'GET') {
            headers['Content-Type'] = 'application/json';
        }

        const options = {
            method,
            headers,
        };

        if (body) {
            options['body'] = JSON.stringify(body);
        }

        const response = await fetch(apiUrl, options);
        const json = await response.json();
        if (response.status !== 200) {
            throw new Error(json.message);
        }

        return await json;
    } catch (e) {
        throw e;
    }
};