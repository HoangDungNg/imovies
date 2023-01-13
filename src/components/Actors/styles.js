import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  actorImage: {
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
    width: '70%',
    objectFit: 'cover',
    maxHeight: '600px',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '30px',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto', //0 for top and bottom, auto for left and right
      width: '50%',
      height: '350px',
      marginBottom: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto', //0 for top and bottom, auto for left and right
      width: 'auto',
      height: '400px',
      marginBottom: '30px',
    },
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
}));
