import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#1DA1F2',
      secondary: '#14171A',
      darkGray: '#657786',
      lightGray: '#AAB8C2',
      ExtraLightGray: '#E1E8ED',
      white: '#FFFFFF',
    }
  },
  plugins: [],
} satisfies Config;