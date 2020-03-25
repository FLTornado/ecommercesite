import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GoodsTabsSpec from "./GoodsTabsSpec";
import GoodsComment from "./GoodsComment";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}      
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  goodsimgninfo: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
}));

export default function GoodsTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="商品详情" {...a11yProps(0)} />
          <Tab label="规格参数" {...a11yProps(1)} />
          <Tab label="商品评论" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <img
            className={classes.goodsimgninfo}
            src="/img/xmmix3/mix31.jpg"
            alt="商品图片"
          />
          <img
            className={classes.goodsimgninfo}
            src="/img/xmmix3/mix32.jpg"
            alt="商品图片"
          />
          <img
            className={classes.goodsimgninfo}
            src="/img/xmmix3/mix33.jpg"
            alt="商品图片"
          />
          <img
            className={classes.goodsimgninfo}
            src="/img/xmmix3/mix34.jpg"
            alt="商品图片"
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <GoodsTabsSpec />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <GoodsComment />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
