import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import theme from "../theme";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1,
    textDecoration: `none`
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Toolbar className={classes.toolbar}>
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
            <IconButton>
              <SearchIcon />
            </IconButton>
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
