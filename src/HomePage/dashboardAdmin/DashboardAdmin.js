import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MessageIcon from "@material-ui/icons/Message";
import GetAppIcon from "@material-ui/icons/GetApp";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {  
  Switch,
  Route,
  Link,  
  useRouteMatch
} from "react-router-dom";
import Footer from "../Footer";
import AccountAdmin from "./AccountAdmin";
import PhoneAdminDelete from "./PhoneAdminDelete";
import PhoneAdminAdd from "./PhoneAdminAdd";
import CommentsAdmin from "./CommentsAdmin";
import RefundAdmin from "./RefundAdmin";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "white"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.main
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {},
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

export default function Dashboard() {  
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  let { path, url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            className={classes.title}
          >
            后台管理
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {/*mainListItems*/}
          <div>
            <ListItem button component={Link} to={`${url}/account`}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="账户管理" />
            </ListItem>
            <ListItem button component={Link} to={`${url}/phonedelete`}>
              <ListItemIcon>
                <SmartphoneIcon />
              </ListItemIcon>
              <ListItemText primary="下架货物" />
            </ListItem>
            <ListItem button component={Link} to={`${url}/phoneadd`}>
              <ListItemIcon>
                <SmartphoneIcon />
              </ListItemIcon>
              <ListItemText primary="上架货物" />
            </ListItem>
            <ListItem button component={Link} to={`${url}/commentsadmin`}>
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText primary="评价管理" />
            </ListItem>
            <ListItem button component={Link} to={`${url}/refundadmin`}>
              <ListItemIcon>
                <GetAppIcon />
              </ListItemIcon>
              <ListItemText primary="退款管理" />
            </ListItem>
          </div>
        </List>
        <Divider />        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Switch>                
                <Route path={`${path}/phonedelete`}>
                  <PhoneAdminDelete />
                </Route>
                <Route path={`${path}/phoneadd`}>
                  <PhoneAdminAdd />
                </Route>
                <Route path={`${path}/commentsadmin`}>
                  <CommentsAdmin />
                </Route>
                <Route path={`${path}/refundadmin`}>
                  <RefundAdmin />
                </Route>                
                <Route path={path}>
                  <AccountAdmin />
                </Route>
              </Switch>              
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
