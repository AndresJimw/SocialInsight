import { App as AntdApp } from "antd";
import { Helmet } from "react-helmet-async";

import Logo from "@/assets/images/logo.png";
import Router from "@/router/index";
import AntdConfig from "@/theme/antd";

function App() {
	return (
		<AntdConfig>
			<AntdApp>
				<Helmet>
					<title>Social Insight</title>
					<link rel="icon" href={Logo} />
				</Helmet>

				<Router />
			</AntdApp>
		</AntdConfig>
	);
}

export default App;
