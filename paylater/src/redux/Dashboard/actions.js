import axios from 'axios'
import Swal from 'sweetalert2'
import currencyFormatter from 'currency-formatter';



const dashboardAction = {
    // BASE_URL : "http://159.65.15.117:3030/",
    BASE_URL : "https://api.aviana.id:3030/",
    GETTER : "GETTER",
    SELECT_GETTER: "SELECT_GETTER",
    LOADING : "LOADING",
    LOADING_REGISTER : "LOADING_REGISTER",
    LOADING_TOPUP : "LOADING_TOPUP",
    REGISTER : "REGISTER",
    LOADING_CHANGE_PASSWORD : "LOADING_CHANGE_PASSWORD",
    SUCCESS_CHANGE_PASSWORD: "SUCCESS_CHANGE_PASSWORD",
    SUCCESS_REGISTER : "SUCCESS_REGISTER",
    SNACKBAR : "SNACKBAR",
    MODAL_CREATE: "MODAL_CREATE",
    MODAL_PEMBAYARAN: "MODAL_PEMBAYARAN",
    LOADING_CREATE : "LOADING_CREATE",
    CREATER : "CREATER",
    ERROR : "ERROR",
    PAGE_DATA : "PAGE_DATA",
    ONE_DATA : "ONE_DATA",
    PINJAMAN_DATA : "PINJAMAN_DATA",
    GET_ALL_PINJAMAN : "GET_ALL_PINJAMAN",
    GET_TOPUP_HISTORY: "GET_TOPUP_HISTORY",
    GET_PENGEMBALIAN: "GET_PENGEMBALIAN",
    GET_PENARIKAN: "GET_PENARIKAN",
    DATA_DOWNLOAD: "DATA_DOWNLOAD",
    LOADING_DOWNLOAD: "LOADING_DOWNLOAD",

    register: (data) => {
        return(dispatch, state) => {
            dispatch({
                type : dashboardAction.LOADING_REGISTER,
                payload : true
            })
            dispatch({
                type : dashboardAction.SUCCESS_REGISTER,
                payload : false
            })
            axios({
                method : 'POST',
                url : `${dashboardAction.BASE_URL}api/users/lender`,
                data : data
            })
            .then(({data}) => {
                // console.log(data)
                dispatch({
                    type : dashboardAction.LOADING_REGISTER,
                    payload : false
                })
                dispatch({ 
                    type: dashboardAction.SNACKBAR,
                    payload: {appearance : true, header : 'BERHASIL!', message : 'Berhasil mengirim data, Permintaanmu akan segera kami proses!'}
                 })
                 setTimeout(() => {
                    dispatch({ 
                        type: dashboardAction.SNACKBAR,
                        payload: {appearance : false, header : '', message : ''}
                     })
                    dispatch({
                        type : dashboardAction.SUCCESS_REGISTER,
                        payload : true
                    }) 
                    dispatch({
                        type : dashboardAction.SUCCESS_REGISTER,
                        payload : false
                    })
                 }, 3300)
            })
            .catch(err => {console.log(err)
                dispatch({
                    type : dashboardAction.LOADING_REGISTER,
                    payload : false
                })
            })
        }
    },

    ChangePassword: (payload) => {
        return(dispatch) => {
            dispatch({
                type: dashboardAction.LOADING_CHANGE_PASSWORD,
                payload: true
            })

            axios({
                method: "PATCH",
                url: `${dashboardAction.BASE_URL}api/users/change_password/`,
                data: payload,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                console.log(data)
                dispatch({
                    type: dashboardAction.LOADING_CHANGE_PASSWORD,
                    payload: false
                })
                dispatch({ 
                    type: dashboardAction.SNACKBAR,
                    payload: {appearance : true, header : 'BERHASIL MEENGGANTI PASSWORD!', message : 'Ingatlah untuk selalu mengganti Password anda secara berkala!'}
                 })
                dispatch({
                    type : dashboardAction.SUCCESS_CHANGE_PASSWORD,
                    payload : true
                }) 
                dispatch({
                    type : dashboardAction.SUCCESS_CHANGE_PASSWORD,
                    payload : false
                })
                 setTimeout(() => {
                    dispatch({ 
                        type: dashboardAction.SNACKBAR,
                        payload: {appearance : false, header : '', message : ''}
                     })
                 }, 3500)
            })
            .catch(({response}) => {
                console.log(response)
                dispatch({
                    type: dashboardAction.LOADING_CHANGE_PASSWORD,
                    payload: false
                })
                Swal.fire({
                    icon: 'error',
                    title: `${response.data.errors}`,
                })
            })
        }
    },

    snackBar: (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.SNACKBAR,
                payload : payload
            })
        }
    },

    successRegister: (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.SUCCESS_REGISTER,
                payload : payload
            })
        }
    },

    getOneUser : (payload) => {
        // console.log(payload)
        return(dispatch) => {
            axios({
                method : "GET",
                url : `${dashboardAction.BASE_URL}api/users/${payload}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data)
                dispatch({
                    type : dashboardAction.ONE_DATA,
                    payload: data.data
                })
            })
            .catch(err => console.log(err))
        }
    },

    getter: (payload) => {
        return(dispatch, state) => {
            // type: dashboardAction.GETTER,
            // payload: '20000'
            // console.log(payload.locate)
            // console.log(payload)
            dispatch({
                type: dashboardAction.GETTER,
                payload: []
            })
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })
            axios({
                method : "GET",
                url : `${dashboardAction.BASE_URL}${payload}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data, 'from getter')
                dispatch({
                    type: dashboardAction.GETTER,
                    payload: data.data
                })
                dispatch({
                    type: dashboardAction.PAGE_DATA,
                    payload: {
                        page: data.page,
                        next_page: data.next_page,
                        prev_page: data.prev_page,
                        per_page: data.per_page,
                        total_count: data.total_count,
                        total_page: data.total_page
                    }
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type : dashboardAction.LOADING,
                    payload : false
                })
            })
        }
    },

    pageData: (payload) => {
        return(dispatch, state) => {
            dispatch({
                type : dashboardAction.PAGE_DATA,
                payload : payload
            })
        }
    },

    searcher: (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })
            axios({
                method : "GET",
                url : `${dashboardAction.BASE_URL}${payload}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                dispatch({
                    type: dashboardAction.GETTER,
                    payload: data.data
                })
                dispatch({
                    type: dashboardAction.PAGE_DATA,
                    payload: {
                        page: data.page,
                        next_page: data.next_page,
                        prev_page: data.prev_page,
                        per_page: data.per_page,
                        total_count: data.total_count,
                        total_page: data.total_page
                    }
                })
            })
            .catch(({response}) => {
                console.log(response)
                dispatch({
                    type : dashboardAction.LOADING,
                    payload : false
                })
            })
        }
    }, 

    filter:  (payload) => {
        return(dispatch, state) => {
            // console.log(payload, 'ini filtering')
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })
            axios({
                method : 'GET',
                url : `${dashboardAction.BASE_URL}${payload.path}?isLender=false&isCompany=${payload.filter}&no_whitelist=true&type=STORE`,
                headers: {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data, 'INI DATA LOOOO')
                dispatch({
                    type: dashboardAction.GETTER,
                    payload: data.data
                })
            })
            .catch(err => {console.log(err)})
        }
    },

    filterHistory : (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })

            axios({
                method : 'GET',
                url : `${dashboardAction.BASE_URL}api/notif/topup${payload ? `?${payload.query}` : '/'}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data)
                dispatch({
                    type : dashboardAction.GET_TOPUP_HISTORY,
                    payload: data.data
                })
            })
            .catch(({response}) => {
                console.log(response)
                dispatch({
                    type : dashboardAction.LOADING,
                    payload : true
                })
            })
        }
    },

    getHistoryTopup: (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })
            axios({
                method : 'GET',
                url : `${dashboardAction.BASE_URL}api/notif/topup?${payload ? payload : ''}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data)
                dispatch({
                    type : dashboardAction.GET_TOPUP_HISTORY,
                    payload: data.data
                })
                dispatch({
                    type: dashboardAction.PAGE_DATA,
                    payload: {
                        page: data.page,
                        next_page: data.next_page,
                        prev_page: data.prev_page,
                        per_page: data.per_page,
                        total_count: data.total_count,
                        total_page: data.total_page
                    }
                })
            })
            .catch(({response}) => {
                console.log(response)
                dispatch({
                    type : dashboardAction.LOADING,
                    payload : true
                })
            })
        }
    },

    requestTopUp: (payload) => {
        return(dispatch) => {
            // console.log(payload)
            dispatch({
                type: dashboardAction.LOADING_TOPUP,
                payload: true
            })
            Swal.fire({
                title: 'Pastikan data request benar!',
                html: `<p>Nominal : <b>${currencyFormatter.format(payload.amount, { code: 'IDR' })}</b></p></b> ${ payload.type === 'topup' ? `<p>Metode Pembayaran : <b>${payload.metodePembayaran}</b></p>` : '' }`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Lakukan Request!',
            })
            .then((result) => {
                if(result.value){
                    return axios({
                        method: "PATCH",
                        url : `${dashboardAction.BASE_URL}api/users/update_saldo/`,
                        data: {
                            type : payload.type, 
                            amount : payload.amount
                        },
                        headers: {
                            token: localStorage.token
                        }
                    })
                }
            })
            .then(({data}) => {
                // console.log(data)
                switch (payload.type) {
                    case 'topup':
                        dispatch({
                            type: dashboardAction.MODAL_PEMBAYARAN,
                            payload : {
                                appearance: true,
                                metodePembayaran: payload.metodePembayaran,
                                nominal: payload.amount
                            }
                        })
                        break;                
                    case 'withdraw':
                        Swal.fire(
                            'PERMINTAAN BERHASIL!',
                            'proses pencairan segera di proses.',
                            'success'
                        )
                        break;
                        
                }
                axios({
                    method : "GET",
                    url : `${dashboardAction.BASE_URL}api/users/${localStorage.user_id}`,
                    headers : {
                        token : localStorage.token
                    }
                })
                .then(({data}) => {
                    // console.log(data)
                    dispatch({
                        type : dashboardAction.ONE_DATA,
                        payload: data.data
                    })
                })
                axios({
                    method : 'GET',
                    url : `${dashboardAction.BASE_URL}api/notif/topup`,
                    headers : {
                        token : localStorage.token
                    }
                })
                .then(({data}) => {
                    // console.log(data)
                    dispatch({
                        type : dashboardAction.GET_TOPUP_HISTORY,
                        payload: data.data
                    })
                })
            })
            .catch(({response}) => {
                console.log(response)
                // Swal.fire({
                //     icon: 'error',
                //     title: `${err}`,
                // })
                
            })
        }
    },

    modalPembayaran: (payload) => {
        // console.log(payload)
        return(dispatch) => {
            dispatch({
                type: dashboardAction.MODAL_PEMBAYARAN,
                payload: payload
            })
        }
    },

    modalCreate: (payload) => {
        // console.log('taraaaa')
        return(disptach) => {
            disptach({
                type: dashboardAction.MODAL_CREATE,
                payload
            })
        }
    },

    getAllPinjaman : (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })
            axios({
                method : "GET",
                url : `${dashboardAction.BASE_URL}${payload}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data.data)
                dispatch({
                    type: dashboardAction.GET_ALL_PINJAMAN,
                    payload: data.data
                })
                dispatch({
                    type: dashboardAction.PAGE_DATA,
                    payload: {
                        page: data.page,
                        next_page: data.next_page,
                        prev_page: data.prev_page,
                        per_page: data.per_page,
                        total_count: data.total_count,
                        total_page: data.total_page
                    }
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type : dashboardAction.LOADING,
                    payload : false
                })
            })
        }
    },

    pinjamanGetter : (payload) => {
        return(dispatch) => {
            axios({
                method : "GET",
                url : `${dashboardAction.BASE_URL}api/pinjaman?borrower_id=${payload}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data.data[0])
                dispatch({
                    type : dashboardAction.PINJAMAN_DATA,
                    payload : data.data[0]
                })
            })
            .catch(err => {console.log(err)})
        }
    },

    updatePinjaman : (payload) => {
        return(dispatch) => {
            // console.log(payload)
            dispatch({
                type : dashboardAction.LOADING_CREATE,
                payload: true
            })
            // console.log(payload, 'INI PAYLOAD')
            axios({
                method : 'POST',
                url : `${dashboardAction.BASE_URL}api/pinjaman/invest`,
                data : payload,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data)
                axios({
                    method: "GET",
                    url : `${dashboardAction.BASE_URL}api/users/whitelist?type=STORE`,
                    headers : {
                        token : localStorage.token
                    }
                })
                .then(({data}) => {
                    dispatch({
                        type: dashboardAction.GETTER,
                        payload: data.data,
                    })
                })
                dispatch({
                    type : dashboardAction.LOADING_CREATE,
                    payload: false
                })
                dispatch({
                    type: dashboardAction.MODAL_CREATE,
                    payload: false
                })
                dispatch({ 
                    type: dashboardAction.SNACKBAR,
                    payload: {appearance : true, header : 'BERHASIL!', message : 'Berhasil membuat Pinjaman baru!'}
                })
                setTimeout(() => {
                    dispatch({ 
                        type: dashboardAction.SNACKBAR,
                        payload: {appearance : false, header : '', message : ''}
                     })
                 }, 3300)
            })
            .catch(({response}) => {
                console.log(response)
                dispatch({
                    type : dashboardAction.LOADING_CREATE,
                    payload: false
                })
                Swal.fire({
                icon: 'error',
                title: `${response.data.errors}`,
                })
            })
        }
    },

    rejectPinjaman: (payload) => {
        return(dispatch) => {
            Swal.fire({
                title: 'Yakin untuk mereject pengajuan pinjaman?',
                text: "Anda tidak akan bisa mengembalikan ini!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Tetap lakukan!',
                preConfirm: () => {
                    return axios({
                        method : 'PATCH',
                        url : `${dashboardAction.BASE_URL}api/pinjaman/reject`,
                        data : payload,
                        headers : {
                            token : localStorage.token
                        }
                    })
                    .catch(({response}) => {
                        console.log(response)
                        Swal.showValidationMessage(
                        `Gagal: ${response.data.errors}`
                        )
                    })
                },
            })
            .then((result) => {
                // console.log(result)
                if (result.value) {
                    axios({
                        method: "GET",
                        url : `${dashboardAction.BASE_URL}api/users/whitelist?type=STORE`,
                        headers : {
                            token : localStorage.token
                        }
                    })
                    .then(({data}) => {
                        // console.log(data, 'ini dari reject')
                        dispatch({
                            type: dashboardAction.GETTER,
                            payload: data.data,
                        })
                    })
                    Swal.fire({
                        icon: 'success',
                        title: `Berhasil mereject pinjaman!`,
                    })
                }
            }) 
            .catch(err => {
                console.log(err.response)
                Swal.fire({
                    icon: 'error',
                    title: `${err}`
                })
            })
        }
    },

    loadingCreate: (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.LOADING_CREATE,
                payload
            })
        }
    },

    error: (payload) => {
        return(dispatch) => {
            dispatch({
                type: dashboardAction.ERROR,
                payload: {appearance : payload.appearance, message : payload.message}
            })
        }
    },

    whiteList : (payload) => {
        return(dispatch) => {
            // console.log(payload)
            dispatch({
                type : dashboardAction.LOADING_CREATE,
                payload: true
            })
            axios({
                method : "POST",
                url : `${dashboardAction.BASE_URL}${payload.path}`,
                data : {
                    borrower_id : payload.borrower_id
                },
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                dispatch({
                    type : dashboardAction.LOADING_CREATE,
                    payload: false
                })
                if(payload.path === 'api/users/whitelist/remove') {
                    axios({
                        method: "GET",
                        url : `${dashboardAction.BASE_URL}api/users/whitelist?type=STORE`,
                        headers : {
                            token : localStorage.token
                        }
                    })
                    .then(({data}) => {
                        dispatch({
                            type: dashboardAction.GETTER,
                            payload: data.data,
                        })
                    })
                }
                else if(payload.path === 'api/users/whitelist/add') {
                    axios({
                        method: "GET",
                        url : `${dashboardAction.BASE_URL}api/users/?isLender=false&page=${payload.page}&no_whitelist=true&type=STORE`,
                        headers : {
                            token : localStorage.token
                        }
                    })
                    .then(({data}) => {
                        dispatch({
                            type: dashboardAction.GETTER,
                            payload: data.data,
                        })
                    })
                }

                dispatch({ 
                    type: dashboardAction.SNACKBAR,
                    payload: {appearance : true, header : 'BERHASIL!', message : payload.path === 'api/users/whitelist/add' ? 'Berhasil Menambah Ke Whitelist' : 'Berhasil Meremove dari Whitelist' }
                })
                setTimeout(() => {
                    dispatch({ 
                        type: dashboardAction.SNACKBAR,
                        payload: {appearance : false, header : '', message : ''}
                     })
                 }, 1500)
            })
            .catch(({response}) => {
                console.log(response.data.errors)
                dispatch({
                    type : dashboardAction.LOADING_CREATE,
                    payload: false
                })
                Swal.fire({
                    icon: 'error',
                    title: `${response.data.errors}`,
                })
            })
        }
    },

    getPengembalian: (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })
            axios({
                method: "GET",
                url : `${dashboardAction.BASE_URL}api/notif/request_pengembalian?page=${payload.page ? payload.page : '1'}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data, "PENGEMBALIAN")
                dispatch({
                    type: dashboardAction.GET_PENGEMBALIAN,
                    payload : data
                })
            })
            .catch((response) => {
                console.log(response)
                dispatch({
                    type : dashboardAction.LOADING,
                    payload : false
                })
            })
        }
    },

    getPenarikan: (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })
            axios({
                method: "GET",
                url : `${dashboardAction.BASE_URL}api/notif/riwayat_penarikan?page=${payload ? payload.page : '1'}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data, "PENARIKAN")
                dispatch({
                    type: dashboardAction.GET_PENARIKAN,
                    payload : data
                })
            })
            .catch((response) => {
                console.log(response)
                dispatch({
                    type : dashboardAction.LOADING,
                    payload : false
                })
            })
        }
    },

    searcherTransaction: (payload) => {
        return(dispatch) => {
            dispatch({
                type : dashboardAction.LOADING,
                payload : true
            })
            axios({
                method : "GET",
                url: `${dashboardAction.BASE_URL}api/notif/${payload.path}`,
                headers : {
                    token : localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data, payload.path, 'ini path')
                switch(payload.type){
                    case 'penarikan':
                        dispatch({
                            type: dashboardAction.GET_PENARIKAN,
                            payload : data
                        })
                    break;
                    case 'pengembalian' :
                        dispatch({
                            type: dashboardAction.GET_PENGEMBALIAN,
                            payload : data
                        })
                    break;
                }
            })
            .catch(({response}) => {
                console.log(response)
                dispatch({
                    type : dashboardAction.LOADING,
                    payload : false
                })
            })
        }
    },

    getDownloadData: (payload) => {
        return(dispatch) => {
            dispatch({
                type: dashboardAction.LOADING_DOWNLOAD,
                payload: true
            })
            axios({
                method: "GET",
                url : `${dashboardAction.BASE_URL}${payload.path}?page=all`,
                headers: {
                    token: localStorage.token
                }
            })
            .then(({data}) => {
                // console.log(data.data)
                dispatch({
                    type: dashboardAction.DATA_DOWNLOAD,
                    payload: data.data
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: dashboardAction.LOADING_DOWNLOAD,
                    payload: false
                })
            })
        }
    }

    // setLunas : (payload) => {
    //     return(dispatch) => {
    //         // console.log(payload)
    //         axios({
    //             method: 'PATCH',
    //             url : `${dashboardAction.BASE_URL}api/pinjaman/set_lunas`,
    //             data: payload,
    //             headers: {
    //                 token: localStorage.token
    //             }
    //         })
    //         .then(({data}) => {
    //             console.log(data)
    //             return axios({
    //                 method : 'GET',
    //                 url : `${dashboardAction.BASE_URL}api/pinjaman?lender_id=${localStorage.user_id}`,
    //                 headers: {
    //                     token: localStorage.token
    //                 }
    //             })
    //         })
    //         .then(({data}) => {
    //             console.log(data)
    //         })
    //         .catch(({response}) => {
    //             // console.log(response)
    //             console.log(response)
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: `${response.data.errors}`,
    //             })
    //         })
    //     }
    // }

    
}

export default dashboardAction