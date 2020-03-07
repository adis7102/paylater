import React, { useState, useEffect, useCallback } from "react";
// import { dummyTable } from "util/data/reactTableData";
import ReactTable from "react-table";
import Button from "components/button/Button";
// import RoyTooltip from "components/common/RoyTooltip";
import Pagination from "components/common/Pagination";
import "react-table/react-table.css";
import { withRouter } from "react-router";
import CustomToast from "components/notifications/CustomToast";
import LoaderComponent from "components/common/LoaderComponent"
import { connect } from "react-redux";
import ReactTableWrapper from "./reacttbl.style"
// import StarRatings from 'react-star-ratings';
import dashboardAction from "redux/Dashboard/actions";
import ModalHistoryPembayaran from "components/modal/ModalHistoryPembayaran"
import currencyFormatter from 'currency-formatter';
import moment, { now } from 'moment'
import 'moment/locale/id'

const { filterHistory, modalPembayaran, getHistoryTopup} = dashboardAction

// let debounceTimer;

const initSnackBar = {
    flag: false,
    heading: '',
    description: ''
}

const HistoryPaymentTable = props => {
    const [snackBar, setSnackBar] = useState(initSnackBar);
    const [tblData, settblData] = useState(props.agen);
    const [loader, setLoader] = useState(false);
    const [pages, setPages] = useState(50);
    const [activePage, setActivePage] = useState(0);
    const [searchText, setSearchText] = useState(null);
    const [sortedId, setSortedId] = useState({id: null, desc: null});
    const [changeMethodFlag, setChangeMethodFlag] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [ pageAPI, setPageAPI ] = useState(1)
    const [ filterType, setFilterType ] = useState(null)
    const [filterStatus, setFilterStatus] = useState(null);

    const {
        sidebarTheme: { activeRouteBackColor, textColor }
    } = props;

    // const [modal, setModal] = useState(false);
    // const toggle = () => {
    //     modalPembayaran(true)
    // };

    const closeModal  = () =>{
        props.modalPembayaran({
            appearance: false, 
            metodePembayaran: '',
            nominal: ''
        })
    }

    const pembayaran = (object) => {
        props.modalPembayaran(object)
    }

    function dateMaker(date){
        moment.locale('id');
        return moment(date).format('Do MMM YYYY, h:mm:ss a');
    }

    const handleFilter = (selectedType, selectedStatus) => {
        // props.filterHistory({
        //     type : 'history',
        //     query : selectedStatus
        // })
        // console.log(selectedType, selectedStatus)
        if((selectedType) && (!selectedStatus)){
            props.filterHistory({
                query : `type=${selectedType}`
            })
            return;
        }
        else if((!selectedType) && (selectedStatus)){
            props.filterHistory({
                type : 'history',
                query : `status=${selectedStatus}`
            })
            return;
        }
        else if((selectedType) && (selectedStatus)){
            props.filterHistory({
                type : 'history',
                query : `type=${selectedType}&status=${selectedStatus}`
            })
            return;
        }
        else if((!selectedType) && (!selectedStatus)){
            props.getHistoryTopup(`page=1`)
            return;
        }
        
    }

    useEffect(() => {
        handleFilter(filterType, filterStatus)
    }, [filterType, filterStatus])

    const columns = React.useMemo(
        () => [
            {
                Header: "TYPE",
                accessor: "type",
                className: "text-center",
                filterable: false,
                sortable: false,
                // width: 150,
                headerClassName: "react-table-header-class",
            },
            {
                Header: "STATUS",
                accessor: "status",
                className: "text-center",
                // width: 180,
                filterable: false,
                sortable: false,
                headerClassName: "react-table-header-class",
                Cell: props => (
                    <div className="react-action-class">
                        {
                            props.value == 'pending' ?
                            <b style={{ color: 'blue' }}><i className="far fa-clock"></i> PENDING</b> : null 
                            
                            || 
                            
                            props.value == 'approved' ?
                            <b style={{ color: 'green' }}>
                                <i className="far fa-thumbs-up mr-1"></i>
                                APPROVED</b> : null

                            ||

                            props.value == 'rejected' ?
                            <b style={{ color: 'red' }}>
                            <i className="far fa-times-circle mr-1"></i>
                            REJECTED</b> : null
                        }
                    </div>
                )
            },
            {
                Header: "NOMINAL",
                accessor: "amount",
                className: "text-center",
                filterable: false,
                sortable: false,
                // width: 150,
                headerClassName: "react-table-header-class",
                Cell: props => (
                    <div className="react-action-class">
                        {
                            currencyFormatter.format(props.original.amount, { code: 'IDR' })
                        }
                    </div>
                )
            },
            {
                Header: "DATE",
                accessor: "amount",
                className: "text-center",
                filterable: false,
                sortable: false,
                // width: 150,
                headerClassName: "react-table-header-class",
                Cell: props => (
                    <div className="react-action-class">
                        {
                            dateMaker(props.original.createdAt)
                        }
                    </div>
                )
            },
            {
                Header: "AKSI",
                accessor: "action",
                className: "text-center",
                headerClassName: "react-table-header-class",
                sortable: false,
                filterable: false,
                // width: 150,
                Cell: props => (
                    <div className="react-action-class">
                        {
                            props.original.status === "pending" && props.original.type === 'topup' ? 
                            <Button className="c-btn c-success" onClick={() => {
                                pembayaran({
                                    appearance: true,
                                    metodePembayaran: 'Transfer Bank',
                                    nominal: props.original.amount
                                }) 
                            }}>
                               <i className="fas fa-comments-dollar mr-2"></i>
                                PEMBAYARAN
                            </Button> : null
                        }
                    </div>
                ) // Custom cell components!
            }
        ],
        []
    );

    // const callSearchApi = useCallback(() => {
    //     setChangeMethodFlag((changeMethodFlag) => true)
    // }, []);

    // useEffect(() => {
    //     if (searchText !== null) {
    //         if (debounceTimer) {
    //             clearTimeout(debounceTimer);
    //             debounceTimer = null;
    //         }
    //         debounceTimer = setTimeout(callSearchApi, 500);
    //     }
    // }, [searchText, callSearchApi]);

    // useEffect(() => {
    //     setLoader(props.loading)
    //     console.log(props.loading, 'ini loading mtf')
    // }, [props.loading])

    // useEffect(() => {
    //     const params = {
    //         page: 1,
    //         sorted: {
    //             id: null,
    //             desc: null 
    //         },
    //         searchText: ""
    //     }
    //     callListApi(params)
    // }, []);

    // const callListApi = (params) => {
    //     console.log('params', params)
    //     // alert("when component mount call api and get first 10 record");
    //     // When you get data from api add data to state using this method settblData(data)
    //     // when you call api set loader of table using setLoader(true)
    //     // when you call api set number of pages using setPages(count)
    //     settblData(props.agen);
    //     setLoader(true);
    //     setTimeout(() => {
    //         setLoader(false);
    //     }, 1000);
    //     setPages(50);
    // }

    // const onChangePageGetData = state => {
    //     if(activePage !== null) {
    //         const sorted = state.sorted
    //         if(sorted.length > 0) {
    //             setSortedId({
    //                 id: sorted[0].id,
    //                 desc: sorted[0].desc
    //             }) 
    //         }
    //         if (state.page !== activePage || searchText !== null || (sorted.length > 0 && (sorted[0].id !== sortedId.id || sorted[0].desc !== sortedId.desc))) {
    //             const params = {
    //                 page: state.page + 1,
    //                 sorted: {
    //                     id: sorted.length > 0 ? sorted[0].id : null,
    //                     desc: sorted.length > 0 ? sorted[0].desc : null 
    //                 },
    //                 searchText: searchText
    //             }
    
    //             // callListApi(params)
    //             setSnackBar({
    //                 flag: true,
    //                 heading: 'Call User List API with filters',
    //                 description: `page: ${params.page},  sorted: ${params.sorted.id},  searchText: ${searchText}`
    //             })
    //         }
    //     }
    // };

    const deleteClick = data => {
        // Here you can view the data and delete through API calling
        setSnackBar({
            flag: true,
            heading: 'Delete Handler',
            description: `you have to call api and Delete data, Your id is: ${data.id}`
        })
    };

    const formAction = (action, data = null) => {
        // Here you can view the data and make forward action for edit data
        if (action === "add") {
            setSnackBar({
                flag: true,
                heading: 'Add Action',
                description: `you have to call your form for adding user`
            })
        } else if (action === "edit") {
            setSnackBar({
                flag: true,
                heading: 'Edit Action',
                description: `you have to call your form for Edit user, Your id is: ${data.id}`
            })
        }
    };

    const activeInactiveStatusHandler = data => {
        setSnackBar({
            flag: true,
            heading: 'Status Change Action',
            description: `you have to call api to change status, Your id is: ${data.id}`
        })
    };

    // useEffect(() => {
    //     // search(searchText)
    //     const timeout = setTimeout(() => {
    //         props.filterHistory(searchText)
    //         }, 800)
        
    //         // if this effect run again, because `value` changed, we remove the previous timeout
    //         return () => clearTimeout(timeout)
    // }, [searchText])

    useEffect(() => {
        const params = {
            page: 1,
            sorted: {
                id: null,
                desc: null 
            },
            searchText: ""
        }
        callListApi(params)
        setPageAPI(params)
    }, []);

    const callListApi = (params) => {
        // console.log('params', params)
        // alert("when component mount call api and get first 10 record");
        // When you get data from api add data to state using this method settblData(data)
        // when you call api set loader of table using setLoader(true)
        // when you call api set number of pages using setPages(count)

        // props.getter(`api/users/?isLender=false&page=${params.page}&no_whitelist=true`)
        props.getHistoryTopup(`page=${params.page}`)

        // settblData();
        // setLoader(true);
        // setTimeout(() => {
        //     setLoader(false);
        // }, 1000);
        // setPages(50);
    }

    const onChangePageGetData = state => {
        if(activePage !== null) {
            const sorted = state.sorted
            if(sorted.length > 0) {
                setSortedId({
                    id: sorted[0].id,
                    desc: sorted[0].desc
                }) 
            }
            if (state.page !== activePage || searchText !== null || (sorted.length > 0 && (sorted[0].id !== sortedId.id || sorted[0].desc !== sortedId.desc))) {
                const params = {
                    page: state.page + 1,
                    sorted: {
                        id: sorted.length > 0 ? sorted[0].id : null,
                        desc: sorted.length > 0 ? sorted[0].desc : null 
                    },
                    searchText: searchText
                }
                setCurrentPage(params.page)
                callListApi(params)
            }
        }
    };
    

    return (
        <ReactTableWrapper {...props}>
            <div>
                <div className="roe-card-style mtb-15">
                    <div className="roe-card-header module-header">
                        <div className="flex-1 font-weight-bold">
                            <span className="hash"># </span> HISTORY PAYMENT
                        </div>
                        {/* <div className="mr-10">
                            <input
                                value={searchText ? searchText : ""}
                                onChange={e => setSearchText(e.target.value)}
                                type="text"
                                placeholder="Search..."
                                className="fs-14 medium-text plr-10 form-control react-form-input"
                            />
                        </div> */}
                        <div className="mr-10">
                            <select
                                onChange={(event) => setFilterType(event.target.value)}
                                style={{ width: "100%" }}
                                className="fs-14 medium-text plr-10 form-control react-form-input"
                                >
                                <option value="" >Type</option>
                                <option value="topup">Topup</option>
                                <option value="withdraw">Cashout</option>
                               
                             </select>
                        </div>
                        <div className="mr-10">
                            <select
                                onChange={(event) => setFilterStatus(event.target.value)}
                                style={{ width: "100%" }}
                                className="fs-14 medium-text plr-10 form-control react-form-input"
                                >
                                <option value="" >Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                               
                             </select>
                        </div>
                        <div>
                            <Button
                                className="c-btn ma-2"
                                onClick={() => {
                                    props.getHistoryTopup(`page=1`)
                                }}
                                style={{
                                    backgroundColor: activeRouteBackColor,
                                    color: textColor
                                }}
                            >
                                <i className="fas fa-sync-alt"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="roe-card-body">
                        <ReactTable
                            style={{
                                border: "none",
                                boxShadow: "none"
                            }}
                            data={props.historyTopUp}
                            columns={columns}
                            defaultPageSize={10}
                            filterable
                            manual
                            defaultFilterMethod={(filter, row) => {
                                const id = filter.pivotId || filter.id;
                                return row[id] !== undefined
                                    ? String(row[id].toLowerCase()).includes(
                                        filter.value.toLowerCase()
                                    )
                                    : true;
                            }}
                            className="-striped -highlight custom-react-table-theme-class"
                            pages={pages}
                            page={activePage}
                            PaginationComponent={Pagination}
                            LoadingComponent={LoaderComponent}
                            loading={props.loadingTable}
                            onFetchData={onChangePageGetData}
                            onPageChange={pageIndex => setActivePage(pageIndex)}
                            // changeMethodFlag={changeMethodFlag}
                            // resetMethodFlag={() => setChangeMethodFlag(false)}
                            onPage="CariAgen"
                            totalPage={props.pageData.total_page}
                        />
                    </div>
                    <CustomToast
                        heading={snackBar.heading}
                        width={400}
                        show={snackBar.flag}
                        transition
                        position="top-middle"
                        className="c-success"
                        message={snackBar.description}
                        onCloseCLick={() =>
                            setSnackBar(initSnackBar)
                        }
                    />
                </div>
            </div>

            {
                props.modalPembayaranAppearance.appearance ? 
                <ModalHistoryPembayaran modal={props.modalPembayaranAppearance.appearance} closeModal={closeModal} /> : ''
            }
        </ReactTableWrapper>
    );
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger,
        ...state.Dashboard
    };
};

const mapDispatchToProps = {
    filterHistory,
    modalPembayaran,
    getHistoryTopup
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HistoryPaymentTable));
