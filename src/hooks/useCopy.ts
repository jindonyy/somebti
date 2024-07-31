export const useCopy = () => {
    const copy = (text: string, onSuccess?: () => void, onFail?: (error: any) => void) => {
        navigator.clipboard
            .writeText(text)
            .then(onSuccess)
            .catch((error) => onFail?.(error));
    };

    return { copy };
};
