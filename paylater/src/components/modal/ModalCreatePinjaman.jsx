import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import dashboardAction from "redux/Dashboard/actions";
import Button from "components/button/Button";
import Select from 'react-select';
import currencyFormatter from 'currency-formatter';

const { investGetter, /* creater, */ pinjamanGetter, updatePinjaman } = dashboardAction

const ModalCreatePinjaman = props => {
    
    const [ borrowerId, setBorrowerId ] = useState('')
    const [ mitraId, setMitraId ] = useState('')
    const [ isValidNumberPinjaman, setisValidNumberPinjaman ] = useState(true)
    const [ jumlahPinjaman, setJumlahPinjaman ] = useState('')
    const [ jumlahPencairan, setJumlahPencairan ] = useState(0)
    const [ agenFee, setAgenFee ] = useState(0)
    const [ tenor, setTenor ] = useState('')
    // const [ bunga, setBunga ] = useState(props.pinjamanData.bunga)
    // const [ denda, setDenda ] = useState('')
    const [ kontrak, setKontrak ] = useState('')
    const [ disclaimer, setDisclaimer ] = useState('')

    const tenorOptions = [
        {value : 1, label : '1 Bulan'},
        {value : 3, label : '3 Bulan'},
        {value : 6, label : '6 Bulan'},
        {value : 12, label : '12 Bulan'},
        {value : 24, label : '24 Bulan'},
        {value : 36, label : '36 Bulan'},
    ] 

    // const handleTenor = (inputedValue) => {
    //     setTenor(inputedValue.value)
    // }

    const createPinjaman = () => {
        console.log(props.pinjamanData.borrower_id._id)
        let data = {
            pinjaman_id : props.pinjamanData._id,
            borrower_id : props.pinjamanData.borrower_id._id,
            amount : jumlahPinjaman,
            // tenor : tenor || props.pinjamanData.tenor,
            kontrak : kontrak,
            disclaimer : disclaimer
        }

        props.updatePinjaman(data)
    }

    const jumlahPencairanMaker = (NominalPinjaman) => {
        /* to find a percentage of a number is always by devide the number that you want to find with 100
        ex : 1000000 : 100 = 10000 (the percentage number)
        */

        let percentage = (NominalPinjaman / 100)
        let result = NominalPinjaman - percentage

        setJumlahPencairan(result)
        setAgenFee(percentage)
    }

    useEffect(() => {
        jumlahPencairanMaker(jumlahPinjaman)
    }, [jumlahPinjaman])

    const validateNumberPinjaman = (input) => {
        let regExp = new RegExp(/^\d+$/);
        let isValid = regExp.test(input)
        // console.log(isValid)
        setisValidNumberPinjaman(isValid)
    }

    const handlePinjaman = (inputJumlahPinjaman) => {
        setJumlahPinjaman(inputJumlahPinjaman)
        jumlahPencairanMaker(inputJumlahPinjaman)
        validateNumberPinjaman(inputJumlahPinjaman)
    }

    const setDataPinjaman = (jumlah_pinjaman, tenor, kontrak ,disclaimer) => {
        if(props.pinjamanData){
            setJumlahPinjaman(jumlah_pinjaman)
            setTenor(tenor)
            setKontrak(kontrak)
            setDisclaimer(disclaimer)
        }
    }

    useEffect(() => {
        setDataPinjaman(props.pinjamanData.jumlah_pinjaman, props.pinjamanData.tenor, props.pinjamanData.kontrak, props.pinjamanData.disclaimer)
    },[props.pinjamanData])

    // console.log(props.pinjamanData)

    return (
      <Modal size="md" scrollable isOpen={props.modalCreate}>
        <ModalHeader>INVEST</ModalHeader>
        <ModalBody style={{ backgroundColor: '#f7f7f7' }}>
            {
                props.errorCreate.appearance ?
                <div class="alert alert-danger" role="alert">
                    {props.errorCreate.message}
                </div> : null
            }
            <form /* onSubmit={(event) => register(event, false)} */>

                <div className="col-12 col-xl-11 col-lg-11 col-md-11 col-sm-12 d-flex flex-column ptb-10">
                    <label>Limit Saldo</label>
                    <input
                        type="number"
                        className="font-weight-bold large-text form-control-lg  react-form-input"
                        aria-describedby="emailHelp"
                        placeholder="Jumlah Pinjaman"
                        value={jumlahPinjaman}
                        onChange={(e) => handlePinjaman(e.target.value)}
                        required
                    />
                    {
                        isValidNumberPinjaman ? 
                        null : <p><b style={{ color: 'red' }}>Limit Saldo hanya boleh berisi Angka!</b></p>
                    }
                </div>

                {/* <div className="col-12 col-xl-11 col-lg-11 col-md-11 col-sm-12 d-flex flex-column ptb-10">
                    <label>Perkiraan Jumlah Pencairan</label>
                    <h5>{currencyFormatter.format(jumlahPencairan, { code: 'IDR' })}</h5>
                </div>

                <div className="col-12 col-xl-11 col-lg-11 col-md-11 col-sm-12 d-flex flex-column ptb-10">
                    <label>Agen Fee</label>
                    <h5>{currencyFormatter.format(agenFee, { code: 'IDR' })}</h5>
                </div> */}

                <div className="col-12 col-xl-11 col-lg-11 col-md-11 col-sm-12 d-flex flex-column ptb-10">
                <p>Waktu pengembalian selama <b style={{ color: '#eb4d4b' }}>7 Hari.</b></p>
                {/* <p className="mb-1">Pilih salah satu pilihan dibawah ini jika ingin merubah.</p> */}
                    {/* <Select
                        onChange={handleTenor}
                        options={tenorOptions}
                        
                    /> */}
                    {/* <Error field="kewarganegaraan" /> */}
                </div>

                {/* <div className="col-12 col-xl-7 col-lg-7 col-md-7 col-sm-12 d-flex flex-column ptb-10">
                    <label>Denda</label>
                    <input
                        type="text"
                        className="font-weight-bold large-text form-control-lg  react-form-input"
                        aria-describedby="emailHelp"
                        placeholder="Denda"
                        value={denda}
                        onChange={(e) => setDenda(e.target.value)}
                        required
                    />
                </div> */}

                <div className="col-12 col-xl-11 col-lg-11 col-md-11 col-sm-12 d-flex flex-column ptb-10">
                    <label>Kontrak</label>
                    <input
                        type="text"
                        className="font-weight-bold large-text form-control-lg  react-form-input"
                        aria-describedby="emailHelp"
                        placeholder="Kontrak"
                        value={kontrak}
                        onChange={(e) => setKontrak(e.target.value)}
                        required
                    />
                </div>

                <div className="col-12 col-xl-11 col-lg-11 col-md-11 col-sm-12 d-flex flex-column ptb-10">
                    <label>Disclaimer</label>
                    <input
                        type="text"
                        className="font-weight-bold large-text form-control-lg  react-form-input"
                        aria-describedby="emailHelp"
                        placeholder="Disclaimer"
                        value={disclaimer}
                        onChange={(e) => setDisclaimer(e.target.value)}
                        required
                    />
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
            {
                isValidNumberPinjaman ? 
                <Button className="c-btn c-success" disabled={props.loadingCreate} type="submit" onClick={() =>  createPinjaman()}>
                APPROVE
                </Button> : 
                <Button className="c-btn c-danger" disabled type="submit">
                <i className="fas fa-ban" />
                </Button>
            }
            <Button className="c-btn c-danger" onClick={() =>  props.closeModal()}>
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

const mapDispatchToProps = {
    investGetter,
    // creater,
    pinjamanGetter,
    updatePinjaman
}

export default connect
(
    mapStateToProps,
    mapDispatchToProps
)(ModalCreatePinjaman)