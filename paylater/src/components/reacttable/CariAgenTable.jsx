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
import ModalDetail from "components/modal/ModalDetail"
// import StarRatings from 'react-star-ratings';

import dashboardAction from "redux/Dashboard/actions";

const { getter, searcher, filter, whiteList } = dashboardAction

// let debounceTimer;

const initSnackBar = {
    flag: false,
    heading: '',
    description: ''
}

const CariAgenTable = props => {
    // console.log(props.whiteList)
    const [snackBar, setSnackBar] = useState(initSnackBar);
    // const [tblData, settblData] = useState(props.agen);
    // const [loader, setLoader] = useState(false);
    const [pages, setPages] = useState(props.pageData.total_page);
    const [activePage, setActivePage] = useState(0);
    const [searchText, setSearchText] = useState(null);
    const [filter, setFilter] = useState(null);
    const [sortedId, setSortedId] = useState({id: null, desc: null});
    const [currentPage, setCurrentPage] = useState(1);
    // const [changeMethodFlag, setChangeMethodFlag] = useState(false);
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

    const closeModal  = () => {
        setModal(false)
    }

    const whiteListing = (object) => {
        props.whiteList(object)
    }

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
                // {
            {
                Header: "NAMA",
                id: "nama",
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
                Cell: props => (
                    <div className="react-action-class">
                        {
                            props.row.isCompany ? 
                            props.row.detail.nohp_bisnis : props.row.detail.no_telp
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
                            onClick={() => {toggle(props.original.detail, props.original.isCompany, props.original)}}
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
                        <Button className="c-btn c-success"  onClick={() => {whiteListing({path : 'api/users/whitelist/add', borrower_id : props.original._id, page : pageAPI})}}>
                            <i className="fas fa-heart mr-2"></i>
                            WHITELIST
                        </Button>
                        {/* {
                            console.log(props)
                        } */}
                    </div>
                ) // Custom cell components!
            }
        ],
        []
    );

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

    useEffect(() => {
        props.filter({path : 'api/users', filter})
    }, [filter])
    

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
            {/* {
                console.log(props.agen, 'ini data')
            } */}
            <div>
                <div className="roe-card-style mtb-15">
                    <div className="roe-card-header module-header">
                        <div className="flex-1 font-weight-bold">
                            <span className="hash"># </span> CARI AGEN
                        </div>
                        <div className="mr-10">
                            <select
                                onChange={event => setFilter(event.target.value)}
                                style={{ width: "100%" }}
                                className="fs-14 medium-text plr-10 form-control react-form-input"
                                >
                                <option value="" >Filter</option>
                                <option value="true">Company</option>
                                <option value="false">Non-Company</option>
                               
                            </select>
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
                            // manualPagination={true}
                            onFetchData={onChangePageGetData}

                            // BIKININ FUNCTION LG BUAT INI BIAR KALO DI KLIK NGAMBIL PAGE SESUAI
                            onPageChange={pageIndex => setActivePage(pageIndex)}

                            // ini gapenting
                            // changeMethodFlag={changeMethodFlag}
                            // resetMethodFlag={() => setChangeMethodFlag(false)}
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
                modal ? 
                <ModalDetail modal={modal} toggle={toggle} isCompany={isCompany} allData={allData}  closeModal={closeModal} detail={dataDetail} /> : ''
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
    filter,
    whiteList
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CariAgenTable));