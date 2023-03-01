import { title } from "../../../nextjs-material-kit";

const emailWillSectionsStyle = {
  section: {
    height: "100%",
    padding: "2rem",
    textAlign: "center",
    borderRadius: "28px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    marginBottom: "1.5rem",
    minHeight: "2rem",
    textDecoration: "none",
  },

  description: {
    color: "#3C4858",
    textDecoration: "none",
  },
  button: {
    width: "100%",
  },
  icon: {
    paddingRight: "1rem",
  },
  inputIconsColor: {
    color: "#495057",
  },
};

export default emailWillSectionsStyle;
