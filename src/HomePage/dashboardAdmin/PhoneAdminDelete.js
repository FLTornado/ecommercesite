import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from '@material-ui/icons/Clear';
import GetAppIcon from "@material-ui/icons/GetApp";
import ShopTwoIcon from '@material-ui/icons/ShopTwo';

// Generate Order Data
function createData(name, picture, type1, type2, type3, price, amount) {
  return { name, picture, type1, type2, type3, price, amount };
}

const rows = [
  createData(
    "Xiaomi/小米 小米MIX 3滑盖全面屏mix35g手机",
    "/img/xmmix3.jpg",
    "网络类型：4G+全网通",
    "机身颜色：黑色",
    "存储容量：8+128GB",
    2749,
    99
  ),
  createData(
    "Xiaomi/小米 小米MIX 3滑盖全面屏mix35g手机",
    "/img/xmmix3.jpg",
    "网络类型：4G+全网通",
    "机身颜色：白色",
    "存储容量：8+128GB",
    2749,
    99
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  phonecard: {
    maxWidth: 345
  },
  numinput: {
    maxWidth: 50
  }
}));

export default function ShoppingCar() {
  const [state, setState] = React.useState({
    columns: [
      { title: "手机名称", field: "name" },
      {
        title: "图片",
        field: "picture",
        render: rowData => <img src={rowData.picture} style={{ width: 230 }} alt="phone"/>
      },
      { title: "类型", render: rowData => <p>{rowData.type1}<br/>{rowData.type2}<br/>{rowData.type3}</p>  },
      { title: "单价", field: "price" },
      { title: "库存", field: "amount" },      
    ],
    data: rows
  });

  return (
    <React.Fragment>
      <MaterialTable
        title={<Title>货物管理-下架</Title>}
        columns={state.columns}
        data={state.data}
        options={{
          search: true,
          actionsColumnIndex: -1,
          paging: false,
          sorting: false,          
        }}        
        icons={{
          Search:SearchIcon,
          ResetSearch:ClearIcon,
        }}
        actions={[       
        {
          icon: GetAppIcon,
          tooltip: '下架',
          onClick: (event, rowData) => {
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(rowData), 1);
                  return { ...prevState, data };
                });
              }, 100);
            })
          },
        }
      ]}
        
      />      
    </React.Fragment>
  );
}
