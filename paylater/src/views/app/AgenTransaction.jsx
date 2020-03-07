import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import dashboardAction from "redux/Dashboard/actions";
import TransactionPengembalianTable from 'components/reacttable/TransactionPengembalianTable'
import TransactionPinjamanTable from 'components/reacttable/TransactionPinjamanTable'

const { getter, snackBar, getPengembalian, getPenarikan } = dashboardAction

const Transactions = props => {

    useEffect(() => {
        props.getPengembalian({ page : '1' })
        props.getPenarikan({ page : '1' })
    },[props.location.pathname])

    return (
        <div className="row ma-0">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <Tabs>
                    <TabList>
                        <Tab><h6 className="font-weight-bold c-text-alternate">PENGEMBALIAN</h6></Tab>
                        <Tab><h6 className="font-weight-bold c-text-alternate">PINJAMAN</h6></Tab>
                    </TabList>

                    <TabPanel>
                        <TransactionPengembalianTable />
                    </TabPanel>

                    <TabPanel>
                        <TransactionPinjamanTable />
                    </TabPanel>
                </Tabs>
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
  getter,
  snackBar,
  getPengembalian,
  getPenarikan
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);