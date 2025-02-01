import { Dropdown } from "antd";

import useLocale, { LANGUAGE_MAP } from "@/locales/useLocale";

import { IconButton, Iconify } from "../icon";

import type { MenuProps } from "antd";
import type { LocalEnum } from "#/enum";

type Locale = keyof typeof LocalEnum;

/**
 * Locale Picker
 */
export default function LocalePicker() {
	const { setLocale, locale } = useLocale();

	const localeList: MenuProps["items"] = Object.values(LANGUAGE_MAP).map(
		(item) => {
			return {
				key: item.locale,
				label: item.label,
				icon: <Iconify icon={item.icon} size={24} />,
			};
		},
	);

	return (
		<Dropdown
			placement="bottomRight"
			trigger={["click"]}
			menu={{ items: localeList, onClick: (e) => setLocale(e.key as Locale) }}
		>
			<IconButton className="h-10 w-10 hover:scale-105">
				<Iconify
					icon={LANGUAGE_MAP[locale].icon}
					size={24}
					className="rounded-md"
				/>
			</IconButton>
		</Dropdown>
	);
}
