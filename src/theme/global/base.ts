import { css } from "~/theme";

const base = css(({ theme: { fonts } }) => ({
  "*": {
    boxSizing: "border-box",
  },

  html: {
    fontSize: `${fonts.initialFontSize}px`,
  },

  svg: {
    height: "100%",
    width: "100%",
  },

  img: {
    maxWidth: "100%",
    verticalAlign: "middle",
  },

  button: {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
}));

export { base };
