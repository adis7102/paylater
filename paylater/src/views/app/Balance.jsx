import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import NoIconWidget from "components/widgets/statisticswidgets/miniwidget/NoIconWidget";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import dashboardAction from "redux/Dashboard/actions";
import HistoryPaymentTable from "components/reacttable/HistoryPaymentTable"
import currencyFormatter from 'currency-formatter';
import ModalHistoryPembayaran from "components/modal/ModalHistoryPembayaran"
import Select from 'react-select';

const { getOneUser, snackBar, requestTopUp, modalPembayaran, getHistoryTopup } = dashboardAction

const Balance = props => {
    const[ nominal, setNominal ] = useState('')
    const[ paymentMethod, setPaymentMethod ] = useState({ value: '', label: '' })
    const [validatePaymentMethod, setvalidatePaymentMethod] = useState(false)

    const options = [
      { value: 'Bank Transfer', label: 'Bank Transfer' },
    ];

    const closeModal  = () =>{
      setNominal('')
      setPaymentMethod('')
      props.modalPembayaran({
        appearance: false, 
        metodePembayaran: '',
        nominal: ''
      })
    }

    const buttonBack = {
      backgroundColor: '#563c91',
      color: 'white'
    };

    useEffect(() => {
      props.getOneUser(localStorage.user_id)
      props.getHistoryTopup(`page=2`)
    },[])

    const handlePaymentMethod = (inputedValue) => {
      setPaymentMethod({value : inputedValue.value, label : inputedValue.label})
    }

    // const paymentMethodValidator = () => {
    //   // if(inputedValue.value !== ''){
    //   //   setvalidatePaymentMethod(true)
    //   // }
    //   // else {
    //   //   setvalidatePaymentMethod(false)
    //   // }
    // }

    const topUp = (type) => {
      if((nominal !== '' && paymentMethod.value !== '' && type === 'topup') || (nominal !== '' && type === 'withdraw')){
        let data = {
          type : type,
          metodePembayaran : paymentMethod.value,
          amount : nominal
        }
        props.requestTopUp(data)
        setNominal('')
        setPaymentMethod({value : '', label : ''})
        setvalidatePaymentMethod(false)
      }
      else {
        setvalidatePaymentMethod(true)
      }
    }

    return (
      <div>
        <div className="row ma-0">
          <div className="col-12 col-xl-8 col-lg-7 col-md-12 col-sm-12 ptb-15">

            <Tabs>
              <TabList>
                <Tab><h6 className="font-weight-bold c-text-alternate"> TOPUP</h6></Tab>
                <Tab><h6 className="font-weight-bold c-text-alternate"> CASHOUT</h6></Tab>
              </TabList>

              <TabPanel>
                <div className="roe-card-style container ptb-15">
                  <div className="roe-card-header pb-0">
                      <span className="hash"># </span>REQUEST TOPUP
                  </div>
                  <hr/>
                  <div className="roe-card-body">
                    <form onSubmit={(e) => {topUp('topup'); e.preventDefault();}}>
                      <div className="form-group pt-15">
                          <label>NOMINAL</label>
                          <input
                              type="number"
                              className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                              aria-describedby="emailHelp"
                              placeholder="NOMINAL"
                              value={nominal}
                              onChange={(e) => {
                                setNominal(e.target.value)
                              }}
                              required
                          />
                      </div>

                      <div className="form-group ptb-15">
                          <label>PAYMENT METHOD</label>
                          <Select
                              onChange={handlePaymentMethod}
                              options={options}
                              value={paymentMethod}
                              // onFocus={handleFocus}
                              onSubmit={(e) => {setPaymentMethod(''); e.preventDefault()}}
                          />
                          {
                            validatePaymentMethod ?
                            <p style={{color : 'red'}}>Pilih Salah Satu Payment Method!</p> : null
                          }
                      </div>

                      <div className="form-check pb-16">
                          <input type="checkbox" className="font-weight-bold form-check-input" />
                          <label className="form-check-label" htmlFor="exampleCheck1">
                              GENERATE INVOICE
                          </label>
                      </div>

                      <button
                          style={buttonBack}
                          type="submit"
                          className="btn font-weight-bold col-3 align-center pa-8"
                      >
                          KIRIM
                      </button>
                    </form>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="roe-card-style container ptb-15">
                  <div className="roe-card-header pb-0">
                      <span className="hash"># </span>REQUEST CASHOUT
                  </div>
                  <hr/>
                  <div className="roe-card-body">
                    <form onSubmit={(e) => {topUp('withdraw'); e.preventDefault();}}>
                      <div className="form-group pt-15">
                          <label>NOMINAL</label>
                          <input
                              type="number"
                              className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                              aria-describedby="emailHelp"
                              placeholder="NOMINAL"
                              value={nominal}
                              onChange={(e) => {
                                setNominal(e.target.value)
                              }}
                              required
                          />
                      </div>

                      {/* <div className="form-group ptb-15">
                          <label>PAYMENT METHOD</label>
                          <Select
                              onChange={handlePaymentMethod}
                              options={options}
                              value={paymentMethod}
                              // onFocus={handleFocus}
                              onSubmit={(e) => {setPaymentMethod(''); e.preventDefault()}}
                              
                          />
                          {
                            validatePaymentMethod ?
                            <p style={{color : 'red'}}>Pilih Salah Satu Payment Method!</p> : null
                          }
                      </div> */}

                      {/* <div className="form-check pb-16">
                          <input type="checkbox" className="font-weight-bold form-check-input" />
                          <label className="form-check-label" htmlFor="exampleCheck1">
                              GENERATE INVOICE
                          </label>
                      </div> */}

                      <button
                          style={buttonBack}
                          type="submit"
                          className="btn font-weight-bold col-3 align-center pa-8"
                      >
                          KIRIM
                      </button>
                    </form>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div className="col-12 col-xl-4 col-lg-5 col-md-12 col-sm-12 ptb-15">
            <div className="container-fluid">
              <h3>SALDO</h3>
              <hr/>
              <NoIconWidget headline={"SALDO TERSEDIA"} subheader={`${currencyFormatter.format(props.oneData.saldo_deposit, { code: 'IDR' })}`} />
              
              <NoIconWidget headline={"TOTAL CASHOUT"} subheader={`${currencyFormatter.format(props.oneData.saldo_cashout, { code: 'IDR' })}`} className="mt-30" />
            </div>
          </div>
        </div>

        {
          props.modalPembayaranAppearance ? 
          <ModalHistoryPembayaran modal={props.modalPembayaranAppearance.appearance} closeModal={closeModal} /> : ''
        }
        

        <div className="row ma-0">
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <HistoryPaymentTable />
          </div>
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
  getOneUser,
  snackBar,
  requestTopUp,
  modalPembayaran,
  getHistoryTopup
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Balance);