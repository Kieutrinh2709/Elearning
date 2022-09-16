import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  palette: {
    primary: {
      main: "#FE79A2",
    },
    secondary: {
      main: "#3f3a64",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: "0 !important",
          marginBottom: "0 !important",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          color: "#3f3a64",
          fontSize: "38px",
          lineHeight: "45px",
          fontWeight: "700",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1.5rem",
        },
        contained: {
          padding: "5px 20px",
          borderRadius: "5px",
          color: "#fff",
        },
        outlined: {
          padding: "5px 10px",
          borderRadius: "5px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 400ms ease",
          boxShadow: "none",
          padding: "10px",
          borderRadius: "2rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "5px",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          borderRadius: "1rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          boxShadow: "none",
          transition: "all 400ms ease",
          margin: "auto",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          margin: "auto",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#000000",
          color: "#fff",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    // marginTop: "50px",
  },
  Loading: {
    position: "fixed",
    left: "50%",
    top: "35%",
    zIndex: 1000,
  },
  //Navbar
  colorDefault: {
    color: "#fff",
  },
  colorChange: {
    color: "#3f3a64",
  },
  //Layout Login
  

  // Slider
  slider: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "url(./img/banner1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "linear-gradient(148.25deg, #A253D8 3%, #1545CB 89.85%)",
      opacity: 0.7,
    },
  },
  sliderTitle: {
    textAlign: "center",
    zIndex: 1,
    color: "#fff",
    fontSize: "40px",
  },
  sliderText: {
    textAlign: "center",
    zIndex: 1,
    color: "#fff",
  },

  // FeatureCourses
  featuredbg: {
    backgroundColor: "#e7cdef36",
    padding: "50px 0",
  },
  featuredTeacher: {
    padding: "0 10px",
    fontSize: "20px",
    opacity: 0.7,
  },

  // Facilities
  facilitiesbg: {
    background: "#f8ddebb8",
    padding: "100px 0",
  },
  facilitiesTxt: {
    color: "gray",
    opacity: 0.7,
  },
  facilitiesPaper: {
    padding: "1rem 1rem 1.5rem 1rem",
    height: "250px",
    border: "1px solid transparent",
    transform: "translateY(0)",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      borderColor: "#FE79A2",
      transform: "translateY(-5px)",
    },
  },

  //Card
  cards: {
    border: "1px solid transparent",
    borderColor: "transparent",
    background: "#fff",
    transform: "translateY(0)",
    "&:hover": {
      borderColor: "#FE79A2",
      background: "transparent",
      transform: "translateY(-5px)",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  },

  //News
  newBg: {
    backgroundColor: "#e7cdef36",
    padding: "50px 0",
  },
  layer: {
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    width: "100%",
    height: "600px",
    background: "url(./img/banner2.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    transition: "all .5s",
    borderRadius: "10px",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      background: "#000",
      opacity: 0.6,
      zIndex: 1,
    },
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  layer1: {
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    width: "100%",
    height: "300px",
    background: "url(./img/banner3.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    transition: "all .5s",
    borderRadius: "10px",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      background: "#000",
      opacity: 0.6,
      zIndex: 1,
    },
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  layer2: {
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    width: "100%",
    height: "283px",
    background: "url(./img/banner4.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    transition: "all .5s",
    borderRadius: "10px",
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      background: "#000",
      opacity: 0.6,
      zIndex: 1,
    },
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  content: {
    position: "relative",
  },
  contentTxt: {
    position: "absolute",
    color: "#fff",
    zIndex: 1,
  },
  contentTeacher: {
    position: "absolute",
    color: "#fff",
    zIndex: 1,
  },

  // Learning
  learning: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    minHeight: "500px",
    background: "url(./img/banner2.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "top top",
    backgroundRepeat: "no-repeat",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "500px",
      background: "linear-gradient(148.25deg, #A253D8 3%, #1545CB 89.85%)",
      opacity: 0.7,
    },
  },
  btnColor :{
    color:'#fff',
    border:'1px solid #fff',
    '&:hover':{
      backgroundColor:'red',
    }
  },

  
  

  //AdminPage
  adminContent: {
    marginLeft: "250px",
    padding: "15px",
    marginTop: "50px",
  },
});

export { theme, useStyles };
