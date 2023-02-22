import React from 'react';
import {
  Grid,
  Typography,
  Link,
  IconButton,
  Box,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AppleIcon from '@material-ui/icons/Apple';
import GooglePlayIcon from '@material-ui/icons/Android';
import './footer.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 50,
    // paddingLeft: 80,
    backgroundColor: '#F6F6F6',
  },
  center: {},
  socialIcon: {
    width: 20,
    height: 20,
    // margin: theme.spacing(1),
    color: 'grey',
  },
  roots: {
    display: 'flex',
    margin: theme.spacing(2),
    gap: 6,
    '@media (max-width: 768px)': {
      '.hide-on-mobile': {
        display: 'none',
      },
    },
  },
  paper: {
    display: 'flex',
    border: '1.5px solid #94CCDE',

    padding: 5,
    borderRadius: theme.spacing(2),
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000000',
    fontSize: '15px',
  },
  '@media (max-width: 768px)': {
    '.hide-on-mobile': {
      display: 'none',
    },
  },
}));
function Footer() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={4}>
        <a style={{ marginLeft: 0 }} href="#" className="navbar-logos">
          YourLogo
        </a>{' '}
        <p style={{ marginLeft: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
      </Grid>
      <Grid item xs={4} className={classes.center} style={{ paddingLeft: 100 }}>
        <Typography variant="h6" className={classes.title}>
          Company
        </Typography>
        <p>Blog</p>
        <p>Who We Are</p>
        <p>Careers</p>
        <p>Support</p>
        <p>Text for Support</p>
      </Grid>
      <Grid item xs={4} id="hide-on-mobile">
        <p className="questions">Got Questions?</p>
        <p className="help">Help Center</p>
        <p className="follow">Follow Us</p>
        <div>
          <IconButton href="https://www.instagram.com">
            <InstagramIcon className={classes.socialIcon} />
          </IconButton>
          <IconButton href="https://www.facebook.com">
            <FacebookIcon className={classes.socialIcon} />
          </IconButton>
          <IconButton href="https://www.twitter.com">
            <TwitterIcon className={classes.socialIcon} />
          </IconButton>
          <IconButton href="https://www.youtube.com">
            <YouTubeIcon className={classes.socialIcon} />
          </IconButton>
        </div>
        <div className={`${classes.roots} hide-on-mobile`} id="hide-on-mobile">
          <Paper className={classes.paper}>
            <IconButton aria-label="Download on the App Store">
              <AppleIcon />
            </IconButton>
            <Typography variant="h9" classN ame={classes.text}>
              Download on <br />
              AppStore
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <IconButton aria-label="Get it on Google Play">
              <GooglePlayIcon />
            </IconButton>
            <Typography variant="h9" className={classes.text}>
              Get it on <br />
              Google Play{' '}
            </Typography>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
