import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
  colors:{
dark:"#1B1B1D",
light:"#F8F8F8",
blue:'#015EA7',
yellow:"#FFB62B",
red:"#B40003"
  }
    },
  },
  plugins: [],
}
export default config
