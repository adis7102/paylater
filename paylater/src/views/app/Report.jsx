import React from 'react'
import { connect } from "react-redux";
import { MiniWidget } from "components/widgets/statisticswidgets";

import ServerSideTable from 'components/reacttable/ServerSideTable'

const Report = ({ sidebarTheme, layoutTheme }) => {
    return (
        <div className="text-center">
          <h1>COMING SOON!</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      ...state.themeChanger
    };
  };
  
export default connect(
    mapStateToProps,
    null
)(Report);