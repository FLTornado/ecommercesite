import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";

const sections = [
  { title: "华为", url: "#" },
  { title: "苹果", url: "#" },
  { title: "小米", url: "#" },
  { title: "红米", url: "#" },
  { title: "一加", url: "#" },
  { title: "魅族", url: "#" },
  { title: "锤子", url: "#" },
  { title: "vivo", url: "#" },
  { title: "三星", url: "#" },
  { title: "荣耀", url: "#" }
];

const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },  
}));

export default function SubHead() {
  const classes = useStyles();
  return(
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="secondary"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      );
    }