import React, { useState } from "react";
// import { dummyTable } from "util/data/reactTableData";
import ReactTable from "react-table";
import Button from "components/button/Button";
import Pagination from "components/common/Pagination";
import "react-table/react-table.css";
import { withRouter } from "react-router";
import CustomToast from "components/notifications/CustomToast";
import LoaderComponent from "components/common/LoaderComponent"
import { connect } from "react-redux";
import ReactTableWrapper from "./reacttbl.style"
// import StarRatings from 'react-star-ratings';
import DownloadDatatable from '../../components/common/Download'

import dashboardAction from "redux/Dashboard/actions";

const { getAllPinjaman, searcher, updateStatusPinjaman, setLunas } = dashboardAction

// let debounceTimer;

const initSnackBar = {
    flag: false,
    heading: '',
    description: ''
}

const PinjamanTable = props => {
    const [snackBar, setSnackBar] = useState(initSnackBar);
    // const [tblData, settblData] = useState(props.dataAllPinjaman);
    // const [loader, setLoader] = useState(false);
    const [pages, setPages] = useState(50);
    const [activePage, setActivePage] = useState(0);
    const [searchText, setSearchText] = useState(null);
    const [currentPage, setCurrentPage] = useState(1)
    // const [sortedId, setSortedId] = useState({id: null, desc: null});
    // const [changeMethodFlag, setChangeMethodFlag] = useState(false);
    const {
        sidebarTheme: { activeRouteBackColor, textColor }
    } = props;
    
    const setLunasPinjaman = (pinjaman_id) => {
        props.setLunas({ pinjaman_id : pinjaman_id })
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "NAMA PEMINJAM",
                // width: 180,
                accessor: "borrower_id.nama",
                className: "text-center",
                filterable: false,
                headerClassName: "react-table-header-class"
            },
            {
                Header: "MITRA",
                // width: 120,
                accessor: "mitra_id",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false
            },
            {
                Header: "TOTAL LIMIT",
                // width: 170,
                accessor: "jumlah_pinjaman",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false
            },
            {
                Header: "KONTRAK",
                // width: 120,
                accessor: "kontrak",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false
            },
            {
                Header: "DISCLAIMER",
                // width: 120,
                accessor: "disclaimer",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false
            },
            {
                Header: "STATUS",
                // width: 150,
                accessor: "status",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false,
                // getProps: (state, rowInfo, column) => {
                //     return {
                //         style: {
                //             color: rowInfo && rowInfo.row.status == 'pending' ? 'warning' : 'success',
                //         },
                //     };
                // },
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

                            props.value == 'lunas' ?
                            <b style={{ color: '#a55eea' }}>
                                <i className="far fa-check-square mr-1"></i>
                                LUNAS</b> : null

                            ||

                            props.value == 'rejected' ?
                            <b style={{ color: 'red' }}>
                            <i className="far fa-times-circle mr-1"></i>
                            REJECTED</b> : null
                        }
                    </div>
                )
            },
            // {
            //     Header: "AKSI",
            //     accessor: "action",
            //     className: "text-center",
            //     headerClassName: "react-table-header-class",
            //     sortable: false,
            //     filterable: false,
            //     width: 200,
            //     Cell: props => (
            //         <div className="react-action-class">
            //             {   
            //                 props.row.status == 'pending' ?
            //                 <div>
            //                     {/* <Button
            //                     className="c-btn c-success ml-10"
            //                     onClick={() => updateStatus(props.original._id, props.original.lender_id._id, 'approve')}
            //                     >
            //                         <div className="fs-12 medium-text">
            //                             <i className="far fa-check-circle mr-1"></i>
            //                             APPROVE
            //                         </div>
            //                     </Button>
            //                     <Button
            //                         className="c-btn c-danger ml-10"
            //                         onClick={() => updateStatus(props.original._id, props.original.lender_id._id, 'reject')}
            //                     >
            //                         <div className="fs-12 medium-text">
            //                             <i className="far fa-times-circle mr-1"></i>
            //                             REJECT
            //                         </div>
            //                     </Button> */}
            //                 </div>
            //                 : null
            //             }
            //             {/* {
            //                 props.row.status == 'approved' ?
            //                 <div>
            //                     <Button
            //                     className="c-btn c-success ml-10"
            //                     onClick={() => setLunasPinjaman(props.original._id)}
            //                     >
            //                         <div className="fs-12 medium-text">
            //                             <i className="far fa-check-circle mr-1"></i>
            //                             SET LUNAS
            //                         </div>
            //                     </Button>
            //                 </div> : null
            //             } */}
            //         </div>
            //     ) // Custom cell components!
            // }
        ],
        []
    );

    return (
        <ReactTableWrapper {...props}>
            <div>
                <div className="roe-card-style mtb-15">
                    <div className="roe-card-header module-header">
                        <div className="flex-1 font-weight-bold">
                            <span className="hash"># </span> DAFTAR PINJAMAN
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
                        <div className="mr-1">
                            <Button
                                className="c-btn ma-2"
                                onClick={() => props.getAllPinjaman(`api/pinjaman?lender_id=${localStorage.user_id}`)}
                                style={{
                                    backgroundColor: activeRouteBackColor,
                                    color: textColor
                                }}
                            >
                                <i className="fas fa-sync-alt"></i>
                            </Button>
                        </div>
                        <div>
                            <DownloadDatatable dataTable={props.dataAllPinjaman} type="pinjaman" />
                            {/* {
                                console.log(props.dataAllPinjaman)
                            } */}
                        </div>
                    </div>
                    <div className="roe-card-body">
                        <ReactTable
                            style={{
                                border: "none",
                                boxShadow: "none"
                            }}
                            data={props.dataAllPinjaman}
                            columns={columns}
                            defaultPageSize={10}
                            filterable
                            /* manual */
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
                            // onFetchData={onChangePageGetData}

                            // BIKININ FUNCTION LG BUAT INI BIAR KALO DI KLIK NGAMBIL PAGE SESUAI
                            onPageChange={pageIndex => setActivePage(pageIndex)}

                            // ini gapenting
                            // changeMethodFlag={changeMethodFlag}
                            // resetMethodFlag={() => setChangeMethodFlag(false)}
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
    getAllPinjaman,
    searcher,
    updateStatusPinjaman,
    setLunas
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(PinjamanTable));