import { title } from "../../nextjs-material-kit";

const connectSectionsStyle = {
  imgFluid: {
    maxWidth: "100%",
    height: "100%",
  },
  section: {
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "1.5rem",
    minHeight: "2rem",
    textDecoration: "none",
  },
  description: {
    marginBlock: "1rem",
    "@media (min-width: 904px)": {
      margin: "1.5rem",
    },
    minHeight: "2rem",
    textDecoration: "none",
  },
  button: {
    marginBottom: "1.5rem",
    marginTop: "1rem",
  },
  icon: {
    paddingRight: "1rem",
  },
  inputIconsColor: {
    color: "#495057",
  },
  buttonWrapper: {
    marginTop: "2rem",
    display: 'flex',
    justifyContent: 'center',
  },
  cancelButton: {
    marginRight: "1rem",
  },
  connectModal:{
    
  }
};

export default connectSectionsStyle;
