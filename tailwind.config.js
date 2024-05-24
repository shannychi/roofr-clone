/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
              opacity: 0
          },
          "100%": {
              opacity: 1
          },
      },
      "slide-in-left": {
        "0%": {
            visibility: "visible",
            transform: "translate3d(-100%, 0, 0)",
        },
        "100%": {
            transform: "translate3d(0, 0, 0)",
        },
    },
    "slide-in-right": {
      "0%": {
          visibility: "visible",
          transform: "translate3d(100%, 0, 0)",
      },
      "100%": {
          transform: "translate3d(0, 0, 0)",
      },
  }, 
     "slideImage": {
      "0%": {
        transform: "translateX(0)"
      },
      "100%": {
        transform: "translateX(calc(-150px * 5))"
      }
     }
      },
      animation: {
        fadein: 'fade-in 1s ease-in-out 0.25s 1',
        slideinleft: 'slide-in-left 1s ease-in-out 0.25s 1',
        slideinright: 'slide-in-right 1s ease-in-out 0.00s 1',
        slideImage: "slide 10s linear infinite"
      }
    },
  },
  plugins: [],
}
