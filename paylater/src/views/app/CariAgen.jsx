import React, { useEffect } from 'react'
import { connect } from "react-redux";
import CariAgenTable from 'components/reacttable/CariAgenTable'
import dashboardAction from "redux/Dashboard/actions";
import CustomToast from "components/notifications/CustomToast";

const { getter, snackBar } = dashboardAction

const CariAgen = props => {  
  useEffect(() => {
    props.getter(`api/users/?isLender=false&page=1&no_whitelist=true&type=STORE`)
  },[props.location.pathname])
    return (
      <div className="row ma-0">
        <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <CariAgenTable />
        </div>
        <CustomToast
          heading={props.snackbar.header}
          width={400}
          show={props.snackbar.appearance}
          transition={true}
          position="top-middle"
          className="c-success"
          message={props.snackbar.message}
          onCloseCLick={() => props.snackBar({ appearance : false, header : '', message : '' })}
        />
      </div>
    )
}

const mapStateToProps = state => {
    return {
      ...state.themeChanger,
      ...state.Dashboard
    };
  };

const mapDispatchToProps = {
  getter,
  snackBar
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CariAgen);