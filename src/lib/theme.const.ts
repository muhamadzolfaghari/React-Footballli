import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

/**
 * The configuration for default font and localization to farsi Iranian.
 */
const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "Vazirmatn UI FD, Quicksand",
    },
  },
  faIR,
);

export default theme;
