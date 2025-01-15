import type { TouchableOpacityProps } from "react-native-gesture-handler";
import type {
	ColorProps,
	SpaceProps,
	LayoutProps,
	BorderProps,
	FlexboxProps,
	PositionProps,
	ShadowProps,

} from "styled-system";

export interface IBoxProps
	extends ColorProps,
	SpaceProps,
	LayoutProps,
	BorderProps,
	FlexboxProps,
	PositionProps,
	ShadowProps,
	TouchableOpacityProps {
	children?: React.ReactNode;
	topSafe?: boolean;
	bottomSafe?: boolean;
}
