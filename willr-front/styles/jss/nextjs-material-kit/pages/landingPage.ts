import { container, title } from "../../nextjs-material-kit";

const landingPageStyle = {
  container: {
    zIndex: "50",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    backgroundImage: "url('/img/illustrations/backgroundLightLarge.svg')",
    "@media (max-width: 904px)": {
      backgroundImage: "url('/img/illustrations/backgroundLightSmall.svg')",
    },
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
};

export default landingPageStyle;
