import { JSXInternal } from 'preact/src/jsx';
import { styles } from '../../constants';

export default function Btn({
	children,
	...props
}: JSXInternal.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button class={styles.btn} {...props}>
			{children}
		</button>
	);
}
