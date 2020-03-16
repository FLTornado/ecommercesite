import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ReorderIcon from "@material-ui/icons/Reorder";
import AppsIcon from "@material-ui/icons/Apps";

export default function SimpleBottomNavigationL() {  
  const [value, setValue] = React.useState("网格模式");

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels      
    >
      <BottomNavigationAction value="网格模式" icon={<AppsIcon />} />
      {/*<BottomNavigationAction value="列表模式" icon={<ReorderIcon />} />*/}
    </BottomNavigation>
  );
}
