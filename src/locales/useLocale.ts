import en_US from "antd/locale/en_US";
import es_ES from "antd/locale/es_ES";
import { useTranslation } from "react-i18next";

import type { Locale as AntdLocal } from "antd/es/locale";
import { LocalEnum } from "#/enum";

type Locale = keyof typeof LocalEnum;
type Language = {
	locale: keyof typeof LocalEnum;
	icon: string;
	label: string;
	antdLocal: AntdLocal;
};

export const LANGUAGE_MAP: Record<Locale, Language> = {
	[LocalEnum.es_ES]: {
		locale: LocalEnum.es_ES,
		label: "Español",
		icon: "circle-flags:ec",
		antdLocal: es_ES,
	},
	[LocalEnum.en_US]: {
		locale: LocalEnum.en_US,
		label: "English",
		icon: "circle-flags:us",
		antdLocal: en_US,
	},
};

export default function useLocale() {
	const { i18n } = useTranslation();

	/**
	 * localstorage -> i18nextLng change
	 */
	const setLocale = (locale: Locale) => {
		i18n.changeLanguage(locale);
	};

	const locale = (i18n.resolvedLanguage || LocalEnum.en_US) as Locale;

	const language = LANGUAGE_MAP[locale];

	return {
		locale,
		language,
		setLocale,
	};
}
