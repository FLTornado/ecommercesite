import "./HomePage/css/pageSwitchAnimation.css";
import React from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ThemeProvider } from "@material-ui/core/styles";
import Entry from "./HomePage/Entry";
import theme from "./theme.js";

ReactDOM.render(
	<TransitionGroup>
		<CSSTransition appear={true} classNames="appAppear" timeout={500}>
			<ThemeProvider theme={theme}>
				<Entry />
			</ThemeProvider>
		</CSSTransition>
	</TransitionGroup>,
	document.querySelector("#root")
);
