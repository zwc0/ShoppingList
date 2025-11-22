import { useEffect, useRef, useState } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import pkg from '../../package.json';
import { on, tryParseJson } from '../utils/utils';
import ThemeToggle from '../components/ThemeToggle';
import { useRouting } from '../hooks/useRouting';
import SvgTrash from '../components/icons/SvgTrash';
import SvgPencilSquare from '../components/icons/SvgPencilSquare';
import SvgPlusCircle from '../components/icons/SvgPlusCircle';
import SvgCheckCircle from '../components/icons/SvgCheckCircle';
import Settings from '../features/settings';
import Btn from '../components/base/btn';
import { styles } from '../constants';

type TListItem = {
	done: boolean;
	title: string;
	children: TListItem[];
};

const ListItem = ({
	done,
	title,
	children,
	onClickTitle,
	onChangeDone,
	removeItem,
	editTitle,
	className = '',
}: TListItem & {
	onClickTitle: any;
	onChangeDone: any;
	removeItem: any;
	editTitle: any;
	className?: string;
}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [newTitle, setNewTitle] = useState<string>(title);
	const refInput = useRef<HTMLInputElement>(null);
	const saveNewTitle = (e) => {
		e.stopPropagation();
		e.preventDefault();
		editTitle(title, newTitle);
		setIsEdit(false);
	};
	useEffect(() => {
		refInput.current?.focus();
	}, [isEdit]);

	return (
		<form
			class={'flex gap-2 items-center ' + className}
			onSubmit={saveNewTitle}
		>
			<div class="flex items-center justify-center">
				<input
					class="h-5 w-5"
					type="checkbox"
					checked={done}
					onChange={() => onChangeDone({ title, done: !done })}
				/>
			</div>
			{isEdit ? (
				<input
					class="grow border border-blue-800 rounded-md text-black"
					ref={refInput}
					value={newTitle}
					onInput={({ currentTarget }) =>
						setNewTitle(currentTarget.value)
					}
				/>
			) : (
				<div
					class={`grow ${!done ? '' : 'line-through'}`}
					onClick={() => onClickTitle({ title })}
				>
					{title}
				</div>
			)}
			<div class="min-w-fit flex items-center justify-center">
				{done ? (
					<Btn
						type="button"
						onClick={() => {
							removeItem({ title });
						}}
					>
						<SvgTrash />
					</Btn>
				) : isEdit ? (
					<Btn type="submit" disabled={!newTitle}>
						<SvgCheckCircle />
					</Btn>
				) : (
					<Btn
						type="button"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsEdit(true);
						}}
					>
						<SvgPencilSquare />
					</Btn>
				)}
			</div>
		</form>
	);
};

const initList = () =>
	tryParseJson<TListItem[]>(localStorage.getItem('shoppingList')) || [];

const getCurrList = (indexArr: string[], list: TListItem[]) => {
	return !indexArr.length
		? list
		: indexArr.reduce((p, c) => {
				return p.find((l) => l.title === c)?.children ?? [];
		  }, list);
};

const clone: <T>(json: T) => T = (json) => JSON.parse(JSON.stringify(json));

const Home = () => {
	const [list, setList] = useState<TListItem[]>(initList());
	const [newTitle, setNewTitle] = useState<string>('');
	const [indexArr, setIndexArr] = useRouting();
	const refInputAdd = useRef<HTMLInputElement>(null);
	const currList = getCurrList(indexArr, list);
	const dragRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const off = on(
			dragRef.current,
			'pointerdown',
			({ clientX: xStart, clientY: yStart, target }) => {
				const item =
					target instanceof HTMLFormElement
						? target
						: target instanceof HTMLElement
						? target.closest('form')
						: null;
				if (!item) return;
				const startIndex = [
					...(item.parentElement?.children ?? item),
				].findIndex((e) => e === item);
				const date = +new Date();
				let lastEl;

				function clear() {
					offUp();
					offMove();
					offTouchUp();
				}

				const offTouchUp = on(document.body, 'touchend', (e) => {
					const t = e.changedTouches[0];
					const target = document.elementFromPoint(
						t.clientX,
						t.clientY
					);
					lastEl = target;
					checkAndUpdate();
					// const item = target instanceof HTMLFormElement ? target : target instanceof HTMLElement ? target.closest('form') : null;
					// alert(item?.textContent || 'nope');
				});

				function checkAndUpdate() {
					const target = lastEl;
					const item =
						target instanceof HTMLFormElement
							? target
							: target instanceof HTMLElement
							? target.closest('form')
							: null;
					if (!item) return clear();
					const index = [
						...(item.parentElement?.children ?? item),
					].findIndex((e) => e === item);
					if (index === startIndex) return clear();

					setList((list) => {
						const newList = clone(list);
						let newCurrList;
						setIndexArr((arr) => {
							newCurrList = getCurrList(arr, newList);
							return arr;
						});
						newCurrList.splice(
							index,
							0,
							newCurrList.splice(startIndex, 1)[0]
						);
						console.log({ list, newList });
						return newList;
					});
					clear();
				}
				const offUp = on(document.body, 'pointerup', (e) => {
					if (+new Date() - date < 500) return clear();
					lastEl = e.target;
					checkAndUpdate();
				});

				const offMove = on(
					document.body,
					'pointermove',
					({ clientY, clientX }) => {
						if (
							+new Date() - date < 500 &&
							(yStart - clientY > 20 || xStart - clientX > 20)
						) {
							offUp();
							offMove();
						}
					}
				);
			}
		);
		return off;
	}, []);

	const addItem = (e) => {
		e.preventDefault();
		if (!newTitle) return;
		const newList = clone(list);
		const newCurrList = getCurrList(indexArr, newList);
		if (newCurrList.some((l) => l.title === newTitle)) return;
		newCurrList.push({ done: false, title: newTitle, children: [] });
		setList(newList);
		setNewTitle('');
		refInputAdd.current?.focus();
	};
	const removeItem = ({ title }) => {
		const doDelete = confirm(`Delete item (${title})?`);
		if (!doDelete) return;
		const newList = clone(list);
		const newCurrList = getCurrList(indexArr, newList);
		const index = newCurrList.findIndex((x) => x.title === title);
		newCurrList.splice(index, 1);
		setList(newList);
	};
	const editTitle = (title: string, newTitle: string) => {
		const newList = clone(list);
		const newCurrList = getCurrList(indexArr, newList);
		const item = newCurrList.find((l) => l.title === title);
		if (!item || newCurrList.some((l) => l.title === newTitle)) return;
		item.title = newTitle;
		setList(newList);
	};
	const onChangeDone = ({ title, done }) => {
		const newList = clone(list);
		const newCurrList = getCurrList(indexArr, newList);
		const item = newCurrList.find((l) => l.title === title);
		if (!item) return newCurrList;
		item.done = done;
		setList(newList);
	};
	const onClickTitle = ({ title }) => {
		setIndexArr((p) => {
			const newArr = clone(p);
			newArr.push(title);
			return newArr;
		});
	};
	const back = () => {
		const newArr = clone(indexArr);
		newArr.pop();
		setIndexArr(newArr);
	};
	function exportList() {
		const a = document.createElement('a');
		a.setAttribute(
			'href',
			'data:text/plain;charset=utf-8,' +
				encodeURIComponent(JSON.stringify(currList))
		);
		a.setAttribute('download', 'ShoppingList.json');
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
	async function importList(
		e: JSXInternal.TargetedEvent<HTMLInputElement, Event>
	) {
		const clearInput = () => {
			//@ts-ignore
			e.target.value = null;
		};
		try {
			const file = e.currentTarget.files?.[0];
			if (!file) return clearInput();
			const text = await file.text();
			const json = JSON.parse(text);
			if (
				!Array.isArray(json) ||
				!json.length ||
				!json.every(
					(e) =>
						'done' in e &&
						typeof e.done === 'boolean' &&
						'title' in e &&
						typeof e.title === 'string' &&
						'children' in e &&
						Array.isArray(e.children)
				)
			) {
				throw 'invalid object keys';
			}
			const wasConfirmed = confirm(
				'Are you sure you want to import the items from this file?'
			);
			if (!wasConfirmed) return clearInput();
			const newList = clone(list);
			const newCurrList = getCurrList(indexArr, newList);
			let anyFailed = false;
			json.forEach((e) => {
				if (newCurrList.some((l) => l.title === e.title))
					return (anyFailed = true);
				newCurrList.push(e);
			});
			setList(newList);
			if (anyFailed)
				alert(
					'One or more items could not be imported as an item already exists with the same name.'
				);
		} catch (e) {
			console.error(e);
			return alert('Unable to import. File data invalid.');
		}
		clearInput();
	}

	localStorage.setItem('shoppingList', JSON.stringify(list));

	return (
		<>
			<div class="flex flex-wrap gap-2 items-center mb-2">
				<h1 class="grow text-2xl text-center">Shopping List</h1>
				<label class={styles.btn}>
					Import
					<input
						type="file"
						accept=".json"
						onChange={importList}
						class="hidden"
					/>
				</label>
				<Btn type="button" onClick={exportList}>
					Export
				</Btn>
				<ThemeToggle />
			</div>
			<Settings />
			<div class="text-sm">v{pkg.version}</div>
			<div>
				{indexArr.length > 0 && (
					<button
						type="button"
						class="bg-blue-800 rounded-md p-1 px-2 mr-4 text-white"
						onClick={back}
					>
						Back
					</button>
				)}
				{indexArr.join(' - ')}
			</div>
			<div ref={dragRef} className="grid divide-blue-800 divide-y gap-1">
				{currList.map((li) => (
					<ListItem
						className="pt-1"
						key={li.title}
						done={li.done}
						title={li.title}
						children={li.children}
						onClickTitle={onClickTitle}
						onChangeDone={onChangeDone}
						removeItem={removeItem}
						editTitle={editTitle}
					/>
				))}
			</div>
			<form className="flex gap-4 pt-2" onSubmit={addItem}>
				<input
					ref={refInputAdd}
					class="grow border border-blue-800 rounded-md text-black"
					value={newTitle}
					onChange={({ currentTarget }) => {
						setNewTitle(currentTarget.value);
					}}
				/>
				<Btn type="submit" disabled={!newTitle}>
					<SvgPlusCircle />
				</Btn>
			</form>
		</>
	);
};

export default Home;
