export const tryParseJson: <T>(json) => T | null = (json) => {
    try {
        if (typeof json !== 'string')
            return null;
        return JSON.parse(json);
    }catch(e){
        return null;
    }
}

export function on<K extends keyof HTMLElementEventMap>(
    target: HTMLElement | undefined | null,
    key: K,
    fn: (e: HTMLElementEventMap[K]) => void,
    opts?: AddEventListenerOptions
){
    if (!target)
        return ()=>{};
    target.addEventListener(key, fn, opts ?? false);
    return () => target.removeEventListener(key, fn, opts ?? false);
}