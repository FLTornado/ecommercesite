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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Footer from "./Footer";
import SubHead from "./SubHead";
import GoodsTabs from "./GoodsTabs";

const useStyles = makeStyles(theme => ({
	heroButtons: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2),
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
		maxWidth: '80%',
	},
	shoppingCar: {
		color: theme.palette.shopcar.fontColor,
		backgroundColor: theme.palette.shopcar.bgColor,
		maxWidth: '80%',
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
	goodsselector: {
		width: "90%",
		marginLeft: 0
	},
	formControl: {
		minWidth: 240
	}
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

	const netSwitch = event => setNet(event.target.value);
	const colorSwitch = event => setColor(event.target.value);
	const ramSwitch = event => setRam(event.target.value);
	
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
												variant="subtitle2"
												align="left"
												color="textSecondary"
												paragraph={true}
											>
												价格
												<Typography
													variant="h3"
													align="left"
													color="textSecondary"
													paragraph={true}
													display="inline"
													className={
														classes.goodsprice
													}
													component={'span'}
												>
													2749
												</Typography>
												<Typography
													variant="subtitle2"
													align="left"
													color="textSecondary"
													paragraph={true}
													display="inline"
													component={'span'}
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
											<Grid item xs={12}>
												<FormControl
													className={
														classes.formControl
													}
												>
													<InputLabel>
														网络类型
													</InputLabel>
													<Select
														value={netstate}
														onChange={netSwitch}
													>
														{netrows.map(row => (
															<MenuItem
																value={
																	row.content
																}
															>
																{row.content}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
											<Grid item xs={12}>
												<FormControl
													className={
														classes.formControl
													}
												>
													<InputLabel>
														机身颜色
													</InputLabel>
													<Select
														value={colorstate}
														onChange={colorSwitch}
													>
														{colorrows.map(row => (
															<MenuItem
																value={
																	row.content
																}
															>
																{row.content}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
											<Grid item xs={12}>
												<FormControl
													className={
														classes.formControl
													}
												>
													<InputLabel>
														存储容量
													</InputLabel>
													<Select
														value={ramstate}
														onChange={ramSwitch}
													>
														{ramrows.map(row => (
															<MenuItem
																value={
																	row.content
																}
															>
																{row.content}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
											<Grid item xs={6}>
												<TextField
													label="数量"
													variant="outlined"
													size='small'
													type='number'
													defaultValue="1"
												/>
											</Grid>
										</Grid>

										<div className={classes.heroButtons}>
											<Grid
												container
												spacing={1}
												justify="center"
											>
												<Grid item xs={4}>
													<Button
														className={classes.buy}
														variant="contained"
														fullWidth={true}
													>
														购买
													</Button>
												</Grid>
												<Grid item xs={4}>
													<Button
														className={
															classes.shoppingCar
														}
														variant="contained"
														fullWidth={true}
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
