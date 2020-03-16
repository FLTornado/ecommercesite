import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({		
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	cardMedia: {
		paddingTop: "56.25%" // 16:9
	},
	cardContent: {
		flexGrow: 1
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

export default function SearchListGrid(props) {
	const classes = useStyles();
	const { cards } = props;
	return (
	<Grid container spacing={1}>
		{cards.map(card => (
		<Grid item key={card} xs={12} sm={6} md={3}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cardMedia}
					image="https://source.unsplash.com/random"
					title="Image title"
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
						Heading
					</Typography>
					<Typography>This is a media card.</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" className={classes.buy}>
						购买
					</Button>
					<Button size="small" className={classes.shoppingCar}>
						<AddShoppingCartOutlinedIcon />
					</Button>
				</CardActions>
			</Card>
		</Grid>
	))}
</Grid>
);
}