import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        yellow: {
          DEFAULT: '#F4C430',
          hover: '#E6B820',
          light: '#FFF8E1',
        },
        charcoal: '#1A1A1A',
        muted: {
          DEFAULT: '#6B7280',
          foreground: '#6B7280',
        },
        border: '#F0F0F0',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: '#F4C430',
          foreground: '#1A1A1A'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        success: '#22C55E',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        body: ['var(--font-work-sans)', 'Work Sans', 'sans-serif'],
        sans: ['var(--font-work-sans)', 'Work Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'button': '50px',
        'card': '20px',
        'small': '12px',
      },
      boxShadow: {
        'card-hover': '0 20px 60px rgba(0,0,0,0.1)',
        'yellow-button': '0 4px 16px rgba(244,196,48,0.35)',
        'yellow-button-hover': '0 10px 32px rgba(244,196,48,0.45)',
        'nav-scrolled': '0 4px 24px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 0.6s ease both',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
