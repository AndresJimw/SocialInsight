import { http, HttpResponse } from "msw";

import { OrgApi } from "@/api/services/orgService";

const orgList = http.get(`/api${OrgApi.Org}`, () => {
	return HttpResponse.json({
		status: 0,
		message: "",
		data: [],
	});
});

export default [orgList];
