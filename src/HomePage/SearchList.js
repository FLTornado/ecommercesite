import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
import theme from "../theme.js";
import SubHead from "./SubHead";
import SearchListGrid from "./SearchListGrid";

export default function SearchList() {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container maxWidth="lg">
					<main>
						<SubHead />
						<SearchListGrid />
					</main>
				</Container>
				<Footer title="hwt电商Demo" description="hwt电商Demo" />
			</ThemeProvider>
		</React.Fragment>
	);
}
