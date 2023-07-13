import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

const newColorTheme = {
  test: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E",
  },
};
const appTheme = extendTheme({ colors: newColorTheme });
export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
