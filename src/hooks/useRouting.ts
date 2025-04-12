import { getHash, useHash } from "./useHash";

const getArrFromHash = (hash: string) =>
    hash.split('/').map(x=>decodeURIComponent(x)).filter(Boolean);

export const useRouting = () => {
    const hash = useHash();
    const indexArr = getArrFromHash(hash);
    const setIndexArr = (updater: string[] | ((initialData: string[]) => string[])) => {
        const arr = (typeof updater === 'function')
            ? updater(getArrFromHash(getHash()))
            : updater;
        const hash = arr.map(x=>encodeURIComponent(x)).join('/');
        location.hash = hash;
    };
    return [indexArr, setIndexArr] as const;
}