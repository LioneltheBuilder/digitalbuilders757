// src/styles/theme.ts
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: '#007BFF',     // Electric Blue
    secondary: '#F2F4F6',   // Soft Gray
    accent: '#28A745',      // Vibrant Green
    orange: '#FD7E14',      // Warm Orange
    dark: '#343A40',        // Dark Slate
  },
  // Add any other theme customizations here
});

export default customTheme;
