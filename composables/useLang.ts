import { useI18n } from 'vue-i18n'

export const useLang = () => {
	const { t, te, getLocaleMessage } = useI18n()
	return {
		t, te, getLocaleMessage
	}
}
