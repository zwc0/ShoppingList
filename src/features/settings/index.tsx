import { useEffect, useRef, useState } from 'preact/hooks';
import Btn from '../../components/base/btn';
import { styles } from '../../constants';
import SvgCog6Tooth from '../../components/icons/SvgCog6Tooth';
import {
	getLocalStorage,
	saveLocalStorage,
	ThemeCssVariables,
} from '../../utils/localStorage';

//TODO - probably move this to a separate file
function applyThemeVariable(
	name: ThemeCssVariables,
	value: string | undefined | null
) {
	if (value) document.documentElement.style.setProperty(name, value);
	else document.documentElement.style.removeProperty(name);
}

export default function Settings() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const { theme } = getLocalStorage('settings') || {};
		if (!theme) return;
		applyThemeVariable('--body-bg-color', theme['--body-bg-color']);
		applyThemeVariable('--button-bg-color', theme['--button-bg-color']);
	});

	return (
		<>
			<Btn type="button" onClick={() => setIsOpen(true)}>
				<SvgCog6Tooth />
			</Btn>
			{isOpen && <_Settings onClose={() => setIsOpen(false)} />}
		</>
	);
}

function _Settings({ onClose }: { onClose: () => void }) {
	const ref = useRef<HTMLDialogElement>(null);

	const [backgroundColor, setBackgroundColor] = useState(
		document.documentElement.style.getPropertyValue('--body-bg-color') || ''
	);
	const [buttonColor, setButtonColor] = useState(
		document.documentElement.style.getPropertyValue('--button-bg-color') ||
			''
	);

	useEffect(() => {
		if (ref.current) ref.current.showModal();
		() => {
			if (ref.current) ref.current.close();
		};
	}, []);

	function onSave() {
		applyThemeVariable('--body-bg-color', backgroundColor);
		applyThemeVariable('--button-bg-color', buttonColor);

		saveLocalStorage('settings', {
			theme: {
				'--body-bg-color': backgroundColor,
				'--button-bg-color': buttonColor,
			},
		});

		onClose();
	}

	return (
		<dialog ref={ref} class="w-3/4">
			<div>
				<div class="text-center text-xl font-bold">Settings</div>
				<div class="border border-2 p-2">
					<div class="flex flex-wrap gap-4 p-1 items-center">
						<div class="font-bold">Customize Colors:</div>
						<Btn
							type="button"
							onClick={() => {
								setBackgroundColor('');
								setButtonColor('');
							}}
						>
							Reset
						</Btn>
					</div>
					<div class="flex gap-2 flex-wrap mb-2">
						<div class="border border-1 p-2">
							<label class="flex flex-col gap-1">
								<span>Background</span>
								<input
									type="color"
									value={backgroundColor}
									onChange={(e) =>
										setBackgroundColor(
											e.currentTarget.value
										)
									}
								/>
							</label>
						</div>
						<div class="border border-1 p-2">
							<label class="flex flex-col gap-1">
								<span>Buttons</span>
								<input
									type="color"
									value={buttonColor}
									onChange={(e) =>
										setButtonColor(e.currentTarget.value)
									}
								/>
							</label>
						</div>
					</div>
					<div
						class={`p-4 ${styles.background}`}
						style={{
							'--body-background-color': backgroundColor,
							'--button-bg-color': buttonColor,
						}}
					>
						<div class="text-center">Preview</div>
						<div>
							<Btn>Button</Btn>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap gap-4 mt-4">
					<Btn type="button" onClick={onSave}>
						Save
					</Btn>
					<Btn type="button" onClick={onClose}>
						Close
					</Btn>
				</div>
			</div>
		</dialog>
	);
}
