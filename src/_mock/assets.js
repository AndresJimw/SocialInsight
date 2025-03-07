import useUserStore from "@/store/userStore";
import { faker } from "@faker-js/faker";

import { BasicStatus, PermissionType } from "#/enum";

/**
 * User permission mock
 */
const DASHBOARD_PERMISSION = {
	id: "9100714781927703",
	parentId: "",
	label: "sys.menu.dashboard",
	name: "Dashboard",
	icon: "ic:baseline-analytics",
	type: PermissionType.CATALOGUE,
	route: "dashboard",
	order: 1,
	children: [
		{
			id: "8426999229400979",
			parentId: "9100714781927703",
			label: "sys.menu.workbench",
			name: "Workbench",
			type: PermissionType.MENU,
			route: "workbench",
			component: "/dashboard/workbench/index.tsx",
		},
		{
			id: "9710971640510357",
			parentId: "9100714781927703",
			label: "sys.menu.analysis",
			name: "Analysis",
			type: PermissionType.MENU,
			route: "analysis",
			component: "/dashboard/analysis/index.tsx",
		},
	],
};
const MANAGEMENT_PERMISSION = {
	id: "0901673425580518",
	parentId: "",
	label: "sys.menu.management",
	name: "Management",
	icon: "ic:baseline-manage-accounts",
	type: PermissionType.CATALOGUE,
	route: "management",
	order: 2,
	children: [
		{
			id: "2781684678535711",
			parentId: "0901673425580518",
			label: "sys.menu.user.index",
			name: "User",
			type: PermissionType.CATALOGUE,
			route: "user",
			children: [
				{
					id: "4754063958766648",
					parentId: "2781684678535711",
					label: "sys.menu.user.profile",
					name: "Profile",
					type: PermissionType.MENU,
					route: "profile",
					component: "/management/user/profile/index.tsx",
				},
				{
					id: "2516598794787938",
					parentId: "2781684678535711",
					label: "sys.menu.user.account",
					name: "Account",
					type: PermissionType.MENU,
					route: "account",
					component: "/management/user/account/index.tsx",
				},
			],
		},
	],
};
const COMPONENTS_PERMISSION = {
	id: "2271615060673773",
	parentId: "",
	label: "sys.menu.components",
	name: "Components",
	icon: "solar:widget-5-bold-duotone",
	type: PermissionType.CATALOGUE,
	route: "components",
	order: 3,
	children: [
		{
			id: "7749726274771764",
			parentId: "2271615060673773",
			label: "sys.menu.chart",
			name: "Chart",
			type: PermissionType.MENU,
			route: "chart",
			component: "/components/chart/index.tsx",
		},
	],
};

const OTHERS_PERMISSION = [
	{
		id: "3981225257359246",
		parentId: "",
		label: "sys.menu.calendar",
		name: "Calendar",
		icon: "solar:calendar-bold-duotone",
		type: PermissionType.MENU,
		route: "calendar",
		component: "/sys/others/calendar/index.tsx",
	},
	{
		id: "3513985683886393",
		parentId: "",
		label: "sys.menu.kanban",
		name: "kanban",
		icon: "solar:clipboard-bold-duotone",
		type: PermissionType.MENU,
		route: "kanban",
		component: "/sys/others/kanban/index.tsx",
	},
];

export const PERMISSION_LIST = [
	DASHBOARD_PERMISSION,
	MANAGEMENT_PERMISSION,
	COMPONENTS_PERMISSION,
	...OTHERS_PERMISSION,
];

/**
 * User role mock
 */
const ADMIN_ROLE = {
	id: "4281707933534332",
	name: "Admin",
	label: "admin",
	status: BasicStatus.ENABLE,
	order: 1,
	desc: "Super Admin",
	permission: PERMISSION_LIST,
};
const TEST_ROLE = {
	id: "9931665660771476",
	name: "Test",
	label: "test",
	status: BasicStatus.ENABLE,
	order: 2,
	desc: "test",
	permission: [DASHBOARD_PERMISSION, COMPONENTS_PERMISSION],
};
export const ROLE_LIST = [ADMIN_ROLE, TEST_ROLE];

/**
 * User data mock
 */
export const DEFAULT_USER = {
	id: "b34719e1-ce46-457e-9575-99505ecee828",
	username: "admin",
	email: faker.internet.email(),
	avatar: faker.image.avatarGitHub(),
	createdAt: faker.date.anytime(),
	updatedAt: faker.date.recent(),
	password: "demo1234",
	role: ADMIN_ROLE,
	permissions: ADMIN_ROLE.permission,
};
export const TEST_USER = {
	id: "efaa20ea-4dc5-47ee-a200-8a899be29494",
	username: "test",
	password: "demo1234",
	email: faker.internet.email(),
	avatar: faker.image.avatarGitHub(),
	createdAt: faker.date.anytime(),
	updatedAt: faker.date.recent(),
	role: TEST_ROLE,
	permissions: TEST_ROLE.permission,
};
export const USER_LIST = [DEFAULT_USER, TEST_USER];

// * Hot update, updating user permissions, only effective in the development environment
if (import.meta.hot) {
	import.meta.hot.accept((newModule) => {
		if (!newModule) return;

		const { DEFAULT_USER, TEST_USER, PERMISSION_LIST } = newModule;

		const {
			userInfo,
			actions: { setUserInfo },
		} = useUserStore.getState();

		if (!userInfo?.username) return;

		const newUserInfo =
			userInfo.username === DEFAULT_USER.username ? DEFAULT_USER : TEST_USER;

		setUserInfo(newUserInfo);

		console.log("[HMR] User permissions updated:", {
			username: newUserInfo.username,
			permissions: newUserInfo.permissions,
		});
	});
}
