import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles,makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import theme from "../theme";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1,
    textDecoration: `none`,    
  }
}));

const HeaderTooltip = withStyles(theme => ({
  tooltip: {    
    color: 'white',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(13),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Toolbar className={classes.toolbar}>
            <HeaderTooltip title="返回首页" arrow>
              <Typography
                component={RouterLink}
                variant="h3"
                align="center"
                noWrap
                className={classes.toolbarTitle}
                color="secondary"
                to="/"
              >
                {title}
              </Typography>
            </HeaderTooltip>
            <HeaderTooltip title="搜索" arrow>
            <IconButton component={RouterLink} to="/SearchList">
              <SearchIcon />
            </IconButton>
            </HeaderTooltip>
            <Button
              variant="outlined"
              size="small"
              component={RouterLink}
              to="/SignIn"
            >
              请登录
            </Button>
          </Toolbar>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string
};
