import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import dashboardAction from "redux/Dashboard/actions";
import CustomToast from 'components/notifications/CustomToast';

const { ChangePassword } = dashboardAction


const GantiPassword = (props) => {
    const [ passwordLama, setPasswordLama ] = useState('')
    const [ passwordBaru, setPasswordBaru ] = useState('')
    const [ konfirmPassword, setKonfirmPassword ] = useState('')
    const [ checkPasswordLama, setCheckPasswordLama ] = useState(false)
    const [check, setCheck] = useState({
        number: false,
        length: false
    })
    const [ checkConfirm, setCheckConfirm ] = useState(false)
    const [ ready, setReady ] = useState(true)
    const [ focusPasswordBaru, setFocusPasswordBaru ] = useState(false)
    const [ focusValidPassword, setFocusValidPassword ] = useState(false)

    const buttonBack = {
        backgroundColor: '#563c91',
        color: 'white'
    };

    const handleCheckEmptyPasswordLama = () => {
        setCheckPasswordLama( passwordLama ? true : false )
    }

    useEffect(() => {
        handleCheckEmptyPasswordLama()
    }, [passwordLama])

    function handleCheckStrong() {
        setCheck({
            number: /\d/.test(passwordBaru),
            length: /^.{6,}$/.test(passwordBaru),
        })
    }

    useEffect(() => {
        handleCheckStrong()
    }, [passwordBaru])

    function handleCheckKonfirm() {
        setCheckConfirm( konfirmPassword ? 
            konfirmPassword === passwordBaru ? 
            true : false 
            : false
        )
    }

    useEffect(() => {
        handleCheckKonfirm()
    }, [passwordLama, passwordBaru, konfirmPassword])

    function checkPasswordStrength(){
        // console.log( Object.values(check).includes(false), 'pertama')
        let result = Object.values(check).includes(false)
        // console.log(Object.values(check).includes(false), 'kedua')
        return result  
    }

    useEffect(() => {
        let result = Object.values(check).includes(false)
        if(!result && checkPasswordLama && checkConfirm){
            setReady(false)
        }
        else {
            setReady(true)
        }
    }, [checkPasswordLama, check, checkConfirm])

    const submitNewPassword = () => {
        if(!checkPasswordStrength() && checkPasswordLama && !ready){
            Swal.fire({
                title: '<p><b>Yakin Untuk Mengganti Password?</b><p>',
                text: "Tekan Ya Untuk Mengonfirmasi!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6a1b9a',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Lanjutkan!'
                }).then((result) => {
                    if (result.value) {
                        let changePasswordData = {
                            old_password : passwordLama,
                            new_password : passwordBaru
                        }
                        props.ChangePassword(changePasswordData)
                    }
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: `Semua kriteria untuk password harus benar!`,
                message : `Pastikan semuanya benar dan berwarna hijau.`
            })
        }
    }

    const handleFocus= (type) => {
        switch (type) {
            case 'newPassword':
                setFocusPasswordBaru(true)
                break;
            case 'validPassword':
                setFocusValidPassword(true)
                break;
            
            default:
                break;
        }
    }

    useEffect(() => {
        if(props.successChangePassword){
            props.history.push("/home")
        }
        console.log(props.successChangePassword)
    }, [props.successChangePassword])

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-xl-10 col-lg-10 col-md-10 col-sm-12">
                <div className="roe-card-style container ptb-15">
                <div className="roe-card-header pb-0">
                    <span className="hash"># </span>GANTI PASSWORD
                </div>
                <hr/>
                <div className="roe-card-body">
                    <form onSubmit={(e) => {submitNewPassword(); e.preventDefault();}}>
                        <div className="form-group pt-15">
                            <label>PASSWORD SEBELUMNYA</label>
                            <input
                                type="password"
                                className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                                aria-describedby="emailHelp"
                                placeholder="Password Sebelumnya"
                                value={passwordLama}
                                onChange={(e) => {
                                setPasswordLama(e.target.value)
                                }}
                                required
                            />
                            {
                                checkPasswordLama ? 
                                null : <p className="mt-2" style={{ color : 'red' }}>Password Lama tidak boleh kosong!</p> 
                            }
                        </div>

                        <div className="form-group ptb-15">
                            <label>PASSWORD BARU</label>
                            <input
                                type="password"
                                className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                                aria-describedby="emailHelp"
                                placeholder="Password Baru"
                                value={passwordBaru}
                                onFocus={() => {handleFocus('newPassword')}}
                                onChange={(e) => {
                                setPasswordBaru(e.target.value)
                                }}
                                required
                            />
                            {
                                focusPasswordBaru ? 
                                <div className="mt-2">
                                    <p style={check.number ? { color: 'green'} : { color:'red' }}>Password harus mengandung angka {
                                        check.number ? 
                                        <i className="fas fa-check" style={{ color : 'green' }}></i> :
                                        <i className="fas fa-times" style={{ color : 'red' }}></i>
                                    } 
                                    </p>
                                    <p style={check.length ? { color: 'green'} : { color:'red' }}>Password paling tidak harus memiliki 6 karakter {

                                        check.length ? 
                                        <i className="fas fa-check" style={{ color : 'green' }}></i> :
                                        <i className="fas fa-times" style={{ color : 'red' }}></i>
                                    }
                                    </p>
                                </div> : null
                            }
                        </div>

                        <div className="form-group ptb-15">
                            <label>
                                KONFIRMASI PASSWORD {" "}
                                {
                                    focusValidPassword ?
                                    <small className="ml-1">{
                                        checkConfirm ? 
                                        <span style={{ color : 'green' }}>Sama <i className="fas fa-check"></i></span> : 
                                        <span style={{ color : 'red' }}>Tidak Sama  <i className="fas fa-times"></i></span>
                                    }</small> : null
                                }
                            </label>
                            <input
                                type="password"
                                className="font-weight-bold large-text form-control-lg  react-form-input col-12"
                                aria-describedby="emailHelp"
                                placeholder="Konfirmasi Password"
                                value={konfirmPassword}
                                onFocus={() => {handleFocus('validPassword')}}
                                onChange={(e) => {
                                setKonfirmPassword(e.target.value)
                                }}
                                required
                            />
                        </div>

                        <button
                            style={buttonBack}
                            type="submit"
                            className="btn font-weight-bold col-3 align-center pa-8"
                            disabled={ready}
                        >
                            {
                                props.loadingChangePassword ?
                                <div>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    {" "}Loading...
                                </div> : 
                                "KIRIM" 
                            }
                        </button>
                    </form>
                </div>
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
    )
}

const mapStateToProps = state => {
    return {
        ...state.Dashboard
    };
};

const mapDispatchToProps = {
    ChangePassword
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GantiPassword))
