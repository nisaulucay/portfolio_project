/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
    "./node_modules/sonner/**/*.js",
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
      colors: {
        background: 'hsl(40, 33%, 98%)',
        foreground: 'hsl(20, 14.3%, 4.1%)',
        primary: 'hsl(34, 38%, 67%)',
        'primary-foreground': 'hsl(211, 100%, 99%)',
        secondary: 'hsl(43, 77%, 80%)',
        'secondary-foreground': 'hsl(24, 9.8%, 10%)',
        accent: 'hsl(29, 31%, 52%)',
        'accent-foreground': 'hsl(60, 9.1%, 97.8%)',
        muted: 'hsl(60, 4.8%, 95.9%)',
        'muted-foreground': 'hsl(25, 5.3%, 44.7%)',
        border: 'hsl(20, 5.9%, 90%)',
        input: 'hsl(20, 5.9%, 90%)',
        card: 'hsl(0, 0%, 100%)',
        'card-foreground': 'hsl(20, 14.3%, 4.1%)',
        destructive: 'hsl(0, 84.2%, 60.2%)',
        'destructive-foreground': 'hsl(60, 9.1%, 97.8%)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
    },
  },
  plugins: [],
}


