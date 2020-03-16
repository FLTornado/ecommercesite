import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import theme from '../theme.js';

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    color: '#868883',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    color: '#868883',
  }, 
}));


export default function Sidebar(props) {
  const classes = useStyles(theme);
  const { description, social, title } = props;
 

  return (    
    <Grid item xs={3} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>        
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        售后联系方式
      </Typography>
      {social.map(network => (
        <Link display="block" variant="body1" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>        
      ))}     
    </Grid>    
  );
}

Sidebar.propTypes = {  
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
