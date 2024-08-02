export const useCopy = () => {
    const copy = async (text: string) => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                return await navigator.clipboard.writeText(text);
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };

    return { copy };
};
