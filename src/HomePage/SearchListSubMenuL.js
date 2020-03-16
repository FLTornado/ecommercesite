import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

export default function SimpleBottomNavigationL() {
  const [value, setValue] = React.useState("日期");

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction value="日期" label="日期" />
      <BottomNavigationAction value="销量" label="销量" />
      <BottomNavigationAction value="价格降序" label="价格降序" />
      <BottomNavigationAction value="价格升序" label="价格升序" />
    </BottomNavigation>
  );
}
