import React from "react";
import Title from "./Title";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from '@material-ui/icons/Clear';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import BackspaceIcon from '@material-ui/icons/Backspace';

// Generate Order Data
function createData(name, picture, type1, type2, type3, price, amount, state, email) {
  return { name, picture, type1, type2, type3, price, amount, state,email };
}

const rows = [
  createData(
    "Xiaomi/小米 小米MIX 3滑盖全面屏mix35g手机",
    "/img/xmmix3.jpg",
    "网络类型：4G+全网通",
    "机身颜色：黑色",
    "存储容量：8+128GB",
    2749,
    1,
    "退款成功",
    "1111111@qq.com",
  ),
  createData(
    "Xiaomi/小米 小米MIX 3滑盖全面屏mix35g手机",
    "/img/xmmix3.jpg",
    "网络类型：4G+全网通",
    "机身颜色：黑色",
    "存储容量：8+128GB",
    2749,
    1,
    "正在处理",
    "1111111@qq.com",
  )
];

function preventDefault(event) {
  event.preventDefault();
}


export default function ShoppingCar() {  
  const [state, setState] = React.useState({
    columns: [
      { title: "手机名称", field: "name" },
      {
        title: "图片",
        field: "picture",
        render: rowData => <img src={rowData.picture} style={{ width: 230 }} alt="phone"/>
      },
      { title: "类型", field: "type1" },
      { title: "单价", field: "price" },
      { title: "数量", field: "amount" },
      {
        title: "金额",
        field: "money",
        render: rowData => rowData.price * rowData.amount
      },
      { title: "退款状态", field: "state" },
      { title: "用户邮箱", field: "email" },
    ],
    data: rows
  });

  return (
    <React.Fragment>
      <MaterialTable
        title={<Title>退款管理</Title>}
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
          icon: BeenhereIcon,
          tooltip: '同意退款',
          onClick: (event, rowData) => {
           
          },          
        },
        {
          icon: BackspaceIcon,
          tooltip: '拒绝退款',
          onClick: (event, rowData) => {
           
          },          
        }
      ]}
        
      />
    </React.Fragment>
  );
}
