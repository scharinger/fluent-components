import {
  BrandVariants,
  createDarkTheme,
  createLightTheme,
} from "@fluentui/react-components";
import { AxisTheme } from "..";

export const brand: BrandVariants = {
  10: "#281E03",
  20: "#342818",
  30: "#3E2F1D",
  40: "#4C381E",
  50: "#674808",
  60: "#B07A0F",
  70: "#E0A101",
  80: "#EFAB01",
  90: "#FEC10C",
  100: "#FFCC33",
  110: "#FFD450",
  120: "#FFDC70",
  130: "#FFE79B",
  140: "#FFEEBA",
  150: "#FFF6D7",
  160: "#FFFCF1",
};

export const axisDarkTheme: AxisTheme = {
  ...createDarkTheme(brand),
  colorNeutralForegroundOnBrand: "#000000",
  colorNeutralStroke3: "#2E2E2E",
  colorNeutralStroke2: "#383838",
  colorBrandStroke2: "#5C3E00",
  colorBrandForegroundLink: "#0ABAFF",
  colorBrandForegroundLinkHover: "#29C7FF",
  colorBrandForegroundLinkPressed: "#00AEF2",
  colorBrandForegroundLinkSelected: "#0ABAFF",
  colorScrollbarOverlay: "rgba(255,255,255,0.2)",
  colorStatusDangerBackground1: "#481D20",
  colorStatusDangerBorder1: "#901c27",
  colorStatusWarningBackground1: "#492D1D",
  colorStatusWarningBorder1: "#884228",
  colorStatusSuccessBackground1: "#113711",
  colorStatusSuccessBorder1: "#116811",
  axisCustomColorMySystemsBackground: "#004F6E",
  axisCustomColorMySystemsForeground: "#99D8F1",
  axisCustomColorMyAxisBackground: "#BC8D00",
  axisCustomColorMyAxisForeground: "#FFEBAD",
  axisCustomColorMyBusinessBackground: "#6B0646",
  axisCustomColorMyBusinessForeground: "#EF9BD1",
  axisCustomColorMyProductsBackground: "#476320",
  axisCustomColorMyProductsForeground: "#D1E8B2",
  axisCustomUtilityThemeName: "axisDarkTheme",
  axisCustomUtilityThemeVariant: "dark",
};

export const axisLightTheme: AxisTheme = {
  ...createLightTheme(brand),
  colorNeutralForegroundOnBrand: "#000000",
  colorBrandBackground: "#ffcc33",
  colorBrandBackgroundHover: "#FEC10C",
  colorBrandBackgroundPressed: "#B07A0F",
  colorBrandBackgroundSelected: "#B07A0F",
  colorNeutralForegroundInverted: "#242424",
  colorCompoundBrandBackground: "#FEC10C",
  colorCompoundBrandBackgroundHover: "#EFAB01",
  colorCompoundBrandBackgroundPressed: "#E0A101",
  colorBrandForegroundLink: "#028fcc",
  colorBrandForegroundLinkHover: "#0182b3",
  colorBrandForegroundLinkPressed: "#026690",
  colorBrandForegroundLinkSelected: "#028fcc",
  colorScrollbarOverlay: "rgba(0,0,0,0.2)",
  axisCustomColorMyAxisBackground: "#DFA001",
  axisCustomColorMyAxisForeground: "#FFF5D6",
  axisCustomColorMySystemsBackground: "#008DC6",
  axisCustomColorMySystemsForeground: "#CCEBF8",
  axisCustomColorMyBusinessBackground: "#C10B7E",
  axisCustomColorMyBusinessForeground: "#F7CEE8",
  axisCustomColorMyProductsBackground: "#7FB239",
  axisCustomColorMyProductsForeground: "#E8F4D9",
  axisCustomUtilityThemeName: "axisLightTheme",
  axisCustomUtilityThemeVariant: "light",
};