import { useState } from 'preact/hooks';
import Btn from '../../components/base/btn';
import { styles } from '../../constants';

export default function Settings() {
	return (
		<dialog open class="w-3/4">
			<_Settings />
		</dialog>
	);
}

function _Settings() {
	const [backgroundColor, setBackgroundColor] = useState('');
	const [buttonColor, setButtonColor] = useState('');

	function onSave() {
		if (backgroundColor)
			document.documentElement.style.setProperty(
				'--body-background-color',
				backgroundColor
			);
		else
			document.documentElement.style.removeProperty(
				'--button-background-color'
			);
		if (buttonColor)
			document.documentElement.style.setProperty(
				'--button-bg-color',
				buttonColor
			);
		else document.documentElement.style.removeProperty('--body-bg-color');
	}

	return (
		<div>
			<div class="text-center text-xl font-bold">Settings</div>
			<div class="border border-2 p-2">
				<div class="font-bold">Customize Colors:</div>
				<div class="flex gap-2 flex-wrap mb-2">
					<div class="border border-1 p-2">
						<label class="flex flex-col gap-1">
							<span>Background</span>
							<input
								type="color"
								value={backgroundColor}
								onChange={(e) =>
									setBackgroundColor(e.currentTarget.value)
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
				<Btn type="button">Close</Btn>
			</div>
		</div>
	);
}
