import React, { useState, useEffect } from "react";
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
import moment from 'moment'
import 'moment/locale/id'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import currencyFormatter from 'currency-formatter';
import ModalDownload from 'components/modal/ModalDownload.jsx'

import dashboardAction from "redux/Dashboard/actions";

const { getAllPinjaman, searcher, updateStatusPinjaman, getPengembalian, searcherTransaction, getDownloadData } = dashboardAction

// let debounceTimer;

const initSnackBar = {
    flag: false,
    heading: '',
    description: ''
}

const TransactionPengembalianTable = props => {
    const [snackBar, setSnackBar] = useState(initSnackBar);
    const [pages, setPages] = useState(50);
    const [activePage, setActivePage] = useState(0);
    const [searchText, setSearchText] = useState(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [sortedId, setSortedId] = useState({id: null, desc: null});
    const [ tanggalAwal, setTanggalAwal ] = useState({date : new Date(), changed : false})
    const [ tanggalAkhir, setTanggalAkhir ] = useState({date : new Date(), changed : false})
    const {
        sidebarTheme: { activeRouteBackColor, textColor }
    } = props;

    const [ modalDownload, setModalDownload ] = useState(false)
    const toggle = () => {
        setModalDownload(!modalDownload)
    }

    const closeModalDownload = () => {
        setModalDownload(false)
    }
    

    function dateMaker(date){
        moment.locale('id');
        return moment(date).format('Do MMM YYYY, h:mm:ss a');
    }

    const handleTanggalAwal = (date) => {
        setTanggalAwal({date : date, changed : true})
    };

    const handleTanggalAkhir = (date) => {
        setTanggalAkhir({date : date, changed : true});
    }

    const searchByDate = (startDate, endDate) => {
        props.searcherTransaction({type : 'pengembalian', path : `request_pengembalian?start_date=${startDate}&end_date=${endDate}`})   
    }

    useEffect(() => {
        if(tanggalAwal.changed === true || tanggalAkhir.changed === true){
            searchByDate(moment(tanggalAwal).format('YYYY-MM-DD[T00:00:00.000Z]'), moment(tanggalAkhir).format('YYYY-MM-DD[T23:59:00.000Z]'))
        }
    }, [tanggalAwal, tanggalAkhir])

    useEffect(() => {
        props.getPengembalian({ page : '1' })
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: "NAMA",
                // width: 180,
                accessor: "borrower.nama",
                className: "text-center",
                filterable: false,
                headerClassName: "react-table-header-class"
            },
            {
                Header: "NOMINAL",
                // width: 120,
                accessor: "jumlah_pembayaran",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false,
                Cell: props => (
                    <div className="react-action-class">
                        {
                            currencyFormatter.format(props.original.jumlah_pembayaran, { code: 'IDR' })
                        }
                    </div>
                )
            },
            {
                Header: "ADMIN FEE",
                // width: 120,
                accessor: "jumlah_dana_kembali",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false,
                Cell: props => (
                    <div className="react-action-class">
                        {   
                            currencyFormatter.format(props.original.jumlah_pembayaran - props.original.jumlah_dana_kembali, { code: 'IDR' })
                        }
                    </div>
                )
            },
            {
                Header: "AKSI",
                // width: 170,
                accessor: "original",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false,
                Cell: props => (
                    <div className="react-action-class">
                        PENGEMBALIAN
                    </div>
                )
            },
            {
                Header: "DATE",
                width: 270,
                accessor: "jumlah_pinjaman",
                className: "text-center",
                headerClassName: "react-table-header-class",
                filterable: false,
                Cell: props => (
                    <div className="react-action-class">
                        {
                            dateMaker(props.original.createdAt)
                        }
                    </div>
                ) 
            },
        ],
        []
    );

    useEffect(() => {
        // search(searchText)
        const timeout = setTimeout(() => {
            if (searchText !== null) {
                props.searcherTransaction({type : 'pengembalian', path : `request_pengembalian?borrower_name=${searchText}`})
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
        // alert("when component mount call api and get first 10 record");
        // When you get data from api add data to state using this method settblData(data)
        // when you call api set loader of table using setLoader(true)
        // when you call api set number of pages using setPages(count)

        props.getPengembalian({ page: params.page })
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
                            <span className="hash"># </span> PENGEMBALIAN
                        </div>
                        <div className="d-flex flex-row align-items-center mr-2">
                            <DatePicker
                                selected={tanggalAwal.date}
                                className="custom-datepicker"
                                onChange={handleTanggalAwal}
                                className="medium-text form-control react-form-input"
                                required
                            />
                            <div className="fs-14 mr-1 ml-1 pa-0">
                                s/d
                            </div>
                            <DatePicker
                                selected={tanggalAkhir.date}
                                className="custom-datepicker"
                                onChange={handleTanggalAkhir}
                                className="medium-text form-control react-form-input"
                                required
                            />
                        </div>
                        <div className="mt-10 mb-10 mr-1">
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
                                onClick={() => props.getPengembalian({ page: '1' })}
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
                                onClick={() => {toggle()}}
                                style={{
                                    backgroundColor: activeRouteBackColor,
                                    color: textColor
                                }}
                            >
                                Download
                            </Button>
                            {/* <DownloadDatatable dataTable={props.pengembalian} type="pengembalian" /> */}
                        </div>
                    </div>
                    <div className="roe-card-body">
                        <ReactTable
                            style={{
                                border: "none",
                                boxShadow: "none"
                            }}
                            data={props.pengembalian.data}
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

                            // BIKININ FUNCTION LG BUAT INI BIAR KALO DI KLIK NGAMBIL PAGE SESUAI
                            totalPage={props.pengembalian.total_page}
                            onPageChange={pageIndex => setActivePage(pageIndex)}

                            // ini gapenting
                            // changeMethodFlag={changeMethodFlag}
                            // resetMethodFlag={() => setChangeMethodFlag(false)}
                        />
                    </div>
                    <ModalDownload modalDownload={modalDownload} closeModalDownload={closeModalDownload} path="api/notif/request_pengembalian" type="pengembalian" />
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
    getPengembalian,
    searcherTransaction,
    getDownloadData
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(TransactionPengembalianTable));