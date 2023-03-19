import {
  defaultBoxShadow,
  card
} from "../../nextjs-material-kit";

const customModalStyle = {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  paper: {
    ...card,
    boxShadow: defaultBoxShadow,
    maxWidth: "320px",
    padding: "2rem",
    "@media screen and (min-width: 768px)": {
      maxWidth: "480px",
    },
    "@media screen and (min-width: 992px)": {
      maxWidth: "560px",
    }
  },
  
  children:{
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default customModalStyle;
