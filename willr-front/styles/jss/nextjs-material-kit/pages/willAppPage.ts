import { container } from "../../nextjs-material-kit";

const willAppPageStyle = {
  container,
  containerDetails: {
    height: "70%",
  },
  containerBalance: {
    height: "100%",
  },
  title: {
    color: "#FFFFFF",
  },
  icon: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconPointer: {
    cursor: "pointer",
  },
  containerIcons: {
    marginBottom: "-0.5rem",
  },
  assetListPaper: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "-60px 0px 60px 0px",
    padding: "24px 48px",
    borderRadius: "28px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  assetItem: {
    marginBlock: "0.6rem",
  },
  toolTip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    fontSize: 11,
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

export default willAppPageStyle;
