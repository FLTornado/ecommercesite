import "./css/pageSwitchAnimation.css";
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useLocation,
	useParams
} from "react-router-dom";
import Blog from "./Blog";
import SignIn from "./SignIn";
import Header from "./Header";
export default function Entry() {
	return (
		<Router>			
			 <Route
      			render={({ location }) => (
        		<React.Fragment>
          			<Route
            			exact
            			path="/"
            			render={() => <Redirect to="/" />}
          		/>
				<Header title="买手机网" />				
				<TransitionGroup>
              <CSSTransition
                // 需要加一个key属性，让react认识每个组件，并进行正确的加载。
                // 这里我改了官方demo的代码， 原来是设置成location.key， 这样的话每次点击同一个路由链接的时候都会渲染。
                key={location.pathname}
                // classNames 就是设置给css动画的标示，记得'classNames'带's'的。
                classNames="fade"
                // 动画时间设置为800ms，和css中的需要一致。
                timeout={800}
              >
				<Switch location={location}>
					<Route exact path="/">
						<Blog />
					</Route>
					<Route exact path="/SignIn">
						<SignIn />
					</Route>
					<Route render={() => <div>Not Found</div>} />
				</Switch>
				</CSSTransition>
            </TransitionGroup>
			</React.Fragment>
			)}
      			/>
		</Router>
	);
}
