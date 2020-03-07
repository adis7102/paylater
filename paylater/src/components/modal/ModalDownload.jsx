import React, { useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Spinners } from "reactstrap";
import Button from "components/button/Button";
import DownloadDatatable from '../../components/common/Download'
import { connect } from "react-redux";
import dashboardAction from "redux/Dashboard/actions";

const { getDownloadData } = dashboardAction

const ModalDownload = props => {
    
    const getDataDownload = () => {
       if(props.modalDownload === true){
        props.getDownloadData({ path: props.path })
       }
    }

    useEffect(() => {
        getDataDownload()
    }, [props.modalDownload])
  return (
    <div>
      <Modal size='md' centered scrollable isOpen={props.modalDownload}>
        <ModalBody>
            <div className="text-center">
            {   props.loadingDownload ? 
                <div>
                    <h5>Menyiapkan Data...</h5>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
                <div>
                    <h5 className="mb-10"><b>Klik Tombol di bawah untuk mengunduh data.</b></h5>
                    <DownloadDatatable type={props.type} />
                </div>
                }
            </div>
        </ModalBody>
        <ModalFooter>
          <Button className="c-btn c-danger" onClick={() =>  props.closeModalDownload()}>
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
    getDownloadData
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalDownload);