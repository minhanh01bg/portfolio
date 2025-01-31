/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
                    '0%': { transform: 'translateY(-50px)'},
                    '100%': { transform: 'translateY(0px)'}
                  }
              },
              animation: {
                'scale-in-slow': 'scale-in 1.0s ease-out',
                'scale-in-fast': 'scale-in 0.3s ease-out',
                'bounce-up-slow': 'bounce-up 3.0s ease-out forwards',
                'bounce-up-fast': 'bounce-up 1.5s ease-out forwards',
                'up-down-slow': 'up-down 1.0s ease-out',
                'up-down-fast': 'up-down 0.3s ease-out'
              },
              colors: {
                'primary-1': '#312e81',
                'primary-2': '#1e1b4b',
                'secondary-1': '#141234',
                'secondary-2': '#0c0b20'
              }
        },
	},
	plugins: [],
}
