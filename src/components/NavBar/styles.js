import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    //determine styles for toolbar on mobile devices
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    //styles applied on devices that are higher than "small"
    //in other words, styles specified below are only applied to devices that are not mobile
    [theme.breakpoints.up('sm')]: {
      //the menu button will be hidden on devices that are not mobile
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      //the styles applied on drawer on devices that are not mobile
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
