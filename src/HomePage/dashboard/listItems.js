import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MessageIcon from '@material-ui/icons/Message';
import GetAppIcon from '@material-ui/icons/GetApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="购物车" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmartphoneIcon />
      </ListItemIcon>
      <ListItemText primary="已买到的手机" />
    </ListItem>    
    <ListItem button>
      <ListItemIcon>
        <MessageIcon />
      </ListItemIcon>
      <ListItemText primary="评价管理" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GetAppIcon />
      </ListItemIcon>
      <ListItemText primary="退款管理" />
    </ListItem>   
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>账户信息</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="个人信息" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VpnKeyIcon />
      </ListItemIcon>
      <ListItemText primary="修改密码" />
    </ListItem>    
  </div>
);
