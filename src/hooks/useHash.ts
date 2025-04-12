import { useEffect, useState } from "preact/hooks";

export const getHash = () =>
    location.hash.startsWith('#') ? location.hash.slice(1) : location.hash;

export const useHash = () => {
    const [hash, setHash] = useState((getHash));
    useEffect(()=>{
        const abortController = new AbortController();
        window.addEventListener('hashchange', () => {
            console.log('test');
            setHash(getHash());
        }, {signal: abortController.signal});
        return () => {abortController.abort()};
    }, []);
    return hash;
}