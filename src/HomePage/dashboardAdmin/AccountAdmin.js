import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';

// Generate Order Data
function createData(name, email, phone) {
  return { name, email, phone  };
}

const rows = [
  createData(
    "user1",
    "111111@qq.com",   
    12345678910,    
  ),
  createData(
    "user2",
    "222222@qq.com",   
    22345678910,    
  )
];

function preventDefault(event) {
  event.preventDefault();
}


export default function ShoppingCar() {  
  const [state, setState] = React.useState({
    columns: [
      { title: "昵称", field: "name" },      
      { title: "邮箱", field: "email" },
      { title: "手机号码", field: "phone" },     
    ],
    data: rows
  });

  return (
    <React.Fragment>
      <MaterialTable
        title={<Title>账户管理</Title>}
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
          icon: DeleteIcon,
          tooltip: '删除',
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
