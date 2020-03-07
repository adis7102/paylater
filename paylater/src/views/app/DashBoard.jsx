import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MiniWidget } from "components/widgets/statisticswidgets";

import ServerSideTable from 'components/reacttable/ServerSideTable'
import dashboardAction from "redux/Dashboard/actions";
import CustomToast from "components/notifications/CustomToast";
import currencyFormatter from 'currency-formatter'

const { getter, getOneUser, snackBar } = dashboardAction

const Dashboard = props => {

    useEffect(() => {
        props.getter(`api/users/?isLender=false&no_whitelist=true&type=STORE`)
    },[])

    useEffect(() => {
      props.getOneUser(localStorage.user_id)
    },[])

    const SaldoTersediaMaker = (totalDeposit, totalPinjaman) => {
      return totalDeposit - totalPinjaman
    }

  return (
    <div>
        <div className="row ma-0">
            <div className="col-12 col-xl-4 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <MiniWidget iconName={"fas fa-store"} rightIcon={true} iconColor={"#6a1b9a"} headline={"Total Deposit"} subheader={`${currencyFormatter.format(props.oneData.saldo_deposit, { code: 'IDR' })}`} />
            </div>

            {/* <div className="col-12 col-xl-3 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <MiniWidget iconName={"fas fa-wallet"} rightIcon={true} iconColor={"#34ace0"} headline={"Total Saldo Tersedia"} subheader={`${currencyFormatter.format(SaldoTersediaMaker(props.oneData.saldo_deposit, props.oneData.saldo_pinjaman), { code: 'IDR' })}`} />
            </div> */}

            <div className="col-12 col-xl-4 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <MiniWidget iconName={"fas fa-tags"} rightIcon={true} iconColor={"#1976d2"} headline={"Total Pemberian Limit"} subheader={`${currencyFormatter.format(props.oneData.saldo_pinjaman, { code: 'IDR' })}`} />
            </div>

            <div className="col-12 col-xl-4 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <MiniWidget iconName={"fas fa-desktop"} rightIcon={true} iconColor={"#00695c"} headline={"Total Cashout"} subheader={`${currencyFormatter.format(props.oneData.saldo_cashout, { code: 'IDR' })}`} />
            </div>

        </div>
        {/* <div className="row ma-0">
            <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
            <MiniWidget iconName={"fas fa-user"} iconColor={"#6a1b9a"} headline={"Total Customers"} subheader={"-"} />
            </div>

            <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
            <MiniWidget iconName={"fas fa-user"} iconColor={"#2E7D32"} headline={"Total Active"} subheader={"-"} />
            </div>

            <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
            <MiniWidget iconName={"fas fa-user-circle"} iconColor={"#2E7D32"} headline={"Total Whitelist"} subheader={"-"} />
            </div>

            <div className="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-6 ptb-15">
            <MiniWidget iconName={"fas fa-user-alt-slash"} iconColor={"black"} headline={"Total Blacklist"} subheader={"-"} />
            </div>
        </div> */}

        <div className="row ma-0">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <ServerSideTable />
            </div>
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
  );
};
const mapStateToProps = state => {
  return {
    ...state.themeChanger,
    ...state.Dashboard
  };
};

const mapDispatchToProps = {
  getter,
  getOneUser,
  snackBar
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
