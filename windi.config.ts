import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// colors
// import colors from 'windicss/colors'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

const MyTheme = {
	colors: {
		skin: {
			DEFAULT: '#b48f69',
			50: '#f3e5d8',
			100: '#e1cfbd',
			200: '#b0a08e',
			300: '#a9937b',
			400: '#9f7f5f',
			500: '#8a6848',
			600: '#805b37',
			700: '#725131',
			800: '#593613',
			900: '#412308',
		},
	},
}

export default defineConfig({
	darkMode: 'class',
	attributify: false,
	extract: {
		include: [
			'./components/**/*.{vue,js}',
			'./composables/**/*.{js,ts}',
			'./layouts/**/*.vue',
			'./pages/**/*.vue',
			'./plugins/**/*.{js,ts}',
			'./utils/**/*.{js,ts}',
			'./app.vue',
		],
	},
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
			colors: {
				primary: MyTheme.colors.skin,
	      skin: MyTheme.colors.skin,
			},
		},
	},
	shortcuts: {
		'light-img': 'block dark:hidden',
		'dark-img': 'hidden dark:block',
	},
	plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
	] as Plugin[],
})
