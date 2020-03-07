import dashboardAction from './actions'

const initState = {
    snackbar: {
        appearance : false,
        header: '',
        message : ''
    },
    loadingTable: false,
    loadingRegister : false,
    loadingTopup : false,
    loadingChangePassword: false,
    successChangePassword: false,
    successRegistering : false,
    loadingCreate: false,
    modalCreate: false,
    modalPembayaranAppearance : {
        appearance: false,
        metodePembayaran: '',
        nominal: ''
    },
    errorCreate: {
        appearance : false,
        message : ''
    },
    agen: [],
    dataAllPinjaman: [],
    historyTopUp: [],
    pageData : {},
    oneData : {},
    pinjamanData : {},
    pengembalian: [],
    penarikan: [],
    dataDownload: [],
    loadingDownload: false
}

export default function rootReducer(state = initState, action) {

    switch(action.type){
        case dashboardAction.LOADING:
            return {
                ...state,
                loadingTable: action.payload
            }
        case dashboardAction.LOADING_REGISTER:
            return {
                ...state,
                loadingRegister: action.payload
            }   
        case dashboardAction.LOADING_CHANGE_PASSWORD:
            return {
                ...state,
                loadingChangePassword: action.payload
            }
        case dashboardAction.SUCCESS_REGISTER:
            return {
                ...state,
                successRegistering: action.payload
            }   
        case dashboardAction.SUCCESS_CHANGE_PASSWORD:
            return {
                ...state,
                successChangePassword: action.payload
            } 
        case dashboardAction.GETTER:
            return {
                ...state,
                agen: action.payload,
                loadingTable: false
            }
        case dashboardAction.SNACKBAR:
            return {
                ...state,
                snackbar: action.payload
            }
        case dashboardAction.SELECT_GETTER:
            return {
                ...state,
                borrower: action.payload
            }
        case dashboardAction.LOADING_CREATE:
            return {
                ...state,
                loadingCreate: action.payload
            }
        case dashboardAction.LOADING_TOPUP:
            return {
                ...state,
                loadingTopup: action.payload
            }
        case dashboardAction.MODAL_CREATE:
            return {
                ...state,
                modalCreate: action.payload
            }
        case dashboardAction.MODAL_PEMBAYARAN:
            return {
                ...state,
                modalPembayaranAppearance: action.payload
            }
        case dashboardAction.ERROR:
            return {
                ...state,
                errorCreate: action.payload
            }
        case dashboardAction.PAGE_DATA: 
            return {
                ...state,
                pageData: action.payload
            }
        case dashboardAction.ONE_DATA:
            return  {
                ...state,
                oneData: action.payload
            }
        case dashboardAction.PINJAMAN_DATA:
            return {
                ...state,
                pinjamanData: action.payload
            }
        case dashboardAction.GET_ALL_PINJAMAN:
            return {
                ...state,
                dataAllPinjaman : action.payload,
                loadingTable: false
            }
        case dashboardAction.GET_TOPUP_HISTORY:
            return {
                ...state,
                historyTopUp: action.payload,
                loadingTable: false
            }
        case dashboardAction.GET_PENGEMBALIAN:
            return {
                ...state,
                pengembalian: action.payload,
                loadingTable: false
            }
        case dashboardAction.GET_PENARIKAN:
            return {
                ...state,
                penarikan: action.payload,
                loadingTable: false
            }
        case dashboardAction.DATA_DOWNLOAD:
            return {
                ...state,
                dataDownload: action.payload,
                loadingDownload: false,
            }
        case dashboardAction.LOADING_DOWNLOAD:
            return {
                ...state,
                loadingDownload: action.payload
            }
        default :
            return state
    }

}