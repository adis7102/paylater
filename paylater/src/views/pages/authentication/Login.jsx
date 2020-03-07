import React, { useEffect } from "react";
import { locakscreenBack } from "helper/constant";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import AuthActions from "redux/auth/actions";
import enhancer from "./enhancer/LoginFormEnhancer";
import IrmaLogo from 'assets/images/irma-logo.png'
import CustomToast from 'components/notifications/CustomToast';
import IrmaWhite from 'assets/images/LOGO-IRMA-P2P-WHITE.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const { login } = AuthActions;

const Login = props => {
    const handleLogin = e => {
        e.preventDefault();
        let { values, handleSubmit } = props;

        if (values.email !== "" && values.password !== "") {
            // console.log("Here is your form value", values);

            const data = {
                username : values.email,
                password : values.password
            };
            
            // const data = {
            //     token : "DEMOJWTTOKEN"
            // }
            // using this method you can store token in redux
            props.login(data);
            props.history.push("/home");
        }
        handleSubmit();
    };

    useEffect(() => {
        if(props.isLogin && localStorage.token){
            props.history.push("/home")
        }
        else {
            props.history.push("/login")
        }
    }, [props.isLogin])

    const { values, handleChange, handleBlur, errors, touched, submitCount } = props;

    const loginContainer = {
        backgroundImage: `url(${locakscreenBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "fixed",
        overflow: "auto",
        top: 0,
        bottom: 0,
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


    return (
        <div className="container-fluid" style={loginContainer}>
            <div className="login-container row ma-0 mt-100 ptb-15">
            <CustomToast
                heading={props.snackbar.header}
                width={400}
                show={props.snackbar.appearance}
                transition={true}
                position="bottom-middle"
                className="c-danger"
                message={props.snackbar.message}
                onCloseCLick={() => props.snackBar({ appearance : false, header : '', message : '' })}
            />
                <div className="welcome-to col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 pa-20 ml-sm-10 row justify-content-end">

                    <ReactCSSTransitionGroup
                    transitionName="loginTitleAnimate"
                    transitionAppear={true}
                    transitionAppearTimeout={3000}
                    transitionEnter={false}
                    transitionLeave={false}>
                        <div>
                            <div>
                                <img
                                    src={IrmaWhite}
                                    alt="notify"
                                    className="img-fluid mb-30"
                                    id="logo-irma-login"
                                />
                            </div>
                            <div className="text-white font-weight-bold">
                                <h1 className="save-money"><strong>Save your Money</strong></h1>
                            </div>
                            <div className="text-white font-weight-bold">
                                <h1 className="save-money"><strong>and Helping many people</strong></h1>
                            </div>
                        </div>
                    </ReactCSSTransitionGroup>
                    
                </div>                

                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 pa-18 login-form-container">

                {/* <ReactCSSTransitionGroup
                transitionName="loginForm"
                transitionAppear={true}
                transitionAppearTimeout={2000}
                transitionEnter={false}
                transitionLeave={false}> */}
                    <div className="form-container">
                    <ReactCSSTransitionGroup
                    transitionName="slideInDown"
                    transitionAppear={true}
                    transitionAppearTimeout={3000}
                    transitionEnter={false}
                    transitionLeave={false}>

                        <div className="login-icon shadow p-4 mb-4 bg-white" id="login-icon-irma">

                            <ReactCSSTransitionGroup
                            transitionName="rotateIn"
                            transitionAppear={true}
                            transitionAppearTimeout={3000}
                            transitionEnter={false}
                            transitionLeave={false}>

                                <img src={IrmaLogo} /* id="infinitiRotation" */ alt="icon" height="100px" />

                            </ReactCSSTransitionGroup>
                                
                        </div>
                    </ReactCSSTransitionGroup>
                        <div className="login-title pt-2">Sign in to your account</div>
                        <form className="pa-24" onSubmit={handleLogin}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-control react-form-input"
                                    id="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={handleBlur}
                                    placeholder="Username"
                                />
                                <Error field="email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control react-form-input"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Password"
                                />
                                <Error field="password" />
                            </div>

                            {/* <div className="form-check text-center mtb-16">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="exampleCheck1"
                                >
                                    Remember me
                                </label>
                            </div> */}

                            <button type="submit" className="btn form-button"
                            disabled={props.loadingLogin}
                            >
                                {
                                    props.loadingLogin ?
                                    <div>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        {" "}Loading...
                                    </div> : 
                                    "Login" 
                                }
                            </button>
                            <div
                                className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pa-0 pt-3 mb-0 fs-13"
                            >
                                Belum memiliki akun? silahkan <b className="link-label" onClick={() => props.history.push("/register")}>REGISTER</b>
                            </div>
                            <div className="flex-x align-items-center mt-4 col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pa-0">
                                <div
                                    className="flex-x justify-content-start text-left col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 pa-0 ma-0"
                                >   
                                    <Link className="link-label" to="/policy">Kebijakan Privasi</Link>
                                </div>
                                <div
                                    className="flex-x justify-content-end col-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 pa-0 ma-0"
                                >
                                    <Link to="/terms" className="link-label">Syarat & Ketentuan</Link>
                                </div>
                                {/* <div
                                    className="text-right link-label col-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 pa-0 pt-2"
                                    onClick={() => props.history.push("/forgotPassword")}
                                >
                                    Forgot Password ?
                                </div> */}
                            </div>
                        </form>
                    </div>
                {/* </ReactCSSTransitionGroup> */}
                
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state.Dashboard,
        ...state.auth
    };
};

export default compose(
    withRouter,
    enhancer,
    connect(
        mapStateToProps,
        { login }
    )
)(Login);
