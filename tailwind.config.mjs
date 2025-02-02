/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            screens: {
                'xs': '400px'
            },
            keyframes: {
                'scale-in': {
                  '0%': { transform: 'scale(0)' },
                  '100%': { transform: 'scale(1)' }
                },
                'bounce-up': {
                    '0%': { transform: 'translateY(-60px)' },
                    '25%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0px)' }
                  },
                  'up-down': {
                    '0%': { transform: 'translateY(-50px)' },
                    '100%': { transform: 'translateY(0px)' }
                  },
                  'down-up': {
                    '0%': { transform: 'translateY(500px)' },
                    '100%': { transform: 'translateY(0px)' }
                  },
                  'left-right': {
                    '0%': { transform: 'translateX(-105vh)' },
                    '100%': { transform: 'translateY(0px)'}
                  }
              },
              animation: {
                'scale-in-slow': 'scale-in 1.5s ease-out',
                'scale-in-fast': 'scale-in 0.3s ease-out',
                'bounce-up-slow': 'bounce-up 3.0s ease-out forwards',
                'bounce-up-fast': 'bounce-up 1.5s ease-out forwards',
                'up-down-slow': 'up-down 1.5s ease-out',
                'up-down-fast': 'up-down 0.3s ease-out',
                'down-up-slow': 'down-up 1.5s ease-out',
                'down-up-fast': 'down-up 0.3s ease-out',
                'left-right-slow': 'left-right 1.5s ease-out',
                'left-right-fast': 'left-right 0.3s ease-out'
              },
              colors: {
                'primary-1': '#141234',
                'primary-2': '#0c0b20',
                'secondary-1': '#1f1d43',
                'secondary-2': '#2c2a54',
                'btn-primary': '#48439D',
                'btn-primary-hover': '#4E49AB',
                'btn-secondary': '#6662BC',
                'btn-secondary-hover': '#7470C2',
                'link': '#ACA9DA',
                'link-hover': '#BAB8E0'
              }
        },
	},
	plugins: [require('tailwindcss-intersect'), require('tailwindcss-motion')],
}
