import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    width: "50%",
    marginTop: "40px",
    color: "#868883",
    marginLeft: "auto",
    marginRight: "auto"
  },
  input: {
    width: 42,
    color: "#868883"
  }
});

export default function SearchListBottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>页数</Grid>
        <Grid item xs>
          <Tooltip title="选定之后可以用左右方向键翻页">
            <Slider
              value={typeof value === "number" ? value : 1}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={1}
              max={100}
            />
          </Tooltip>
        </Grid>
        <Grid item>
          到第
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
          页
        </Grid>
        <Grid item>
          <Button variant="outlined" style={{ color: "#868883" }}>
            确定
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
