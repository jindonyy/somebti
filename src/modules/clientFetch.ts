import { getCookie } from 'cookies-next';

export const clientFetch = async <T>(...args: Parameters<typeof fetch>) => {
    const token = getCookie('access_token');
    const url = (process.env.NEXT_PUBLIC_API_DOMAIN || '') + args[0];
    const options = {
        ...args[1],
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
            ...args[1]?.headers,
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json() as T;
    } catch (error) {
        console.error(`There was a problem with the fetch operation: ${error}`);
        return Promise.reject();
    }
};
