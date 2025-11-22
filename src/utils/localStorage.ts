const prefix = 'shoppingList-';

export type ThemeCssVariables = '--body-bg-color' | '--button-bg-color';

type LocalStorageItems = {
	settings: {
		theme?: Partial<Record<ThemeCssVariables, string>>;
	};
};

type LocalStorageKey = keyof LocalStorageItems;

export function getLocalStorage(key: LocalStorageKey) {
	try {
		return JSON.parse(
			localStorage.getItem(prefix + key) ?? ''
		) as LocalStorageItems[LocalStorageKey];
	} catch (e) {
		return null;
	}
}

export function saveLocalStorage<TKey extends LocalStorageKey>(
	key: TKey,
	val: LocalStorageItems[TKey]
) {
	localStorage.setItem(prefix + key, JSON.stringify(val));
}
