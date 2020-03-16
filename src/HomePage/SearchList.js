import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchListSubMenuL from "./SearchListSubMenuL";
import SearchListSubMenuR from "./SearchListSubMenuR";
import Footer from "./Footer";
import SubHead from "./SubHead";
import SearchListGrid from "./SearchListGrid";
import SearchListBottom from "./SearchListBottom";

const useStyles = makeStyles(theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6)
	},
	heroButtons: {
		marginTop: theme.spacing(4)
	},
	heroTitle: {
		backgroundColor: theme.palette.secondary.listSubTitle
	},
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
		paddingLeft: 0,
		paddingRight: 0
	},
	buy: {
		color: theme.palette.buy.fontColor,
		backgroundColor: theme.palette.buy.bgColor
	},
	shoppingCar: {
		color: theme.palette.shopcar.fontColor,
		backgroundColor: theme.palette.shopcar.bgColor
	},	
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function SearchList() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<main>
					<SubHead />
					<React.Fragment>
						<AppBar
							position="relative"
							className={classes.heroTitle}
						>
							<Toolbar>
								<Typography variant="h6" color="inherit" noWrap>
									该手机品牌的最新款手机名1
								</Typography>
							</Toolbar>
						</AppBar>
						<main>
							{/* Hero unit */}
							<div className={classes.heroContent}>
								<Container maxWidth="sm">
									<Typography
										component="h1"
										variant="h2"
										align="center"
										color="textPrimary"
										gutterBottom
									>
										该手机品牌的最新款手机名2
									</Typography>
									<Typography
										variant="h5"
										align="center"
										color="textSecondary"
										paragraph
									>
										该手机品牌的最新款手机介绍
									</Typography>
									<div className={classes.heroButtons}>
										<Grid
											container
											spacing={2}
											justify="center"
										>
											<Grid item>
												<Fab className={classes.buy}>
													购买
												</Fab>
											</Grid>
											<Grid item>
												<Fab
													className={
														classes.shoppingCar
													}
												>
													<AddShoppingCartIcon />
												</Fab>
											</Grid>
										</Grid>
									</div>
								</Container>
							</div>
							{/* End hero unit */}
							<Container
								className={classes.cardGrid}
								maxWidth="lg"
							>
								<Grid
									container
									style={{ marginBottom: "8px" }}
									flex-direction={"row"}
								>
									<Grid item xs={6}>
										<SearchListSubMenuL />
									</Grid>
									<Grid item xs>
										<SearchListSubMenuR />
									</Grid>
								</Grid>
								<SearchListGrid cards={cards} />								
								<SearchListBottom/>
							</Container>							
						</main>
					</React.Fragment>
				</main>
			</Container>
			<Footer title="hwt电商Demo" description="hwt电商Demo" />
		</React.Fragment>
	);
}
