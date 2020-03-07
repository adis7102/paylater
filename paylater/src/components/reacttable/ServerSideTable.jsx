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
import ModalDetail from "components/modal/ModalDetail"

const { getter, searcher, whiteList } = dashboardAction

let debounceTimer;

const initSnackBar = {
    flag: false,
    heading: '',
    description: ''
}

const ServerSideTable = props => {
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

    const {
        sidebarTheme: { activeRouteBackColor, textColor }
    } = props;

    const [modal, setModal] = useState(false);
    const [ dataDetail, setDataDetail ] = useState(null)
    const [ isCompany, setIsCompany ] = useState(false)
    const [ allData, setAllData ] = useState(null)
    const toggle = (dataDetail, isCompany, allData) => {
        setModal(!modal)
        setDataDetail(dataDetail)
        setIsCompany(isCompany)
        setAllData(allData)
    };

    const closeModal  = () =>{
        setModal(false)
    }

    const whiteListing = (object) => {
        props.whiteList(object)
    }


    const columns = React.useMemo(
        () => [
            {
                Header: "NAMA",
                accessor: "nama",
                className: "text-center",
                width: 180,
                filterable: false,
                sortable: false,
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
                            props.row.detail.NPWP : props.row.detail.no_identitas
                        }
                    </div>
                )
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
                // Cell: props => (
                //     <div className="react-action-class">
                //         {
                //             props.row.isCompany ? 
                //             props.row.detail.nohp_bisnis : props.row.detail.no_telp
                //         }
                //     </div>
                // )
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
                width: 180,
                Cell: props => (
                    <div className="react-action-class">
                        <Button className="c-btn c-success" onClick={() => {whiteListing({path : 'api/users/whitelist/add', borrower_id : props.original._id, page : pageAPI})}}>
                            <i className="fas fa-heart mr-2"></i>
                            WHITELIST
                        </Button>
                    </div>
                ) // Custom cell components!
            }
        ],
        []
    );

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
                props.searcher(`api/users/?isLender=false&no_whitelist=true&nama=${searchText}&type=STORE`)
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
        setPageAPI(params)
    }, []);

    const callListApi = (params) => {
        // console.log('params', params)
        // alert("when component mount call api and get first 10 record");
        // When you get data from api add data to state using this method settblData(data)
        // when you call api set loader of table using setLoader(true)
        // when you call api set number of pages using setPages(count)

        props.getter(`api/users/?isLender=false&page=${params.page}&no_whitelist=true&type=STORE`)

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
                            <span className="hash"># </span> DAFTAR AGEN BARU
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
                                onClick={() => props.getter(`api/users/?isLender=false&page=${currentPage}&no_whitelist=true&type=STORE`)}
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
                            data={props.agen}
                            columns={columns}
                            defaultPageSize={5}
                            filterable
                            // manual
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
                            totalPage={2}
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
                modal ? 
                <ModalDetail modal={modal} toggle={toggle} isCompany={isCompany} closeModal={closeModal} detail={dataDetail} allData={allData} /> : ''
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
    whiteList
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ServerSideTable));
