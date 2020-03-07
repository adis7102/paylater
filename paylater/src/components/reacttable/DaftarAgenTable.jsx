import React, { useState, useEffect, useCallback } from "react";
// import { dummyTable } from "util/data/reactTableData";
import ReactTable from "react-table";
import Button from "components/button/Button";
// import RoyTooltip from "components/common/RoyTooltip";
import Pagination from "components/common/Pagination";
import "react-table/react-table.css";
import { withRouter } from "react-router";
import CustomToast from "components/notifications/CustomToast";
import LoaderLinear from "components/common/LoaderComponent"
import { connect } from "react-redux";
import ReactTableWrapper from "./reacttbl.style"
// import StarRatings from 'react-star-ratings';
import ModalDetail from "components/modal/ModalDetail"
import ModalCreatePinjaman from "components/modal/ModalCreatePinjaman"
import ModalReject from "components/modal/ModalReject"
import dashboardAction from "redux/Dashboard/actions";
import ModalDownload from 'components/modal/ModalDownload.jsx'

const { getter, searcher, modalCreate, snackBar, loadingCreate, whiteList, pinjamanGetter, rejectPinjaman } = dashboardAction

let debounceTimer;

const initSnackBar = {
    flag: false,
    heading: '',
    description: ''
}

const DaftarAgenTable = props => {
    const [snackBar, setSnackBar] = useState(initSnackBar);
    // const [tblData, settblData] = useState(dummyTable);
    // const [loader, setLoader] = useState(false);
    const [pages, setPages] = useState(50);
    const [activePage, setActivePage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState(null);
    const [sortedId, setSortedId] = useState({id: null, desc: null});
    // const [changeMethodFlag, setChangeMethodFlag] = useState(false);
    const {
        sidebarTheme: { activeRouteBackColor, textColor }
    } = props;
    const [modal, setModal] = useState(false);
    const [ dataDetail, setDataDetail ] = useState(null)
    const [ isCompany, setIsCompany ] = useState(false)
    const [ allData, setAllData ] = useState(null)
    const [ modalDownload, setModalDownload ] = useState(false)
    const [ modalReject, setModalReject ] = useState(false)
    const [ rejectedUserData, setRejectedUserData ] = useState({pinjaman_id : '', borrower_id : ''})

    const toggleModalReject = (pinjamanId, borrowerId) => {
        setModalReject(!modalReject)
        setRejectedUserData({
            pinjaman_id: pinjamanId,
            borrower_id: borrowerId
        })
    }

    const closeModalReject = () => {
        setModalReject(false)
    }

    const toggleModalDownload = () => {
        setModalDownload(!modalDownload)
    }

    const closeModalDownload = () => {
        setModalDownload(false)
    }

    const toggle = (dataDetail, isCompany, allData) => {
        setModal(!modal)
        setDataDetail(dataDetail)
        setIsCompany(isCompany)
        setAllData(allData)
    };

    const closeModal  = () => {
        setModal(false)
        // setDataCreate(null)
    }

    const openModalCreate = (id) => {
        props.modalCreate(true)
        // setDataCreate(dataCreate)
        props.pinjamanGetter(id)
        localStorage.setItem("borrower_id", id)
        // console.log(id)
    };

    const closeModalCreate  = () => {
        props.modalCreate(false)
        props.loadingCreate(false)
        localStorage.removeItem("borrower_id")
    }

    const whiteListing = (object) => {
        props.whiteList(object)
    }

    // const rejectPinjaman = () => {
    //     let data = {
    //         pinjaman_id : pinjamanId,
    //         borrower_id : borrowerId
    //     }
    //     props.rejectPinjaman(data)
    // }

    const columns = React.useMemo(
        () => [
            // {
            //     Header: "RATING",
            //     accessor: "rating",
            //     className: "text-center",
            //     filterable: false,
            //     headerClassName: "react-table-header-class",
            //     sortable: false,
            //     width: 180,
            //     Cell: props => (
            //       <div className="react-action-class">
            //         <StarRatings
            //             rating={3}
            //             starDimension="20px"
            //             starSpacing="2px"
            //         />
            //       </div>
            //     ) // Custom cell components!
            // },
            {
                Header: "NAMA",
                accessor: "nama",
                className: "text-center",
                filterable: false,
                sortable: false,
                width: 200,
                headerClassName: "react-table-header-class"
            },
            {
                Header: "TYPE USER",
                accessor: "type",
                className: "text-center",
                filterable: false,
                sortable: false,
                width: 150,
                headerClassName: "react-table-header-class",
                Cell: props => (
                    <div className="react-action-class">
                        {
                            props.row.type ? 
                            props.row.type : "STORE"
                        }
                    </div>
                )
            },
            {
                Header: "NOMOR IDENTITAS / NPWP",
                accessor: "detail",
                className: "text-center",
                filterable: false,
                sortable: false,
                width: 230,
                headerClassName: "react-table-header-class",
                Cell: props => (
                    <div className="react-action-class">
                        {
                            props.row.isCompany ? 
                            `${props.row.detail.NPWP || '-'}` : `${props.row.detail.no_identitas || '-'}`
                        }
                        {/* {
                            console.log(props.original.detail.no_identitas)
                        } */}
                    </div>
                )
            },
            {
                Header: "LIMIT SALDO",
                accessor: "limit_saldo",
                className: "text-center",
                filterable: false,
                sortable: false,
                width: 200,
                headerClassName: "react-table-header-class"
            },
            {
                Header: "ALAMAT",
                accessor: "alamat",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false,
                width: 180,
                sortable: false
            },
            {
                Header: "NOMOR TELEPON",
                accessor: "detail",
                className: "text-center",
                filterable: false,
                sortable: false,
                width: 180,
                headerClassName: "react-table-header-class",
                Cell: props => (
                    <div className="react-action-class">
                        {
                            props.row.isCompany ? 
                            `${props.row.detail.nohp_bisnis || '-'}` : `${props.row.detail.no_telp || '-'}`
                        }
                    </div>
                )
            },
            {
                Header: "DETAIL",
                accessor: "detail",
                className: "text-center",
                headerClassName: "react-table-header-class",
                sortable: false,
                filterable: false,
                width: 180,
                Cell: props => (
                    <div className="react-action-class">
                        <Button
                            className="c-btn c-info"
                            // onClick={() => formAction("edit", props.original)}
                            onClick={() => toggle(props.original.detail, props.original.isCompany, props.original)}
                        >
                            <div className="fs-16 medium-text">
                                <i className="fas fa-info-circle mr-2" />
                                DETAIL
                            </div>
                        </Button>
                    </div>
                ) // Custom cell components!
            },
            {
                Header: "AKSI",
                accessor: "action",
                className: "text-center",
                headerClassName: "react-table-header-class",
                sortable: false,
                filterable: false,
                width: 400,
                Cell: props => (
                    <div className="react-action-class">
                        {   
                            (!props.original.pinjaman) ? 
                            null : 
                            props.original.pinjaman.length > 0 ? 
                            <Button
                            className="c-btn c-success ml-10"
                            onClick={() => openModalCreate(props.original._id)}
                            >
                                <div className="fs-12 medium-text">
                                    <i className="far fa-hand-point-down mr-2" />
                                    INVEST
                                </div>
                            </Button> : null
                        }

                        {   
                            (!props.original.pinjaman) ? 
                            null : 
                            props.original.pinjaman.length > 0 ?
                            <Button
                            className="c-btn c-danger ml-10"
                            onClick={() => {
                                toggleModalReject(props.original.pinjaman[0]._id , props.original._id)
                            }}
                            >
                                <div className="fs-12 medium-text">
                                    <i className="fas fa-times-circle mr-2"></i>
                                    REJECT
                                </div>
                            </Button> : null
                        }                        
                        <Button className="c-btn c-secondary ml-10" onClick={() => {whiteListing({path : 'api/users/whitelist/remove', borrower_id : props.original._id})}}>
                            <i className="fas fa-heart mr-2" style={{color : '#eb3f77'}}></i>
                            UNWHITELIST
                        </Button>
                        {/* <Button
                            className="c-btn c-dark ml-10"
                            // onClick={() => }
                        >
                            <div className="fs-12 medium-text">
                                <i className="fas fa-ban mr-1" />
                                BLACKLIST
                            </div>
                        </Button> */}
                    </div>
                ) // Custom cell components!
            }
        ],
        []
    );

    // const callSearchApi = useCallback(() => {
        
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
    //     settblData(dummyTable);
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

    useEffect(() => {
        // search(searchText)
        const timeout = setTimeout(() => {
            if (searchText !== null) {
                props.searcher(`api/users/whitelist?nama=${searchText}&type=STORE`)
            }
        }, 800)
        
            // if this effect run again, because `value` changed, we remove the previous timeout
            return () => clearTimeout(timeout)
    }, [searchText])

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
    }, []);

    const callListApi = (params) => {
        // console.log('params', params)
        // alert("when component mount call api and get first 10 record");
        // When you get data from api add data to state using this method settblData(data)
        // when you call api set loader of table using setLoader(true)
        // when you call api set number of pages using setPages(count)

        props.getter(`api/users/whitelist?page=${params.page}&type=STORE`)

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
                            <span className="hash"># </span> DAFTAR AGEN
                        </div>
                        <div className="mr-10">
                            <input
                                value={searchText ? searchText : ""}
                                onChange={e => setSearchText(e.target.value)}
                                type="text"
                                placeholder="Search..."
                                className="fs-14 medium-text plr-10 form-control react-form-input"
                            />
                        </div>
                        <div>
                            <Button
                                className="c-btn ma-2"
                                onClick={() => props.getter(`api/users/whitelist?type=STORE`)}
                                style={{
                                    backgroundColor: activeRouteBackColor,
                                    color: textColor
                                }}
                            >
                                <i className="fas fa-sync-alt"></i>
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="c-btn c-warning ma-2"
                                onClick={() => {toggleModalDownload()}}
                                style={{
                                    backgroundColor: activeRouteBackColor,
                                    color: textColor
                                }}
                            >
                                Download
                            </Button>
                        </div>
                    </div>
                    <div className="roe-card-body">
                        <ReactTable
                            style={{
                                border: "none",
                                boxShadow: "none"
                            }}
                            data={props.agen}
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
                            LoadingComponent={LoaderLinear}
                            loading={props.loadingTable}
                            onFetchData={onChangePageGetData}

                            // BIKININ FUNCTION LG BUAT INI BIAR KALO DI KLIK NGAMBIL PAGE SESUAI
                            onPageChange={pageIndex => setActivePage(pageIndex)}

                            // ini gapenting
                            // changeMethodFlag={changeMethodFlag}
                            // resetMethodFlag={() => setChangeMethodFlag(false)}
                            onPage="DaftarAgen"
                            totalPage={props.pageData.total_page}
                        />
                    </div>
                    {
                        props.modalCreate ? 
                        <ModalCreatePinjaman openModal={openModalCreate} closeModal={closeModalCreate} /> : null
                    }

                    <ModalReject modalReject={modalReject} closeModalReject={closeModalReject} rejectedUserData={rejectedUserData} />

                    <ModalDownload modalDownload={modalDownload} closeModalDownload={closeModalDownload} path="api/users/whitelist?type=STORE" type="daftar agen" />

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
            </div>

            {
                modal ? 
                <ModalDetail modal={modal} toggle={toggle} isCompany={isCompany} allData={allData} closeModal={closeModal} detail={dataDetail} /> : ''
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
    getter,
    searcher,
    modalCreate, 
    snackBar, 
    loadingCreate,
    whiteList,
    pinjamanGetter,
    rejectPinjaman
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(DaftarAgenTable));