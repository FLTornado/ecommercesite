import "./HomePage/css/pageSwitchAnimation.css";
import React from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Entry from "./HomePage/Entry";

ReactDOM.render(
	<TransitionGroup>
		<CSSTransition appear={true} classNames="appAppear" timeout={500} >
			<Entry />
		</CSSTransition>
	</TransitionGroup>,
	document.querySelector("#root")
);
