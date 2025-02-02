import { Col, Row } from "antd";
import Color from "color";

import Character3 from "@/assets/images/characters/character_3.png";
import { Iconify } from "@/components/icon";
import { useUserInfo } from "@/store/userStore";
import { useThemeToken } from "@/theme/hooks";

export default function BannerCard() {
	const { username } = useUserInfo();
	const themeToken = useThemeToken();

	const bg = `linear-gradient(135deg, ${Color(
		themeToken.colorPrimaryHover,
	).alpha(
		0.2,
	)}, ${Color(themeToken.colorPrimary).alpha(0.2)}) rgb(255, 255, 255)`;

	return (
		<Row
			className="!mx-0 rounded-2xl p-7"
			gutter={[16, 16]}
			justify="space-between"
			style={{ background: bg }}
		>
			<Col
				span={24}
				md={12}
				xl={16}
				className="flex-1 text-center md:text-left"
			>
				<div
					className="mt-4 text-lg font-semibold md:text-xl"
					style={{ color: themeToken.colorPrimaryActive }}
				>
					<h4>Welcome back 👋 </h4>
					<h4>{username}</h4>
				</div>
				<div
					style={{ color: themeToken.colorPrimaryTextActive }}
					className="mx-auto mb-6 mt-4 max-w-sm text-sm opacity-80 md:mx-0"
				>
					Welcome to Social Insight, your tool for analyzing and understanding
					your Facebook presence. Connect your Facebook account to get in-depth
					insights on your posts, engagement, and audience.
					<div>
						<a
							href="https://developers.facebook.com/docs/graph-api"
							target="_blank"
							className="text-base opacity-80"
							style={{ color: themeToken.colorPrimaryTextActive }}
							rel="noreferrer"
						>
							👉 Learn more about the Facebook Graph API
						</a>
					</div>
				</div>
				<button
					type="button"
					className="font-mediumtext-black m-auto flex items-center justify-center rounded-lg px-2 py-1 shadow-none md:m-0"
					style={{ backgroundColor: themeToken.colorPrimary, color: "#fff" }}
					onClick={() =>
						window.open("https://developers.facebook.com/docs/graph-api")
					}
				>
					<Iconify icon="akar-icons:facebook-fill" size={24} />
					<span className="ml-2 font-black">Connect with Facebook</span>
				</button>
			</Col>

			<Col
				span={24}
				md={12}
				xl={8}
				className="!md:max-w-[320px] mx-auto !max-w-[270px] flex-none items-center justify-center "
			>
				<img src={Character3} alt="Character" className="max-w-full h-auto" />
			</Col>
		</Row>
	);
}
