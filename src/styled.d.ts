import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primary: string;
        primaryVariant: string;
        accent: string;
        accentDark: string;
        dark: string;
        light: string;
    }
}
