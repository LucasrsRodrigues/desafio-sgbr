import styled, { css, DefaultTheme } from "styled-components/native";
import IRNTextProps from "./text";
import { color, layout, space, typography } from "styled-system";
import ITextProps from "./text";

const variants = (theme: DefaultTheme, variants = 'medium') => ({
  "xlarge": css`
    font-size: ${theme.typography.fontSize.xl}px;
  `,
  "large": css`
    font-size: ${theme.typography.fontSize.lg}px;
  `,
  "medium": css`
    font-size: ${theme.typography.fontSize.md}px;
  `,
  "small": css`
    font-size: ${theme.typography.fontSize.sm}px;
  `,
  "xsmall": css`
    font-size: ${theme.typography.fontSize.xs}px;
  `,
}[variants]);

export const TextContainer = styled.Text<ITextProps>`
  ${space};
  ${typography};
  ${layout};

  ${({ theme, variant }) => variants(theme, variant)};
  font-family: ${({ theme, weight }) => theme.typography.fontFamily[weight!]};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  color: ${({ theme }) => theme.colors.text};
  ${color};

`;