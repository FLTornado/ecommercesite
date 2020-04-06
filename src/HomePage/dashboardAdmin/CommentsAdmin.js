import React from "react";
import Title from "./Title";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';

// Generate Order Data
function createData(name, email, comment) {
  return { name, email, comment };
}

const rows = [
  createData(
    "Xiaomi/小米 小米MIX 3滑盖全面屏mix35g手机",
    "1111111@qq.com",
    "想买mix4等来的却是Alpha，作为忠实米粉入手了这款。网上普遍说比较重，实际体验一个男生应该可以轻松应付，真全面屏感觉很好。 mix2就压箱了",
  ),
  createData(
    "Xiaomi/小米 小米MIX 3滑盖全面屏mix35g手机",
    "2222222@qq.com",
    "直接下单买的，问了客服是原装正品，双十一直接下的单。手机坏了所以觉得物流极其慢，其实顺丰还是挺快的。手机是全新的。也不知道怎么看是不是新手机，反正手机很好就对了，和现在的旗舰机没法比，但是和什么一加七，和什么华为，用起来一样的爽。用了的感觉是，滑盖面部解锁秒解，后指纹速度非常非常的快。ai小爱键也是很好用，比如直接说，微信扫码就直接出来扫码，比如说给老婆打电话，就直接打了。因为现在一直用的蓝牙耳机，所以这些功能用起来连手机都不用点亮就完成了。滑盖其实说实话没啥用，就是没事划着玩，自拍啥的没用过，现在也不自拍了。电池其实有点小，用不了一天。也没打游戏，就看看视频啥的，就没电了。非重度一天可能也够。",
  )
];

export default function ShoppingCar() {  
  const [state, setState] = React.useState({
    columns: [
      { title: "评价", field: "comment" },   
      { title: "手机名称", field: "name" },
      {
        title: "用户邮箱",
        field: "email"       
      },              
    ],
    data: rows
  });

  return (
    <React.Fragment>
      <MaterialTable
        title={<Title>评价管理</Title>}
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
          tooltip: '删除评论',
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
