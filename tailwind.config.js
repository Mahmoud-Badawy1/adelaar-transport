/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Custom shadow with x, y, blur
      },
      colors: {
        line: '#406F7A',
        orange: "#FF7D44",
        darkOrange: "#DE4F10",
        green1: "#1C3F39",
        green2: "#01323F",
        green3: "#104B59",
        green4: "#07847F",
        baseGreen: "#033C49",
        text1: "#505D7B",
        text2: "#798393",
        gray1: "#EEEEEE",
        gray2: "#C4C4C4",
        lightGreen1: "#CBF6FF",
        lightGreen2: "#5092A1",
        lightGreen3: "#E6F9FB",
        lightGreen4: "#CFE6F4",
        lightOrange: "#FFEAE6",
        greyBlue1: "#F2F8FA",
        greyBlue2: "#E0E8F4",
        darkblue:"#003B49",
        darkblue2:"#085363",
        'coral': {
          500: '#FF6B2C',
        },
      },
    },
  },
  plugins: [],
};