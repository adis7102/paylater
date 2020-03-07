import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Table } from "reactstrap";
import { connect } from "react-redux";
// import dashboardAction from "redux/Dashboard/actions";
import Button from "components/button/Button";
import currencyFormatter from 'currency-formatter'
import Countdown from 'react-countdown-now';

const ModalHistoryPembayaran = props => {

    const detailCardStyle = {
        borderRadius : '6px'
    }

    return (
        <Modal size="md" scrollable isOpen={props.modal}>
        <ModalHeader>PEMBAYARAN</ModalHeader>
        <ModalBody style={{ backgroundColor: '#f7f7f7' }} className="d-flex flex-column align-items-center">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-10 d-flex flex-column shadow p-4 mb-4 bg-white align-items-center" style={detailCardStyle}>
                <h6 className="mb-10"><strong>PERMINTAAN BERHASIL</strong></h6>
                <Table  responsive bordered>
                    <thead>
                        <tr>
                            <th>Metode Pembayaran</th>
                            <th>Nominal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>{props.modalPembayaranAppearance.metodePembayaran}</b></td>
                            <td><b>{currencyFormatter.format(props.modalPembayaranAppearance.nominal, { code: 'IDR' })}</b></td>
                        </tr>
                        {/* {
                            console.log(props.modalPembayaranAppearance)
                        } */}
                    </tbody>
                </Table>
            </div>
            <div className="col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12 ptb-10 d-flex flex-column shadow p-4 mb-4 bg-white align-items-center" style={detailCardStyle}>
                <h6 className="mb-12"> <b>Silahkan Transfer ke No. Rekening :</b></h6>
                <h5><strong>PT AVIANA SUMBER ANUGERAH</strong></h5>
                <h5><strong>BANK BCA 0409100033</strong></h5>
            </div>
            <div className="col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12 ptb-10 d-flex flex-column shadow p-4 mb-4 bg-white align-items-center" style={detailCardStyle}>
                <h6 className="mb-10"><b>Kadarluasa Dalam :</b></h6>
                {/* Documentation
                    https://www.npmjs.com/package/react-countdown-now
                */}
                <h3 className="text-danger"><strong><Countdown date={"December 12, 2020 14:20:25"} /></strong></h3>
            </div>
        </ModalBody>
        <ModalFooter>
            <Button className="c-btn c-danger" onClick={() =>  props.closeModal(false, '', '')}>
                CLOSE
            </Button>
        </ModalFooter>
      </Modal>
    )
}

const mapStateToProps = state => {
    return {
        ...state.themeChanger,
        ...state.Dashboard
    };
};

export default connect(mapStateToProps)(ModalHistoryPembayaran)