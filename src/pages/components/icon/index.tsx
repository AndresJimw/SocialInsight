import { StepBackwardOutlined } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";

import { Iconify } from "@/components/icon";
import { useThemeToken } from "@/theme/hooks";

export default function IconPage() {
	const { colorPrimary, colorInfo, colorSuccess, colorWarning, colorError } =
		useThemeToken();
	return (
		<Space direction="vertical" style={{ display: "flex" }}>
			<Card title="Antd Icons">
				<span className="mr-1">For more info</span>
				<Typography.Link
					href="https://ant.design/components/icon-cn"
					style={{ color: colorPrimary }}
				>
					click here
				</Typography.Link>

				<p className="mt-2 flex flex-col text-info">
					<code>{`import { StepBackwardOutlined } from '@ant-design/icons';`}</code>
					<code>{"<StepBackwardOutlined /> "}</code>
				</p>

				<div className="mt-4">
					<StepBackwardOutlined width={24} />
				</div>
			</Card>
			<Card title="Iconify Icons">
				<span className="mr-1">
					Simply beautiful open source icons. For more info
				</span>
				<Typography.Link
					href="https://iconify.design/"
					style={{ color: colorPrimary }}
				>
					click here
				</Typography.Link>

				<p className="mt-2">
					<code className="text-info">{` <Iconify icon="solar:emoji-funny-square-bold-duotone" size={24} color={colorPrimary} /> `}</code>
				</p>

				<div className="mt-4 flex gap-4">
					<Iconify
						icon="solar:emoji-funny-square-bold-duotone"
						size={24}
						color={colorPrimary}
					/>
					<Iconify
						icon="solar:emoji-funny-square-bold-duotone"
						size={24}
						color={colorInfo}
					/>
					<Iconify
						icon="solar:emoji-funny-square-bold-duotone"
						size={24}
						color={colorSuccess}
					/>
					<Iconify
						icon="solar:emoji-funny-square-bold-duotone"
						size={24}
						color={colorWarning}
					/>
					<Iconify
						icon="solar:emoji-funny-square-bold-duotone"
						size={24}
						color={colorError}
					/>
				</div>
			</Card>
		</Space>
	);
}
