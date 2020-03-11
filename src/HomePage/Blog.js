import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import ForumIcon from "@material-ui/icons/Forum";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import theme from "../theme.js";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

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

const mainFeaturedPost = {
  title: "买手机就上买手机网",
  description: "在买手机网你可以选购所有的主流手机",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…"
};

const featuredPosts = [
  {
    title: "华为nova7首次曝光：或在华为P40之后四月初发布",
    date: "2020-02-28",
    description:
      "去年12月初，华为推出nova系列最新机型——华为nova6。按照以往的惯例，华为应该会为nova6系列推出Pro版本。但据最新消息，传说中的nova6 Pro算是没戏了，官方会直接跳过Pro版本而推出华为nova7！",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  },
  {
    title: "早报：三星S20系列国行正式发布 乐视去年亏损112.8亿",
    date: "2020-02-28",
    description:
      "2月12日凌晨3点，三星Galaxy S20系列在万众期待中如期而至。作为三星2020年的首款旗舰，三星Galaxy S20系列带来的旗舰级体验绝不仅限于惊艳。",
    image: "http://img.cnmo-img.com.cn/1710_600x1000/1709827.png",
    imageText: "Image Text"
  }
];

const sidebar = {
  title: "关于售后",
  description:
    "我们承诺七天无理由退款，为了更好的保证服务质量，请点击下方联系我们的售后人员，为你提供更优质的服务",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" }
  ],
  social: [
    { name: "邮箱", icon: AlternateEmailIcon },
    { name: "电话", icon: AddIcCallIcon },
    { name: "QQ", icon: ForumIcon }
  ]
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">          
          <main>
            <MainFeaturedPost post={mainFeaturedPost} sections={sections} />
            <Grid container spacing={4}>
              {featuredPosts.map(post => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={2} className={classes.mainGrid}>
              <Main title="热卖宝贝" />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                social={sidebar.social}
              />
            </Grid>
          </main>
        </Container>
        <Footer title="hwt电商Demo" description="hwt电商Demo" />
      </ThemeProvider>
    </React.Fragment>
  );
}
