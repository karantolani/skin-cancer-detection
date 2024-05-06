import axios from "axios";
import {API_BASE_URL, AUTH_ROUTE, TEST_RESULTS_ROUTE} from "./constants.js";

export function validateEmail(email) {
    var regex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    return regex.test(email);
}

export async function authUserHomeLoader() {
    try {
        const response = await axios.get(API_BASE_URL + AUTH_ROUTE, {withCredentials: true});

        if (response.status >= 200 && response.status < 300)
            return response.data;
    }catch (error) {
    }

    return null;
}

export async function testResultsLoader() {
    try {
        const response = await axios.get(API_BASE_URL + TEST_RESULTS_ROUTE, {withCredentials: true});

        if (response.status >= 200 && response.status < 300)
            return response.data;
    }catch (error) {

    }

    return null;
}

export async function sharedResultsLoader({params}) {
    try {
        const response = await axios.get(API_BASE_URL + TEST_RESULTS_ROUTE + `/${params.key}`, {withCredentials: true});

        if (response.status >= 200 && response.status < 300)
            return response.data;
    }catch (error) {

    }

    return null;
}

export const getInitials = (name) => {
    const parts = name.split(' ')
    let initials = '';
    for (let i = 0; i < parts.length && i < 2; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
            initials += parts[i][0]
        }
    }
    return initials
}