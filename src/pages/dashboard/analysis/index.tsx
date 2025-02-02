import { Card, Col, Row, Typography } from "antd";

import ChartBar from "@/pages/components/chart/view/chart-bar";
import ChartMixed from "@/pages/components/chart/view/chart-mixed";
import ChartPie from "@/pages/components/chart/view/chart-pie";
import ChartRadar from "@/pages/components/chart/view/chart-radar";

function Analysis() {
	return (
		<div className="p-2">
			<Typography.Title level={2}>Hi, Welcome back 👋</Typography.Title>

			<Row gutter={[16, 16]} className="mt-8" justify="center">
				<Col span={24} lg={12} xl={16}>
					<Card title="Website Visits">
						<ChartMixed />
					</Card>
				</Col>
				<Col span={24} lg={12} xl={8}>
					<Card title="Current Visits">
						<ChartPie />
					</Card>
				</Col>
			</Row>

			<Row gutter={[16, 16]} className="mt-8" justify="center">
				<Col span={24} lg={12} xl={16}>
					<Card title="Conversion Rates">
						<ChartBar />
					</Card>
				</Col>
				<Col span={24} lg={12} xl={8}>
					<Card title="Current Subject">
						<ChartRadar />
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default Analysis;
