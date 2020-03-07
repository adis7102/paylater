import React from "react";
import FooterWrapper from "./footer.style";
import { withRouter, Link } from "react-router-dom";
// import Button from "components/button/Button";

const Footer = props => {
  return (
    <FooterWrapper {...props}>
      <div className="footerBack flex-x align-center">
        <div className="flex-1 fs-13 bold-text ptb-5">
          © 2019 IRMA, All rights reserved.
        </div>
        <div className="fs-13 bold-text ptb-5 float-right">
          <Link to="/terms" style={{color : 'white'}}>Syarat dan Ketentuan</Link> {/* | <Link to="/policy" style={{color : 'white'}}>Kebijakan Privasi</Link> */}
        </div>
      </div>
    </FooterWrapper>
  );
};

export default withRouter(Footer);
