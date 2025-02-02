import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router";

import { Iconify } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const ChartPage = lazy(() => import("@/pages/components/chart"));

const components: AppRouteObject = {
	order: 3,
	path: "components",
	element: (
		<Suspense fallback={<CircleLoading />}>
			<Outlet />
		</Suspense>
	),
	meta: {
		label: "sys.menu.components",
		icon: (
			<Iconify
				icon="solar:widget-5-bold-duotone"
				className="ant-menu-item-icon"
				size="24"
			/>
		),
		key: "/components",
	},
	children: [
		{
			index: true,
			element: <Navigate to="icon" replace />,
		},
		{
			path: "chart",
			element: <ChartPage />,
			meta: { label: "sys.menu.chart", key: "/components/chart" },
		},
	],
};

export default components;
