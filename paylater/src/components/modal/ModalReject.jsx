import React, { useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Spinners, Label, Input, FormGroup } from "reactstrap";
import Button from "components/button/Button";
import { connect } from "react-redux";
import dashboardAction from "redux/Dashboard/actions";

const { rejectPinjaman } = dashboardAction

const ModalReject = props => {

    const detailCardStyle = {
        borderRadius : '6px'
    }

    const rejectPinjaman = () => {
        let data = {
            pinjaman_id : props.rejectedUserData.pinjaman_id,
            borrower_id : props.rejectedUserData.borrower_id
        }
        props.rejectPinjaman(data)
    }
  return (
    <div>
      <Modal size='md' centered scrollable isOpen={props.modalReject}>
        <ModalHeader>REJECT</ModalHeader>
        <ModalBody>
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-10 d-flex flex-column shadow p-4 mb-4 bg-white" style={detailCardStyle}>
                <h6 className="ptb-10"><b>Tuliskan Alasan Mereject Permintaan!</b></h6>
                <FormGroup>
                    <Input type="textarea" name="text" id="exampleText" style={{ height: '100px' }} />
                </FormGroup>
            </div>
        </ModalBody>
        <ModalFooter>
            <Button className="c-btn c-success" onClick={() => { rejectPinjaman()}}>
                SUBMIT
            </Button>
            <Button className="c-btn c-danger" onClick={() =>  props.closeModalReject()}>
                CLOSE
            </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        ...state.Dashboard
    };
};

const mapDispatchToProps = {
    rejectPinjaman
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalReject);