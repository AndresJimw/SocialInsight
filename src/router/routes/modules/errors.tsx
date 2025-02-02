import { Suspense } from "react";
import { Outlet } from "react-router";

import { Iconify } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const errors: AppRouteObject[] = [
	{
		path: "error",
		order: 6,
		element: (
			<Suspense fallback={<CircleLoading />}>
				<Outlet />
			</Suspense>
		),
		meta: {
			label: "sys.menu.error.index",
			icon: (
				<Iconify
					icon="bxs:error-alt"
					className="ant-menu-item-icon"
					size="24"
				/>
			),
			key: "/error",
		},
	},
];

export default errors;
