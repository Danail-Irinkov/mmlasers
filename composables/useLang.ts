import { useI18n } from 'vue-i18n'

export const useLang = () => {
	const { t, getLocaleMessage } = useI18n()
	return {
		t, getLocaleMessage
	}
}
