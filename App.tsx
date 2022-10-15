import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
// import { Welcome } from "./src/pages/Welcome";
import { Home } from "./src/pages/Home";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="auto" />
			{/* <Welcome /> */}
			<Home />
		</ThemeProvider>
	);
}
