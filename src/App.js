import logo from './logo.svg';
import { createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import { Typography } from '@material-ui/core';
import Footer from './components/Footer' 
import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
}); 

function App() {

  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            At mumbasa we like to drink the water
          </Typography>

          <Typography variant="h5" className={classes.littleSpace} color="primary">
            If you do not like the water you are welcome to commit the unlive
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360a6" , height: "125", width: "125"}}/>} title="Secure" btnTitle="Show me More"/>
          <Grid icon={<EventNoteIcon style={{fill: "#449A76" , height: "125", width: "125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05b2d" , height: "125", width: "125"}}/>} title="Performant" btnTitle="Show me More"/>
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{fill: "#4360a6" , height: "125", width: "125"}}/>} title="Modular" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#449A76" , height: "125", width: "125"}}/>} title="Multi" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#D05b2d" , height: "125", width: "125"}}/>} title="Connected" btnTitle="Show me More"/>
        </div>

        <div className={classes.bigSpace}>
          <Footer />
        </div>

      </ThemeProvider>
    </div>
  );
}

export default App;
