import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Meta from "./Meta";
import Header from "./Header";

const theme = {
  red: "#FFOOOO",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.childern}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
export default Page;
