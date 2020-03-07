import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";

import PinjamanTable from 'components/reacttable/PinjamanTable'
import dashboardAction from "redux/Dashboard/actions";
import ModalCreatePinjaman from "components/modal/ModalCreatePinjaman"
import CustomToast from 'components/notifications/CustomToast';


const { getAllPinjaman, modalCreate, snackBar, loadingCreate } = dashboardAction

const Pinjaman = props => {
    const openModal = () => {
        props.modalCreate(true)
    };

    const closeModal  = () => {
        props.modalCreate(false)
        props.loadingCreate(false)
    }


    // NANTI KALO UDAH ADA LOGIN, IDNYA NGAMBIL DARI
    // LOCAL STORAGE
    useEffect(() => {
        props.getAllPinjaman(`api/pinjaman?lender_id=${localStorage.user_id}`)
    },[])



    return (
        <div className="row ma-0">
            <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            {/* <Button
                className="c-btn c-info mt-10"
                onClick={() => {openModal()}}
            >
                <div className="fs-16 medium-text font-weight-bold">
                    <i className="fas fa-plus mr-2"></i>
                    CREATE PINJAMAN
                </div>
            </Button> */}

            </div>
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <PinjamanTable />
            </div>

            {
                props.modalCreate ? 
                <ModalCreatePinjaman openModal={openModal} closeModal={closeModal} /> : null
            }
            <CustomToast
            heading={props.snackbar.header}
            width={400}
            show={props.snackbar.appearance}
            transition={true}
            position="bottom-left"
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
    getAllPinjaman,
    modalCreate,
    snackBar,
    loadingCreate
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pinjaman);