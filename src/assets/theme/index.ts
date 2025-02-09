export const PrimaryColor = "#ff4757";

const theme = {
  color: {
    primary: PrimaryColor,
    grayBackground: "#eee",
    normalBackground: "#f3f3f3",
    grayText: "#666",
    grayStroke: "#ddd",
  },
  size: {
    playerHeight: "70px",
    menuWidth: "180px",
  },
  mixin: {
    logo: `
          fontSize: '24px',
          color: ${PrimaryColor},
        `,
    container: `
            padding: '20px',
        `,
  },
};

export default theme;
