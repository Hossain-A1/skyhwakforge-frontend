import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center:true,
      padding:{
        default:'1rem',
        "sm":"0"
      }
    },
    extend: {
  colors:{
dark:"#1B1B1D",
light:"#F8F8F8",
blue:'#015EA7',
yellow:"#FFB62B"
  }
    },
  },
  plugins: [],
}
export default config
