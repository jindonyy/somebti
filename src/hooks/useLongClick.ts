import { MutableRefObject } from 'react';

export const useLongClick = <E extends HTMLElement>(
    target: MutableRefObject<E | null>,
    duration: number,
    callback: () => void,
) => {
    if (!target?.current) return;

    target.current.onmousedown = () => {
        if (!target?.current) return;

        const timer = setTimeout(callback, duration);
        target.current.onmouseup = () => {
            clearTimeout(timer);
        };
    };

    target.current.ontouchstart = () => {
        if (!target?.current) return;

        const timer = setTimeout(callback, duration);
        target.current.ontouchend = () => {
            clearTimeout(timer);
        };
    };

    target.current.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });
};
