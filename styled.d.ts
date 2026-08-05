import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    bgSecondary: string;
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
  }
}
