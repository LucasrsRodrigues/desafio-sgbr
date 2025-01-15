import React from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { IBoxProps } from "./box";
import * as S from "./styles";

export function Box({
	children,
	topSafe,
	bottomSafe,
	pt,
	py,
	pb,
	paddingBottom,
	paddingTop,
	paddingY,
	padding,
	...rest
}: IBoxProps) {
	const insets = useSafeAreaInsets();

	// Calcula o padding top final
	const finalPaddingTop = topSafe
		? `${insets.top + Number(pt || paddingTop || paddingY || py || padding || 0)}px`
		: pt || paddingTop || paddingY || py || padding;

	// Calcula o padding bottom final
	const finalPaddingBottom = bottomSafe
		? `${insets.bottom + Number(pb || paddingBottom || paddingY || py || padding || 0)}px`
		: pb || paddingBottom || paddingY || py || padding;

	return (
		<S.Container
			padding={padding}
			pt={finalPaddingTop}
			pb={finalPaddingBottom}
			{...rest}
		>
			{children}
		</S.Container>
	);
}
