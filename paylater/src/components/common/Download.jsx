import React, { useEffect, useState } from "react";
import ReactExport from "react-data-export";
import { Button } from "reactstrap"
import moment, { now } from 'moment'
import 'moment/locale/id'
import { connect } from "react-redux";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const Download = props => {
    const [ dataReady, setDataReady ] = useState(null)

    function dateMaker(date){
        moment.locale('id');
        return moment(date).format('Do MMM YYYY, h:mm:ss a');
    }

    const dataMaker = (tableData) => {
        let result = []
        switch(props.type){
            case 'pinjaman':
                tableData.forEach(data => {
                    result.push([data.borrower_id ? data.borrower_id.nama : null, data.mitra_id, data.jumlah_pinjaman, data.kontrak, data.disclaimer, data.status])
                })
            break;
            case 'pengembalian':
                tableData.forEach(data => {
                    result.push([data.borrower_id ? data.borrower_id.nama : null, data.jumlah_pembayaran, 'PENGEMBALIAN', dateMaker(data.createdAt)])
                })
            break;
            case 'penarikan':
                tableData.forEach(data => {
                    result.push([data.borrower_id ? data.borrower_id.nama : null, data.jumlah_penarikan, 'PINJAMAN', dateMaker(data.date)])
                })
            break;
            case 'daftar agen':
                tableData.forEach(data => {
                    result.push([data.nama, data.isCompany ? "COMPANY" : "INDIVIDU", data.isCompany ? 
                    `${data.detail.NPWP || '-'}` : `${data.detail.no_identitas || '-'}`, data.limit_saldo, data.alamat, data.isCompany ? 
                    `${data.detail.nohp_bisnis || '-'}` : `${data.detail.no_telp || '-'}`, data.detail.email, data.detail.mitra_id, data.detail.kodepos, data.detail.tempat_lahir, data.detail.tanggal_lahir, data.detail.alamat_kerja, data.detail.no_telp_kerja, data.detail.gender, data.detail.ibukandung, data.detail.kewarganegaraan, data.detail.nama_toko, data.detail.avg_penghasilan])
                })
                break;
        }
        setDataReady(result)
    }

    useEffect(() => {
        console.log(props.dataDownload)
        dataMaker(props.dataDownload)
    }, [props.dataDownload])

    const ColumnMaker = (type) => {
        if(type === 'pinjaman') {
            return [
                {title : "Nama Peminjam", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "Mitra", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title: "Total Limit", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title: "Kontrak", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title: "Disclaimer", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title:  "Status", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}
            ]
        }
        else if(type === 'penarikan' || type === 'pengembalian'){
            return [
                {title : "Nama", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "Nominal", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title: "Aksi", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title: "Date", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
            ]
        }
        else if(type === 'daftar agen'){
            return [
                {title : "Nama", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "User", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "Nomor Identitas", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "Limit Saldo", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "Alamat", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "Nomor Telfon", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "Email", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "ID Reseller", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}}, 
                {title : "Kode Pos", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "Tempat Lahir", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "Tanggal Lahir", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "Alamat Kerja", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "No Telp Kerja", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "Gender", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "Ibu Kandung", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "Kewarganegaraan", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "Nama Toko", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
                {title : "Penghasilan Rata - rata", width: {wpx: 90}, style: {font: {sz: "7.5", bold: true, fill: {patternType: "solid", fgColor: {rgb: "FFFFFF00"}}}}},
            ]
        }
    }


    const multiDataSet = [
        {
            columns: ColumnMaker(props.type),
            data: dataReady
        }
    ];

    return(
        <ExcelFile element={<Button className="c-btn c-warning"><i className="fas fa-download"></i> Unduh Data</Button>} filename="Data IRMA P2P LENDING">
            <ExcelSheet dataSet={multiDataSet} name="Data" />
        </ExcelFile>
    )
}

const mapStateToProps = state => {
    return {
        ...state.Dashboard
    };
};

export default connect(
    mapStateToProps
)(Download);