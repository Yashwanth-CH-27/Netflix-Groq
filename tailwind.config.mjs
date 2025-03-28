export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}", // ✅ Include component directories
      "./pages/**/*.{js,ts,jsx,tsx}" // ✅ Include Next.js-style page directories
    ],
    theme: {
      extend: {},
    },
    plugins: [require('tailwind-scrollbar-hide')],
  };
  