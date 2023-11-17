module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2F2F2', //main background
        secondary: '#CED4DA', //background shade
        tertiary: '#323338', //text color (main black)
        brandColor1: '#3C5B80',
        brandColor2: '#F0873B',
        neutral: '#74788D', 
        alertGreen: '#52FF00',
        alertYellow: '#EEB000',
        alertRed: '#DB4437',
        header: '#CED4DA',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
}

