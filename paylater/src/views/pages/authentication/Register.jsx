import React, { useEffect, useState } from "react";
import { locakscreenBack, irmaLogo } from "helper/constant";
import { countries, jenisKelamin, statusPerkawinanInd,penghasilanPertahunInd } from "helper/selectItems"
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import enhancer from "./enhancer/RegisterFormEnhancer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'components/button/Button';
import dashboardAction from "redux/Dashboard/actions";
import CustomToast from 'components/notifications/CustomToast';
import { connect } from "react-redux";
import axios from 'axios'
import Swal from 'sweetalert2'

const { register, snackBar, successRegister } = dashboardAction

const Register = props => {

    // validation
    const [ validation, setValidation ] = useState('')

    // loading
    const [ loading1, setLoading1 ] = useState(false)
    const [ loading2, setLoading2 ] = useState(false)
    const [ loading3, setLoading3 ] = useState(false)
    const [ loading4, setLoading4 ] = useState(false)
    const [ loading5, setLoading5 ] = useState(false)

    // constanta INDIVIDU
    const [ inputNamaLengkap, setNamaLengkap ] = useState('')
    const [ inputAlamatIndividu, setAlamatIndividu ] = useState('')
    const [ nomerDokumenIdentitas, setNomerDokumenIdentitas ] = useState('')
    const [ nomerTelfonIndividu, setNomerTelfonIndividu ] = useState('')
    const [ tempatLahir, setTempatLahir ] = useState('')
    const [ tanggalLahir, setTanggalLahir ] = useState(new Date())
    const [ kewarganegaraan, setKewarganegaraan ] = useState('')
    const [ pekerjaan, setPekerjaan ] = useState('')
    const [ alamatTempatKerja, setAlamatTempatKerja ] = useState('')
    const [ nomorTelfonTempatKerja, setnomorTelfonTempatKerja] = useState('')
    const [ inputjenisKelamin, setJenisKelamin ] = useState('')
    const [ statusPerkawinan, setStatusPerkawinan ] = useState('')
    const [ fotoKtp, setFotoKtp ] = useState({preview: '', raw: ''})
    const [ fotoDiriKtp, setFotoDiriKtp ] = useState({preview: '', raw: ''})
    const [ nomerRekeningIndividu, setnomerRekeningIndividu ] = useState('')
    const [ penghasilanIndividu, setpenghasilanIndividu ] = useState('')
    const [ maksudDanTujuanIndividu, setmaksudDanTujuanIndividu ] = useState('')


    // constanta PERUSAHAAN
    const [ namaPerusahaan, setNamaPerusahaan ] = useState('')
    const [ alamatKedudukan, setalamatKedudukan ] = useState('')
    const [ tempatPendirianAkta, settempatPendirianAkta ] = useState('')
    const [ bentukBadanHukum, setbentukBadanHukum ] = useState('')
    const [ nomerNpwp, setnomerNpwp ] = useState('')
    const [ merekDagang, setmerekDagang ] = useState('')
    const [ nomerTelfonBisnis, setnomerTelfonBisnis ] = useState('')
    const [ nomerTelfonTeknikal, setnomerTelfonTeknikal ] = useState('')
    const [ nomerRekeningPerusahaan, setnomerRekeningPerusahaan ] = useState('')
    const [ identitasPemilikManfaat, setidentitasPemilikManfaat ] = useState('')
    const [ sumberDana, setSumberDana ] = useState('')
    const [ maksudDanTujuanPerusahaan, setmaksudDanTujuanPerusahaan ] = useState('')
    const [ fileAkta, setFileAkta ] = useState({preview: '', raw: ''})
    const [ fileTdp, setFileTdp ] = useState({preview: '', raw: ''})
    const [ fileSiup, setFileSiup ] = useState({preview: '', raw: ''})
    const [ fileSkdp, setFileSkdp ] = useState({preview: '', raw: ''})
    const [ fileLogoPerusahaan, setFileLogoPerusahaan ] = useState({preview: '', raw: ''})
    const [ bidangUsaha, setBidangUsaha ] = useState('')
    const [ tanggalAkta, setTanggalAkta ] = useState(new Date())

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
    
    const { handleChange, handleBlur, errors, touched, submitCount } = props;

    const buttonBack = {
      backgroundColor: '#563c91',
      color: 'white'
    };

    const Error = props => {
        const field1 = props.field;
        if ((errors[field1] && touched[field1]) || submitCount > 0) {
            return (
                <span className={props.class ? props.class : "error-msg"}>
                    {errors[field1]}
                </span>
            );
        } else {
            return <span />;
        }
    };

    function handleImageKtp(e){
        const files = e.target.files
        if(files[0] !== undefined) {
            const fr = new FileReader ()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
                setLoading1(true)
                const formData = new FormData()
                formData.append('file', files[0])
                axios({
                    method : "POST",
                    url : `https://api.aviana.id:9780/upload`,
                    data : formData
                })
                .then(({ data }) =>{
                    console.log(data)
                    if(data.success){
                        setLoading1(false)
                        setFotoKtp({
                            preview : data.imageurl 
                        })
                    }
                    else {
                        setLoading1(false)
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                        })
                    }
                })
                .catch(err =>{
                    console.log(err)
                    setLoading1(false)
                    Swal.fire({
                        icon: 'error',
                        title: err,
                    })
                })
          })
        }
    }

    function handleImageWithId(e) {
        const files = e.target.files
        if(files[0] !== undefined) {
            const fr = new FileReader ()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
                setLoading2(true)
                const formData = new FormData()
                formData.append('file', files[0])
                axios({
                    method : "POST",
                    url : `https://api.aviana.id:9780/upload`,
                    data : formData
                })
                .then(({ data }) =>{
                    console.log(data)
                    if(data.success){
                        setLoading2(false)
                        setFotoDiriKtp({
                            preview : data.imageurl 
                        })

                    }
                    else {
                        setLoading2(false)
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                        })
                    }
                })
                .catch(err =>{
                    console.log(err)
                    setLoading2(false)
                    Swal.fire({
                        icon: 'error',
                        title: err,
                    })
                })
          })
        }
    }

    function handleImageAkta(e){
        const files = e.target.files
        if(files[0] !== undefined) {
            const fr = new FileReader ()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
                setLoading1(true)
                const formData = new FormData()
                formData.append('file', files[0])
                axios({
                    method : "POST",
                    url : `https://api.aviana.id:9780/upload`,
                    data : formData
                })
                .then(({ data }) =>{
                    console.log(data)
                    if(data.success){
                        setLoading1(false)
                        setFileAkta({
                            preview : data.imageurl 
                        })
                    }
                    else {
                        setLoading1(false)
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                        })
                    }
                })
                .catch(err =>{
                    console.log(err)
                    setLoading1(false)
                    Swal.fire({
                        icon: 'error',
                        title: err,
                    })
                })
        })
        }
    }

    function handleImageTdp(e){
        const files = e.target.files
        if(files[0] !== undefined) {
            const fr = new FileReader ()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
                setLoading2(true)
                const formData = new FormData()
                formData.append('file', files[0])
                axios({
                    method : "POST",
                    url : `https://api.aviana.id:9780/upload`,
                    data : formData
                })
                .then(({ data }) =>{
                    console.log(data)
                    if(data.success){
                        setLoading2(false)
                        setFileTdp({
                            preview : data.imageurl 
                        })
                    }
                    else {
                        setLoading2(false)
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                        })
                    }
                })
                .catch(err =>{
                    console.log(err)
                    setLoading2(false)
                    Swal.fire({
                        icon: 'error',
                        title: err,
                    })
                })
        })
        }
    }

    function handleImageSiup(e){
        const files = e.target.files
        if(files[0] !== undefined) {
            const fr = new FileReader ()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
                setLoading3(true)
                const formData = new FormData()
                formData.append('file', files[0])
                axios({
                    method : "POST",
                    url : `https://api.aviana.id:9780/upload`,
                    data : formData
                })
                .then(({ data }) =>{
                    console.log(data)
                    if(data.success){
                        setLoading3(false)
                        setFileSiup({
                            preview : data.imageurl 
                        })
                    }
                    else {
                        setLoading3(false)
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                        })
                    }
                })
                .catch(err =>{
                    console.log(err)
                    setLoading3(false)
                    Swal.fire({
                        icon: 'error',
                        title: err,
                    })
                })
        })
        }
    }

    function handleImageSkdp(e){
        const files = e.target.files
        if(files[0] !== undefined) {
            const fr = new FileReader ()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
                setLoading4(true)
                const formData = new FormData()
                formData.append('file', files[0])
                axios({
                    method : "POST",
                    url : `https://api.aviana.id:9780/upload`,
                    data : formData
                })
                .then(({ data }) =>{
                    console.log(data)
                    if(data.success){
                        setLoading4(false)
                        setFileSkdp({
                            preview : data.imageurl 
                        })
                    }
                    else {
                        setLoading4(false)
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                        })
                    }
                })
                .catch(err =>{
                    console.log(err)
                    setLoading4(false)
                    Swal.fire({
                        icon: 'error',
                        title: err,
                    })
                })
        })
        }
    }

    function handleImageLogoPerusahaan(e){
        setFileLogoPerusahaan({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          })
        const files = e.target.files
        if(files[0] !== undefined) {
            const fr = new FileReader ()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
                setLoading5(true)
                const formData = new FormData()
                formData.append('file', files[0])
                axios({
                    method : "POST",
                    url : `https://api.aviana.id:9780/upload`,
                    data : formData
                })
                .then(({ data }) =>{
                    console.log(data)
                    if(data.success){
                        setLoading5(false)
                        setFileLogoPerusahaan({
                            preview : data.imageurl 
                        })
                    }
                    else {
                        setLoading5(false)
                        Swal.fire({
                            icon: 'error',
                            title: data.message,
                        })
                    }
                })
                .catch(err =>{
                    console.log(err)
                    setLoading5(false)
                    Swal.fire({
                        icon: 'error',
                        title: err,
                    })
                })
        })
        }
    }

    function handleBidangUsaha(inputedValue){
        setBidangUsaha(inputedValue.value)
    }

    // kewarganegaraan
    function handleKewarganegaraan(inputedValue){
        setKewarganegaraan(inputedValue.value)
    }

    // jenis kelamin
    function handleJenisKelamin(inputedValue){
        setJenisKelamin(inputedValue.value)
    }

    // status perkawinan
    function handlePerkawinan(inputedValue){
        setStatusPerkawinan(inputedValue.value)
    }

    // penghasilan pertahun
    function handlePenghasilanPertahun(inputedValue){
        setpenghasilanIndividu(inputedValue.value)
    }

    function handleTujuanPerusahaan(inputedValue){
        setmaksudDanTujuanPerusahaan(inputedValue.value)
    }

    function handleBentukUsaha(inputedValue){
        setbentukBadanHukum(inputedValue.value)
    }

    const handleChangeDate = date => setTanggalAkta(date);

    function validator() {
        if(!kewarganegaraan || !jenisKelamin || !statusPerkawinan || !penghasilanIndividu) {
            setValidation(false)
        }
    }

    const uploadAviana = (e) => {
        e.preventDefault()
        const files = e.target.files
      if(files[0] !== undefined) {
          let imageName = files[0].name
          if(imageName.lastIndexOf('.') <= 0) {
              return
          }
          const fr = new FileReader ()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
              let fileUpload = files[0] // this is an image file that can be sent to server...
              const formData = new FormData()
                  formData.append('file', fileUpload)
                  axios({
                    method : "POST",
                    url : `https://api.aviana.id:9780/upload`,
                    data : formData
                })
                .then(({ data }) =>{
                    console.log(data)
                })
                .catch(err =>{
                    console.log(err.response)
                })
        })
        }
    }

    function register(event, isCompany) {
        event.preventDefault() 
        let newData = {}
        if(isCompany) {
            newData = { 
                isLender : true,
                isCompany : true,
                nama : namaPerusahaan,
                alamat : alamatKedudukan,
                tujuan : maksudDanTujuanPerusahaan,
                saldo : 0,
                deposit : 0,
                detail : {
                    akta_pendirian_usaha : fileAkta.preview,
                    bidang_usaha : bidangUsaha,
                    tempat_pendirian_akta : tempatPendirianAkta,
                    tanggal_pendirian_akta : tanggalAkta,
                    bentuk_usaha : bentukBadanHukum,
                    NPWP : nomerNpwp,
                    TDP : fileTdp.preview,
                    SIUP : fileSiup.preview,
                    SDKP : fileSkdp.preview,
                    merek_dagang : merekDagang,
                    nohp_bisnis : nomerTelfonBisnis,
                    nohp_teknikal : nomerTelfonTeknikal,
                    logo : fileLogoPerusahaan.preview,
                    no_rek : nomerRekeningPerusahaan,
                    benefical_owner : identitasPemilikManfaat,
                    sumber_dana : sumberDana
                }
            }
        }
        else if(!isCompany) {
            newData = {
                isLender : true,
                isCompany : false,
                nama : inputNamaLengkap,
                alamat : inputAlamatIndividu,
                tujuan : maksudDanTujuanIndividu,
                saldo : 0,
                deposit : 0,
                detail : {
                    no_identitas : nomerDokumenIdentitas,
                    no_telp : nomerTelfonIndividu,
                    kewarganegaraan : kewarganegaraan,
                    pekerjaan : pekerjaan,
                    alamat_kerja : alamatTempatKerja || '-',
                    no_telp_kerja: nomorTelfonTempatKerja || '-',
                    gender : inputjenisKelamin,
                    isMarried : statusPerkawinan,
                    foto_identitas : fotoKtp.preview,
                    foto_diri : fotoDiriKtp.preview,
                    avg_penghasilan : penghasilanIndividu,
                    tanggal_lahir : tanggalLahir,
                    tempat_lahir : tempatLahir,
                    no_rek : nomerRekeningIndividu
                }
            }
        }
        props.register(newData)
    }

    useEffect(() => {
        if(props.successRegistering){
            props.history.push("/login")
        }
        console.log(props.successRegistering)
    }, [props.successRegistering])

    return (
        <div className="container-fluid" style={{ overflow : 'scroll' }}>
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15">
            
                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-row ptb-10 mx-auto">
                    <img src={irmaLogo} alt="icon" height="60px" />
                    <h2 className="register-title  text-center align-content-center" >REGISTER IRLOAN</h2>
                </div>
                <Button className="c-btn c-primary ma-5 float-right font-weight-bold col-3 col-xl-1 col-lg-1 col-md-2 col-sm-3 ptb-15 align-center pa-8" onClick={() => props.history.push("/login")}><i className="fas fa-arrow-left"></i> Login</Button>

                <CustomToast
                    heading={props.snackbar.header}
                    width={400}
                    show={props.snackbar.appearance}
                    transition={true}
                    position="bottom-left"
                    className="c-primary"
                    message={props.snackbar.message}
                    onCloseCLick={() => props.snackBar({ appearance : false, header : '', message : '' })}
                />

                <Tabs className="tabs-register mt-20" style={{ backgroundColor: 'white' }}>
                    <TabList>
                    <Tab><h6 className="font-weight-bold c-text-alternate">INDIVIDU</h6></Tab>
                    <Tab><h6 className="font-weight-bold c-text-alternate">PERUSAHAAN</h6></Tab>
                    </TabList>

                    <TabPanel>
                    <div className="register-card-style ptb-15">
                  <div className="register-card-header pb-0">
                      <span className="hash"># </span>REGISTER SEBAGAI INDIVIDU
                  </div>
                  <hr/>
                  <div className="register-card-body">
                    <form onSubmit={(event) => register(event, false)}>
                      <div className="form-group pt-15">
                          <label>Nama Lengkap Sesuai Dokumen Identitas</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                              aria-describedby="emailHelp"
                              placeholder="Nama Lengkap Sesuai Dokumen Identitas"
                              onChange={(event) => setNamaLengkap(event.target.value)}
                              required
                          />
                      </div>

                      <div className="form-group pt-15">
                          <label>Alamat Sesuai Dokumen Identitas</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                              aria-describedby="emailHelp"
                              placeholder="Alamat Lengkap Sesuai Dokumen Identitas"
                              onChange={(event) => setAlamatIndividu(event.target.value)}
                              required
                          />
                      </div>

                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <label>Nomor Dokumen Identitas</label>
                            <input
                                type="number"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                aria-describedby="emailHelp"
                                placeholder="10006112xxx"
                                onChange={(event) => setNomerDokumenIdentitas(event.target.value)}
                                required
                            />
                          </div>

                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <label>Nomor Telfon</label>
                            <input
                                type="number"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                aria-describedby="emailHelp"
                                placeholder="0813xxxxx"
                                onChange={(e) => setNomerTelfonIndividu(e.target.value)}
                                required
                            />
                          </div>
                      </div>

                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-5 col-lg-5 col-md-5 col-sm-12 d-flex flex-column">
                          <label>Tempat Lahir</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input"
                              aria-describedby="emailHelp"
                              placeholder="Tempat Pendirian Akta"
                              onChange={(e) => setTempatLahir(e.target.value)}
                              required
                          />
                          </div>

                          <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 d-flex flex-column">
                          <label>Tanggal Lahir</label>
                          <DatePicker
                            selected={tanggalAkta}
                            className="custom-datepicker"
                            onChange={handleChangeDate}
                            required
                            />
                          </div>

                          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
                            <label>Kewarganegaraan</label>
                            <Select
                                    onChange={handleKewarganegaraan}
                                    options={countries}
                                />
                                <Error field="kewarganegaraan" />
                          </div>
                          
                      </div>


                      <div className="form-group pt-15 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                          <label>Pekerjaan</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input"
                              aria-describedby="emailHelp"
                              placeholder="Pekerjaan"
                              onChange={(e) => setPekerjaan(e.target.value)}
                              required
                          />
                      </div>

                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-9 col-lg-8 col-md-9 col-sm-12 d-flex flex-column">
                          <label>Alamat Perusahaan (Opsional)</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input"
                              aria-describedby="emailHelp"
                              placeholder="Alamat Perusahaan"
                              onChange={(e) => setAlamatTempatKerja(e.target.value)}
                          />
                          </div>

                          <div className="col-12 col-xl-3 col-lg-4 col-md-3 col-sm-12 d-flex flex-column">
                          <label>Nomor Telfon Perusahaan (Opsional)</label>
                          <input
                                type="number"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                aria-describedby="emailHelp"
                                placeholder="021xxxxx"
                                onChange={(e) => setnomorTelfonTempatKerja(e.target.value)}
                            />
                          </div>
                          
                      </div>

                      <div className="form-group ptb-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
                          <label>Jenis Kelamin</label>
                          <Select
                                onChange={handleJenisKelamin}
                                options={jenisKelamin}
                                required
                            />
                          </div>

                          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column ">
                          <label>Status Perkawinan</label>
                          <Select
                                onChange={handlePerkawinan}
                                options={statusPerkawinanInd}
                                
                            />
                        </div>
                      </div>

                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
                            <label>Foto Kartu Tanda Pengenal</label>
                            <input
                                    type="file"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                onChange={handleImageKtp}
                                accept="image/*"
                                required
                            />
                            {
                                loading1 ? 
                                <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                                </div> : 
                                <div className="image-area pa-10 mt-3">
                                <img id="imageResult" src={fotoKtp.preview} alt="" className="img-fluid rounded shadow-sm mx-auto" />
                            </div>
                            }
                          </div>

                          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
                            <label>Foto Diri Bersama Kartu ID</label>
                            <input
                                    type="file"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                onChange={handleImageWithId}
                                accept="image/*"
                                required
                            />

                            {
                                loading2 ? 
                                <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                                </div> :
                                <div className="image-area pa-10 mt-3">
                                    <img id="imageResult" src={fotoDiriKtp.preview} alt="" className="img-fluid rounded shadow-sm mx-auto" />
                                </div>

                            }
                          </div>

                      </div>

                      <div className="form-group ptb-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                          <label>Maksud dan Tujuan Hubungan Usaha</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input"
                              aria-describedby="emailHelp"
                              placeholder="Maksud dan Tujuan Hubungan Usaha"
                              onChange={(e) => setmaksudDanTujuanIndividu(e.target.value)}
                              required
                          />
                          </div>

                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column ">
                          <label>Penghasilan Pertahun</label>
                          <Select
                                onChange={handlePenghasilanPertahun}
                                options={penghasilanPertahunInd}
                                required
                            />
                        </div>
                      </div>

                      <div className="form-group pt-15 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                          <label>Nomor Rekening</label>
                          <input
                              type="number"
                              className="font-weight-bold large-text form-control-lg  react-form-input"
                              aria-describedby="emailHelp"
                              placeholder="177706xxxx"
                              onChange={(e) => setnomerRekeningIndividu(e.target.value)}
                              required
                          />
                      </div>

                      <div className="form-check pb-16 pt-20">
                          <input type="checkbox" className="font-weight-bold form-check-input" required />
                          <label className="form-check-label" htmlFor="exampleCheck1">Setuju Dengan{" "}
                            <Link to="/terms">Syarat Dan Ketentuan</Link>{" "}serta{" "} 
                            <Link to="/policy">Kebijakan Privasi</Link>
                          </label>
                      </div>

                      <button
                          style={buttonBack}
                          type="submit"
                          className="btn font-weight-bold col-3 align-center pa-8"
                          disabled={props.loadingRegister}
                      >
                          {
                            props.loadingRegister ?
                            <div>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                {" "}Mengirim Data...
                            </div> : 
                            "KIRIM" 
                          }
                      </button>
                    </form>
                  </div>
                </div>
                    </TabPanel>



                    {/* PERUSAHAAN */}

                    <TabPanel>
                    <div className="register-card-style ptb-15">
                  <div className="register-card-header pb-0">
                      <span className="hash"># </span>REGISTER SEBAGAI PERUSAHAAN
                  </div>
                  <hr/>
                  <div className="register-card-body">
                    <form onSubmit={(event) => register(event, true)}>
                      <div className="form-group pt-15">
                          <label>Nama Perusahaan</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                              aria-describedby="emailHelp"
                              placeholder="Nama Perusahaan"
                              onChange={(e) => setNamaPerusahaan(e.target.value)}
                              required
                          />
                      </div>

                      <div className="form-group pt-15">
                          <label>Alamat Kedudukan</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                              aria-describedby="emailHelp"
                              placeholder="Alamat Kedudukan"
                              onChange={(e) => setalamatKedudukan(e.target.value)}
                              required
                          />
                      </div>

                      <div className="form-group pt-15 d-flex flex-column">
                          <label>Akta Pendirian Usaha</label>
                          <input
                                type="file"
                              className="font-weight-bold large-text form-control-lg  react-form-input col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12"
                              onChange={handleImageAkta}
                              accept="image/*"
                              required
                          />
                          {
                            loading1 ? 
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div> : 
                            <div className="image-area col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 pa-10 mt-3">
                                <img id="imageResult" src={fileAkta.preview} alt="" className="img-fluid rounded shadow-sm mx-auto" />
                            </div>
                          }
                      </div>

                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-9 col-lg-9 col-md-9 col-sm-12 d-flex flex-column">
                          <label>Tempat Pendirian Akta</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input"
                              aria-describedby="emailHelp"
                              placeholder="Tempat Pendirian Akta"
                              onChange={(e) => settempatPendirianAkta(e.target.value)}
                              required
                          />
                          </div>

                          <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 d-flex flex-column">
                          <label>Tanggal Pendirian Akta</label>
                          <DatePicker
                            selected={tanggalAkta}
                            className="custom-datepicker"
                            onChange={handleChangeDate}
                            required
                            />
                          </div>
                          
                      </div>

                      <div className="form-group ptb-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                          <label>Bidang Usaha</label>
                          <Select
                                onChange={handleBidangUsaha}
                                options={options}
                                required
                            />
                          </div>

                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column ">
                          <label>Bentuk Badan Hukum atau Badan Usaha</label>
                          <Select
                                onChange={handleBentukUsaha}
                                options={options}
                                required
                            />
                        </div>
                      </div>

                      <div className="form-group pt-15 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                          <label>Merek Dagang</label>
                          <input
                              type="text"
                              className="font-weight-bold large-text form-control-lg  react-form-input"
                              aria-describedby="emailHelp"
                              placeholder="Merek Dagang"
                              onChange={(e) => setmerekDagang(e.target.value)}
                              required
                          />
                      </div>

                      <div className="form-group pt-15 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                          <label>Nomor NPWP</label>
                          <input
                              type="number"
                              className="font-weight-bold large-text form-control-lg  react-form-input"
                              aria-describedby="emailHelp"
                              placeholder="123-123-123"
                              onChange={(e) => setnomerNpwp(e.target.value)}
                              required
                          />
                      </div>

                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
                            <label>Tanda Daftar Perusahaan (TDP)</label>
                            <input
                                type="file"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                onChange={handleImageTdp}
                                accept="image/*"
                                required
                            />
                            {
                                loading2 ? 
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div> :
                                 <div className="image-area pa-10 mt-3">
                                    <img id="imageResult" src={fileTdp.preview} alt="" className="img-fluid rounded shadow-sm mx-auto" />
                                </div>
                            }
                          </div>

                          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
                            <label>Surat Izin Usaha Perdagangan (SIUP)</label>
                            <input
                                type="file"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                onChange={handleImageSiup}
                                accept="image/*"
                                required
                            />
                            {
                                loading3 ?
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div> :
                                <div className="image-area pa-10 mt-3">
                                    <img id="imageResult" src={fileSiup.preview} alt="" className="img-fluid rounded shadow-sm mx-auto" />
                                </div>

                            }
                          </div>

                          <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
                            <label>Surat Keterangan Domisili Perusahaan</label>
                            <input
                                type="file"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                onChange={handleImageSkdp}
                                accept="image/*"
                                required
                            />
                            {
                                loading4 ?
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div> :
                                <div className="image-area pa-10 mt-3">
                                    <img id="imageResult" src={fileSkdp.preview} alt="" className="img-fluid rounded shadow-sm mx-auto" />
                                </div>
                            }
                          </div>
                      </div>

                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <label>Nomor Telfon Tim Bisnis</label>
                            <input
                                type="number"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                aria-describedby="emailHelp"
                                placeholder="0813xxxxx"
                                onChange={(e) => setnomerTelfonBisnis(e.target.value)}
                                required
                            />
                          </div>

                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <label>Nomor Telfon Tim Teknikal</label>
                            <input
                                type="number"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                aria-describedby="emailHelp"
                                placeholder="0813xxxxx"
                                onChange={(e) => setnomerTelfonTeknikal(e.target.value)}
                                required
                            />
                          </div>
                      </div>


                      <div className="form-group pt-15 d-flex flex-column">
                          <label>Logo Perusahaan (Dimensional Included)</label>
                          <input
                                type="file"
                              className="font-weight-bold large-text form-control-lg  react-form-input col-12 col-xl-6 col-lg-4 col-md-6 col-sm-12 d-flex"
                              onChange={handleImageLogoPerusahaan}
                              accept="image/*"
                              required
                          />
                          {
                            loading5 ? 
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div> :
                            <div className="image-area col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 d-flex pa-10 mt-3">
                                <img id="imageResult" src={fileLogoPerusahaan.preview} alt="" className="img-fluid rounded shadow-sm mx-auto" />
                            </div>
                          }
                      </div>


                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <label>Nomor Rekening</label>
                            <input
                                type="number"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                aria-describedby="emailHelp"
                                placeholder="123213xxx"
                                onChange={(e) => setnomerRekeningPerusahaan(e.target.value)}
                                required
                            />
                          </div>

                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <label>Sumber Dana</label>
                            <input
                                type="text"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                aria-describedby="emailHelp"
                                placeholder="Sumber Dana"
                                onChange={(e) => setSumberDana(e.target.value)}
                                required
                            />
                          </div>
                      </div>


                      <div className="form-group pt-15 d-flex flex-wrap flex-xl-row flex-lg-row flex-md-column flex-sm-column">
                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <label>Identitas Pemilik Manfaat(Beneficial Owner)</label>
                            <input
                                type="text"
                                className="font-weight-bold large-text form-control-lg  react-form-input"
                                aria-describedby="emailHelp"
                                placeholder="Identitas Pemilik Manfaat(Beneficial Owner)"
                                onChange={(e) => setidentitasPemilikManfaat(e.target.value)}
                                required
                            />
                          </div>

                          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column">
                            <label>Maksud dan Tujuan Hubungan Usaha</label>
                            <Select
                                onChange={handleTujuanPerusahaan}
                                options={options}
                                required
                            />
                          </div>
                      </div>

                      <div className="form-check pb-16 pt-20">
                          <input type="checkbox" className="font-weight-bold form-check-input" required />
                          <label className="form-check-label" htmlFor="exampleCheck1">Setuju Dengan{" "}
                            <Link to="/terms">Syarat Dan Ketentuan</Link>{" "}serta{" "} 
                            <Link to="/policy">Kebijakan Privasi</Link>
                          </label>
                      </div>

                      <button
                          style={buttonBack}
                          type="submit"
                          className="btn font-weight-bold col-3 align-center pa-8"
                          disabled={props.loadingRegister}
                          >
                              {
                                props.loadingRegister ?
                                <div>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    {" "}Mengirim Data...
                                </div> : 
                                "KIRIM" 
                              }
                      </button>
                    </form>
                  </div>
                </div>
                    </TabPanel>
                </Tabs>
            </div>
            
            {/* <div>
                <div className="form-container">
                    <div className="login-icon">
                        <img src={irmaLogo} alt="icon" height="100px" />
                    </div>
                    <div className="login-title">Register Akun</div>
                    <form className="pa-24" onSubmit={handleRegister}>
                        <div className="form-group">
                            <label>Nama Lengkap</label>
                            <input
                                type="text"
                                className="form-control react-form-input"
                                id="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Nama Lengkap"
                            />
                            <Error field="name" />
                        </div>                        

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control react-form-input"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Email"
                            />
                            <Error field="email" />
                        </div>

                        <div className="form-group">
                            <label>Buat Password</label>
                            <input
                                type="password"
                                className="form-control react-form-input"
                                id="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Buat Password"
                            />
                            <Error field="password" />
                        </div>

                        <div className="form-check text-center mtb-16">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label
                                className="form-check-label register-privacy-text"
                                htmlFor="exampleCheck1"
                            >
                                Agree to{" "}
                                <a href="/register">terms & privacy policy</a>
                            </label>
                        </div>

                        <button type="submit" className="btn form-button">
                            Register
                        </button>
                        <div
                            className="text-center link-label"
                            onClick={() => props.history.push("/login")}
                        >
                            Login ?
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state.Dashboard
    };
};

const mapDispatchToProps = {
    register,
    snackBar,
    successRegister
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(
    compose(
    withRouter,
    enhancer
    )(Register)
)