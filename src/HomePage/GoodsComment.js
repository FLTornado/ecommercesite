import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function createData(
  comment,
  time,
  goodssort1,
  goodssort2,
  goodssort3,
  customer
) {
  return { comment, time, goodssort1, goodssort2, goodssort3,customer };
}

const rows = [
  createData(
    "想买mix4等来的却是Alpha，作为忠实米粉入手了这款。网上普遍说比较重，实际体验一个男生应该可以轻松应付，真全面屏感觉很好。 mix2就压箱了",
    "2019.11.09",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "2***天"
  ),
  createData(
    "直接下单买的，问了客服是原装正品，双十一直接下的单。手机坏了所以觉得物流极其慢，其实顺丰还是挺快的。手机是全新的。也不知道怎么看是不是新手机，反正手机很好就对了，和现在的旗舰机没法比，但是和什么一加七，和什么华为，用起来一样的爽。用了的感觉是，滑盖面部解锁秒解，后指纹速度非常非常的快。ai小爱键也是很好用，比如直接说，微信扫码就直接出来扫码，比如说给老婆打电话，就直接打了。因为现在一直用的蓝牙耳机，所以这些功能用起来连手机都不用点亮就完成了。滑盖其实说实话没啥用，就是没事划着玩，自拍啥的没用过，现在也不自拍了。电池其实有点小，用不了一天。也没打游戏，就看看视频啥的，就没电了。非重度一天可能也够。",
    "2019.11.17",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "l***9"
  ),
  createData(
    "用上了，还不错，看看拍摄效果",
    "2019.11.20",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "x***x"
  ),
  createData(
    "哎呦，不错喔",
    "2019.11.05",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "形***y"
  ),
  createData(
    "价格发货速度快，客服态度好，手机很靓。手机唯一美中不足耗电快，幸好充电速度快。",
    "2019.11.11",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "不***了"
  ),
  createData(
    "用了好几天才来评价，感觉还可以，价位也不贵",
    "2019.11.22",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "被***9"
  ),
  createData(
    "其他特色：我觉得滑盖特别棒。 拍照效果：阔以！ 显示效果：好 电池续航：满满足日常需求大概是一天一充。 运行速度：快",
    "2019.11.22",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "啊***萨"
  ),
  createData(
    "验证是正品，手机不错",
    "2019.11.22",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "c***3"
  ),
  createData(
    "此用户没有填写评论!",
    "2019.11.22",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "煌***p"
  ),
  createData(
    "续航能力：很好！！客服态度很好！！价格比官网还要便宜一点。使用流畅。。",
    "2019.11.22",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "h***5"
  ),
  createData(
    "一直使用小米系列手机，很好！",
    "2019.11.22",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "t***8"
  ),
  createData(
    "N因为不喜欢MI9PRO 退了准备等米10 又不喜欢假全面屏，作为忠实米粉入手了这款。网上普遍说比较重，实际体验一个男生应该可以轻松应付，真全面屏感觉很好。MIUI一如既往地能俘获我心，不玩游戏什么都能应付",
    "2019.11.22",
    "网络类型：4G+全网通",
    "机身颜色：黑色",    
    "存储容量：8+128GB",
    "情***亿"
  ),
  createData(
    "其他特色：第一用小米这个手机，系统真不错小爱同学特别的好用，还是我以前用的其他牌子手机，手机里面好看的的主题都要钱，小米免费。这家店也特别的贴心送的膜拆机直接用不用再去外面贴膜，手机确实有点重不过我喜欢重一点的有手感，用了几天非常满意小米确实可以里面的小功能实用！快递店家寄的是顺丰非常的快两天半送达店家的小细节做得非常的赞！ 拍照效果：拍摄效果还不错， 电池续航：省电模式可以用一天 运行速度：吃鸡国际服也不卡",
    "2019.11.22",
    "网络类型：4G+全网通",
    "机身颜色：黑色",  
    "存储容量：8+128GB",
    "l***次"
  )
];

const useStyles2 = makeStyles({
  commentsfont: {
    fontSize: 16
  },
  coommentsmain: {
    width: "65%"
  },
  coommentsort: {
    width: "25%"
  },
  coommentavator: {
    width: "15%"
  },
  commenttime: {
    marginTop: 26,
    color:"#CCC",
  },
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map(row => (
            <TableRow key={row.comment}>
              <TableCell
                component="th"
                scope="row"
                className={(classes.commentsfont, classes.coommentsmain)}
              >
                {row.comment}
                <p className={classes.commenttime}>{row.time}</p>
              </TableCell>
              <TableCell
                align="left"
                className={(classes.commentsfont, classes.coommentssort)}
              >
                <ul style={{ listStyle: "none" }}>
                  <li>{row.goodssort1}</li>
                  <li>{row.goodssort2}</li>
                  <li>{row.goodssort3}</li>                  
                </ul>
              </TableCell>
              <TableCell
                align="left"
                className={(classes.commentsfont, classes.coommentsavator)}
              >
                {row.customer}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
