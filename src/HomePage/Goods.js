import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Footer from "./Footer";
import SubHead from "./SubHead";
import GoodsTabs from "./GoodsTabs";

const useStyles = makeStyles(theme => ({
	heroButtons: {
		marginTop: theme.spacing(4)
	},
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
		paddingLeft: 0,
		paddingRight: 0
	},
	buy: {
		color: theme.palette.buy.fontColor,
		backgroundColor: theme.palette.buy.bgColor,
		width: 136
	},
	shoppingCar: {
		color: theme.palette.shopcar.fontColor,
		backgroundColor: theme.palette.shopcar.bgColor,
		width: 136
	},
	goodsimg: {
		maxWidth: "100%",
		display: "block"
	},
	topcard: {
		marginTop: 48
	},
	topdiver: {
		marginTop: 24,
		width: "50%",
		marginLeft: "auto",
		marginRight: "auto"
	},
	goodspriceblock: {
		backgroundColor: "#e9e9e9",
		backgroundImage: "url(/img/pricebgi/price.png)",
		marginLeft: 12,
		marginRight: 12
	},
	goodsprice: {
		marginLeft: 24,
		color: "#FF0036"
	},
	goodsselectcolor: {
		color: "#838383",
		fontSize: 14
	},
	goodsselector: {
		width: "90%",
		marginLeft: 0
	},
	selectorbut: {
		marginRight: 8
	},
	selectoractivate: {
		border: `2px solid #FF0036`,
	},
	selectorundo: {		
	},
}));

function createData(content) {
	return { content };
}

const netrows = [createData("4G+全网通")];

const colorrows = [createData("黑色"), createData("白色")];

const ramrows = [createData("8+128GB")];

export default function SearchList() {
	const classes = useStyles();

	//最终返回netstate，colorstate，ramstate与数量
	const [netstate, setNet] = useState(netrows[0].content);
	const [colorstate, setColor] = useState(colorrows[0].content);
	const [ramstate, setRam] = useState(ramrows[0].content);

	const netSwitch = (event, newValue) => setNet(newValue);	
	const colorSwitch = (event, newValue) => {
		setColor(newValue);
		event.target.className = classes.selectoractivate;
	}
	const ramSwitch = (event, newValue) => setRam(newValue);		

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<main>
					<SubHead />
					<Divider variant="middle" className={classes.topdiver} />
					<React.Fragment>
						<main>
							<Paper elevation={3} className={classes.topcard}>
								<Grid container>
									<Grid item xs={6}>
										<img
											src="/img/xmmix3.jpg"
											alt="商品图片"
											className={classes.goodsimg}
										/>
									</Grid>
									<Grid item xs>
										<Typography
											component="h1"
											variant="h6"
											align="left"
											color="textPrimary"
											gutterBottom
											style={{ marginLeft: 12 }}
										>
											Xiaomi/小米 小米MIX 3滑盖全面屏mix3
											5g手机
										</Typography>
										<Paper
											className={classes.goodspriceblock}
										>
											<Typography
												variant="h7"
												align="left"
												color="textSecondary"
												paragraph="true"
											>
												价格
												<Typography
													variant="h3"
													align="left"
													color="textSecondary"
													paragraph
													display="inline"
													className={
														classes.goodsprice
													}
												>
													2749
												</Typography>
												<Typography
													variant="h7"
													align="left"
													color="textSecondary"
													paragraph
													display="inline"
												>
													RMB
												</Typography>
											</Typography>
										</Paper>

										<Grid
											container
											spacing={4}
											className={classes.goodsselector}
										>
											<Grid
												item
												className={
													classes.goodsselectcolor
												}
												xs={2}
											>
												网络类型
											</Grid>
											<Grid item xs={10}>
												{													
													netrows.map(netrow => {													
													return <Button
														variant="outlined"
														size="small"
														className={
															classes.selectorbut
														}
														value={netrow.content}
														onClick={netSwitch}
													>
														{netrow.content}
													</Button>
												})}
											</Grid>
											<Grid
												item
												className={
													classes.goodsselectcolor										
												}
												xs={2}
											>
												机身颜色
											</Grid>
											<Grid item xs={10}>
												{colorrows.map(colorrow => (
													<Button
														variant="outlined"
														size="small"
														className={															
															classes.selectorbut
														}
														value={colorrow.content}
														onClick={colorSwitch}

													>
														{colorrow.content}														
													</Button>
												))}
											</Grid>
											<Grid
												item
												className={
													classes.goodsselectcolor
												}
												xs={2}
											>
												存储容量
											</Grid>
											<Grid item xs={10}>
												{ramrows.map(ramrow => (
													<Button
														variant="outlined"
														size="small"
														className={
															classes.selectorbut
														}
														value={ramrow.content}
													>
														{ramrow.content}
													</Button>
												))}
											</Grid>
											<Grid
												item
												className={
													classes.goodsselectcolor
												}
												xs={2}
											>
												数量
											</Grid>
											<Grid item xs={10}>
												数量
											</Grid>
										</Grid>

										<div className={classes.heroButtons}>
											<Grid
												container
												spacing={2}
												justify="center"
											>
												<Grid item>
													<Button
														className={classes.buy}
														variant="contained"
													>
														购买
													</Button>
												</Grid>
												<Grid item>
													<Button
														className={
															classes.shoppingCar
														}
														variant="contained"
													>
														<AddShoppingCartIcon />
													</Button>
												</Grid>
											</Grid>
										</div>
									</Grid>
								</Grid>
							</Paper>
							<Container
								className={classes.cardGrid}
								maxWidth="lg"
							>
								{/*选项卡tabs*/}
								<GoodsTabs />
							</Container>
						</main>
					</React.Fragment>
				</main>
			</Container>
			<Footer title="hwt电商Demo" description="hwt电商Demo" />
		</React.Fragment>
	);
}
