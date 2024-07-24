export const clientFetch = (...args: Parameters<typeof fetch>) => {
    return () => fetch(...args);
};
