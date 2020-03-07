import React, { useEffect } from 'react'
import { connect } from "react-redux";
import DaftarAgenTable from 'components/reacttable/DaftarAgenTable'
import dashboardAction from "redux/Dashboard/actions";


const { getter } = dashboardAction

const DaftarAgen = props => {
    useEffect(() => {
        props.getter(`api/users/whitelist?type=STORE`)
    }, [])

   
    return (
        <div className="row ma-0">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <DaftarAgenTable />
            </div>
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
    getter
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DaftarAgen);