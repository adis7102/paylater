import axios from 'axios'
import Swal from 'sweetalert2'
import dashboardAction from '../Dashboard/actions'

const authActions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    LOADING_LOGIN : "LOADING_LOGIN",
    
    login: (data) => {
        // disini nanti dikasih tembakan API loginnnya
        // pas udah masuk baru di returun yang bawah ini
        // data dapet dari data yang di formlogin
        return(dispatch) => {
            // dispatch({
            //     type: authActions.LOGIN,
            //     isLogin: true,
            //     accessToken: "DEMOJWTTOKEN"
            // })
            dispatch({
                type : authActions.LOADING_LOGIN,
                payload: true
            })
            axios({
                method : "POST",
                // url : "http://159.65.15.117:3030/api/users/login",
                url : "https://api.aviana.id:3030/api/users/login",
                data : data
            })
            .then(({data}) => {
                // console.log(data.data)
                localStorage.setItem("token", data.data.token)
                localStorage.setItem("user_id", data.data._id)
                dispatch({
                    type: authActions.LOGIN,
                    isLogin: true,
                    accessToken: data.data.token
                })
                dispatch({
                    type : authActions.LOADING_LOGIN,
                    payload: false
                })
            })
            .catch(({response}) => {
                // console.log(response.data.errors)
                dispatch({
                    type : authActions.LOADING_LOGIN,
                    payload: false
                })
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${response.data.errors}!`
                })
                // console.log(response)
            })
        };
    },
    logout: () => {
        return {
            type: authActions.LOGOUT,
            isLogin: false,
            accessToken: null
        };
    },

    loadingLogin: (payload) => {
        return(dispatch) => {
            dispatch({
                type : authActions.LOADING_LOGIN,
                payload
            })      
        }
    },
}

export default authActions