import { Suspense } from "react";
import { Outlet } from "react-router";

import { CircleLoading } from "@/components/loading";
import SimpleLayout from "@/layouts/simple";

import AuthGuard from "../components/auth-guard";

import type { AppRouteObject } from "#/router";
/**
 * error routes
 * 403, 404, 500
 */
export const ErrorRoutes: AppRouteObject = {
	element: (
		<AuthGuard>
			<SimpleLayout>
				<Suspense fallback={<CircleLoading />}>
					<Outlet />
				</Suspense>
			</SimpleLayout>
		</AuthGuard>
	),
};
