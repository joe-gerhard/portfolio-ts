// import original module declarations
import "styled-components";

// and extend them!
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
