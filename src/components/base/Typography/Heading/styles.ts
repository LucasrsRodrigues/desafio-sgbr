import styled, { css, DefaultTheme } from "styled-components/native";
import { color, layout, space, typography } from "styled-system";

const variants = (theme: DefaultTheme, variants = 'heading1') => ({
  "heading1": css`
   font-size: ${theme.typography.fontSize["6xl"]}px;
  `,
  "heading2": css`
    font-size: ${theme.typography.fontSize["5xl"]}px;
  `,
  "heading3": css`
    font-size: ${theme.typography.fontSize["4xl"]}px;
  `,
  "heading4": css`
    font-size: ${theme.typography.fontSize["3xl"]}px;
  `,
  "heading5": css`
    font-size: ${theme.typography.fontSize["2xl"]}px;
  `,
  "heading6": css`
    font-size: ${theme.typography.fontSize["xl"]}px;
  `,
}[variants]);

export default interface IRNTextProps {
  variant?: "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "heading6";
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
  color?: string;
}

export const HeadingContainer = styled.Text<IRNTextProps>`
  ${({ theme, variant }) => variants(theme, variant)};

  color: ${({ theme, color }) => color ?? theme.colors.text};

  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
  text-align: ${({ textAlign }) => textAlign};
`;