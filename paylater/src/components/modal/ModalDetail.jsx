import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Table } from "reactstrap";
import Button from "components/button/Button";
import moment from 'moment'
import NoImage from "assets/images/noimage.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { saveAs } from 'file-saver';

const ModalDetail = props => {
    const [nestedModal, setNestedModal] = useState(false);
    const [viewedImage, setViewedImage] = useState('')
    const toggleNested = (image) => {
        setNestedModal(!nestedModal);
        setViewedImage(image)
      }
    
    function statusPerkawinanChecker(status){
        if(status){
            return 'Menikah'
        }
        return 'Belum Menikah'
    }

    function dateMaker(date){
      return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    }

    const downloadFile = (link) => {
      saveAs(link, "image.jpg");
    }

    const detailCardStyle = {
      borderRadius : '6px'
    }

    const addDefaultSrc = (ev) => {
      ev.target.src = NoImage
    }

    const ScoreChecker = (score) => {
      const percentageScore = Number(score.split('').splice(score.length-2, 1).join(''))
      if(percentageScore > 80){
        return 'text-success'
      }
      else if(percentageScore > 70){
        return 'text-warning'
      }
      else if(percentageScore <= 70) {
        return 'text-danger'
      }
    }

  return (
    <div>
      <Modal size='lg' scrollable isOpen={props.modal}>
        <ModalHeader >DETAIL</ModalHeader>
        {/* {
          console.log(props.allData, 'INI ALL DATA')
        } */}
        { props.isCompany ? (
            // COMPANY
            <ModalBody style={{ backgroundColor: '#f7f7f7' }}>
            <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ptb-10 d-flex flex-column shadow p-4 mb-4 bg-white" style={detailCardStyle}>
                <h6 className="ptb-10"><b>Akta Pendirian Usaha :</b></h6>
                <img className="img-fluid rounded shadow-sm" src={props.detail.akta_pendirian_usaha || NoImage} alt="Foto" onClick={() => toggleNested(props.detail.akta_pendirian_usaha || '')} style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
            </div>
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-10 d-flex flex-row flex-wrap">
                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ptb-10 d-flex flex-column">
                    <h6 className="ptb-10"><b>Foto Tanda Daftar Perusahaan :</b></h6>
                    <img className="img-fluid rounded shadow-sm" src={props.detail.TDP || NoImage} onError={addDefaultSrc} onClick={() => toggleNested(props.detail.TDP || '')} alt="Foto " style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
                </div>


                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ptb-10 d-flex flex-column">
                    <h6 className="ptb-10"><b>Surat Izin Usaha Perdagangan :</b></h6>
                    <img className="img-fluid rounded shadow-sm" src={props.detail.SIUP || NoImage} onError={addDefaultSrc} alt="Foto" onClick={() => toggleNested(props.detail.SIUP || '')} style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
                </div>

                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ptb-10 d-flex flex-column">
                    <h6 className="ptb-10">Surat Keterangan Domisili Perusahaan : </h6>
                    <img className="img-fluid rounded shadow-sm" src={props.detail.SDKP || NoImage} onError={addDefaultSrc} alt="Foto" onClick={() => toggleNested(props.detail.SDKP || '')} style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
                </div>
            </div>

            <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ptb-10 d-flex flex-column shadow p-4 mb-4 bg-white">
                <h6 className="ptb-10">Logo Perusahaan : </h6>
                <img className="img-fluid rounded shadow-sm" src={props.detail.logo || NoImage} onError={addDefaultSrc} alt="Foto" onClick={() => toggleNested(props.detail.logo || '')} style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
            </div>

            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15 shadow p-4 mb-4 bg-white" style={detailCardStyle}>

            <Table  responsive bordered>
                <tbody>
                  <tr>
                    <th>TYPE</th>
                    <td> <b>{props.allData.type || '-'}</b></td>
                  </tr>
                  <tr>
                    <th>Nomor Telefon Bisnis</th>
                    <td> <b>{props.detail.nohp_bisnis || '-'}</b></td>
                  </tr>
                  <tr>
                    <th>No Telefon Teknikal</th>
                    <td> <b>{props.detail.nohp_teknikal || '-'}</b></td>
                  </tr>
                  <tr>
                    <th>Merek Dagang</th>
                    <td> <b>{props.detail.merek_dagang || '-'}</b></td>
                  </tr>
                  <tr>
                    <th>Bentuk Usaha</th>
                    <td> <b>{props.detail.bentuk_usaha || '-'}</b></td>
                  </tr>
                  <tr>
                    <th>Bidang Usaha</th>
                    <td> <b>{props.detail.bidang_usaha || '-'}</b></td>
                  </tr>
                  <tr>
                    <th>Benefical Owner</th>
                    <td> <b>{props.detail.benefical_owner || '-'}</b></td>
                  </tr>
                  <tr>
                    <th>Tempat Pendirian Akta</th>
                    <td> <b>{props.detail.tempat_pendirian_akta || '-'}</b></td>
                  </tr>
                  <tr>
                    <th>Tanggal Pendirian Akta</th>
                    <td> <b>{dateMaker(props.detail.tanggal_pendirian_akta) || '-'}</b> </td>
                  </tr>
                </tbody>
              </Table>

            </div>


            {/* Image Viewer */}
            <Modal centered size="lg" isOpen={nestedModal} toggle={() => toggleNested('')} >
            <ModalBody>
                <div className="container-fluid col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <img className="img-fluid rounded shadow-sm" src={viewedImage} onError={addDefaultSrc} alt="Foto identitas" style={{ filter : 'brightness(85%)' }} />
                </div>
            </ModalBody>
            <ModalFooter>
            <Button className="c-btn c-warning" /* onClick={() => toggleNested('')} */>DOWNLOAD FOTO</Button>
              <Button className="c-btn c-danger" onClick={() => toggleNested('')}>Close</Button>
            </ModalFooter>
          </Modal>
          </ModalBody>

        //   INDIVIDU
        ) : (
          <ModalBody style={{ backgroundColor: '#f7f7f7' }}>
            {/* <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-10 d-flex flex-row flex-wrap shadow p-4 mb-4 bg-white justify-content-center" style={detailCardStyle}>
              <div className="col-12 col-xl-11 col-lg-11 col-md-11 col-sm-12 d-flex flex-column">
                <h6 className="mb-1"><b>Foto Toko :</b></h6>
                <img className="img-fluid rounded shadow-sm" src={'' || NoImage} onError={addDefaultSrc} onClick={() => toggleNested(props.detail.foto_identitas || '')} alt="Foto identitas" style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
                <h6 className="mt-3 mb-1"><b>Alamat Toko :</b></h6>
                <h6><b>Jl. Alaydrus No.66 BC, RT.10/RW.2, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10320</b></h6>
              </div>
            </div> */}


            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-10 d-flex flex-row flex-wrap shadow p-4 mb-4 bg-white" style={detailCardStyle}>
                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ptb-10 d-flex flex-column">
                    <h6 className="ptb-10 fs-13"><b>Foto Identitas :</b></h6>
                    <img className="img-fluid rounded shadow-sm" src={props.detail.foto_identitas || NoImage} onError={addDefaultSrc} onClick={() => toggleNested(props.detail.foto_identitas || '')} alt="Foto identitas" style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
                </div>

                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ptb-10 d-flex flex-column">
                    <h6 className="ptb-10 fs-13"><b>Foto Toko :</b></h6>
                    <img className="img-fluid rounded shadow-sm" src={props.detail.foto_toko || NoImage} onError={addDefaultSrc} onClick={() => toggleNested(props.detail.foto_toko || '')} alt="Foto identitas" style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
                </div>


                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 ptb-10 d-flex flex-column">
                    <h6 className="ptb-10 fs-13"><b>Foto Diri Bersama Identitas :</b></h6>
                    <img className="img-fluid rounded shadow-sm" src={props.detail.foto_diri || NoImage} onError={addDefaultSrc} alt="Foto identitas" onClick={() => toggleNested(props.detail.foto_diri || NoImage)} style={{ cursor: 'pointer', filter : 'brightness(85%)' }} />
                </div>
            </div>
            <Tabs>
              <TabList>
                <Tab>
                  <h6 className="font-weight-bold c-text-alternate">Data Pribadi</h6>
                </Tab>
                <Tab>
                  <h6 className="font-weight-bold c-text-alternate">Data Toko</h6>
                </Tab>
                <Tab>
                  <h6 className="font-weight-bold c-text-alternate">Transaksi 6 Bulan Terakhir</h6>
                </Tab>
                <Tab>
                  <h6 className="font-weight-bold c-text-alternate">Score</h6>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15 shadow p-4 mb-4 bg-white" style={detailCardStyle}>
                  <Table  responsive bordered>
                  <tbody>
                    <tr>
                      <th>TYPE USER</th>
                      <td> <b>{props.allData.type || 'STORE'}</b></td>
                    </tr>
                    <tr>
                      <th>Nomor Identitas</th>
                      <td style={{ width : '60%' }}> <b>{ props.detail.no_identitas || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Nama Lengkap</th>
                      <td style={{ width : '60%' }}> <b>{ props.allData.nama|| '-'}</b></td>
                    </tr>
                    <tr>
                      <th>ID Reseller</th>
                      <td style={{ width : '60%' }}> <b>{ props.allData.mitra_id || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <td style={{ width : '60%' }}> <b>{props.detail.gender || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Tempat Lahir</th>
                      <td style={{ width : '60%' }}> <b>{ props.detail.tempat_lahir || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Tanggal Lahir</th>
                      <td style={{ width : '60%' }}> <b>{
                          dateMaker(props.detail.tanggal_lahir || '-')
                        }</b></td>
                    </tr>
                    <tr>
                      <th>Status Perkawinan</th>
                      <td style={{ width : '60%' }}> <b>{statusPerkawinanChecker(props.detail.isMarried) || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Kewarganegaraan</th>
                      <td style={{ width : '60%' }}> <b>{props.detail.kewarganegaraan || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td style={{ width : '60%' }}> <b>{props.detail.email || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Nomo Telp</th>
                      <td style={{ width : '60%' }}> <b>{props.detail.no_telp || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Alamat</th>
                      <td style={{ width : '60%' }}> <b>{props.allData.alamat || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Kodepos</th>
                      <td style={{ width : '60%' }}> <b>{props.detail.kodepos|| '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Ibu Kandung</th>
                      <td style={{ width : '60%' }}> <b>{ props.detail.ibukandung || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Alamat Kerja</th>
                      <td style={{ width : '60%' }}> <b>{props.detail.alamat_kerja || '-'}</b></td>
                    </tr>
                    <tr> 
                      <th>No Telepon Perusahaan</th>
                      <td style={{ width : '60%' }}> <b>{props.detail.no_telp_kerja || '-'}</b></td>
                    </tr>
                  </tbody>
                </Table>
                </div>
              </TabPanel>

              <TabPanel>
              <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15 shadow p-4 mb-4 bg-white" style={detailCardStyle}>
                  <Table responsive bordered>
                  <tbody>
                    <tr>
                      <th>Nama Toko</th>
                      <td style={{ width : '70%' }}> <b>{props.detail.nama_toko || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Alamat Toko</th>
                      <td style={{ width : '70%' }}> <b>{ props.detail.alamat_kerja || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Rata-rata Penghasilan</th>
                      <td style={{ width : '60%' }}> <b>{props.detail.avg_penghasilan || '-'}</b></td>
                    </tr>
                  </tbody>
                </Table>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15 shadow p-4 mb-4 bg-white" style={detailCardStyle}>
                  <Table responsive bordered>
                  <tbody>
                    <tr>
                      <th>Januari</th>
                      <td style={{ width : '70%' }}> <b>{'0' || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Februari</th>
                      <td style={{ width : '70%' }}> <b>{'0' || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Maret</th>
                      <td style={{ width : '70%' }}> <b>{'0' || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>April</th>
                      <td style={{ width : '70%' }}> <b>{'0' || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Mei</th>
                      <td style={{ width : '70%' }}> <b>{'0' || '-'}</b></td>
                    </tr>
                    <tr>
                      <th>Juni</th>
                      <td style={{ width : '70%' }}> <b>{'0' || '-'}</b></td>
                    </tr>
                  </tbody>
                </Table>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex flex-row justify-content-center align-items-center shadow p-4 mb-4 bg-white" style={detailCardStyle}>
                  {
                    props.detail.scoring ?
                    <h1 className={`display-3 ${ScoreChecker(props.detail.scoring.percentage)}`}>{props.detail.scoring.percentage}</h1> : <h1 className={`display-3 text-danger`}>0%</h1>
                  }
                </div>
                <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15 shadow p-4 mb-4 bg-white" style={detailCardStyle}>
                  <Table responsive bordered>
                    <tbody>
                    <tr>
                      <th>Location</th>
                      <td style={{ width : '70%' }}>{
                        props.detail.scoring ?
                        <b>{props.detail.scoring.detail.location}</b> : '-'
                      }</td>
                    </tr>
                    <tr>
                      <th>Income</th>
                      <td style={{ width : '70%' }}> {
                        props.detail.scoring ?
                        <b>{props.detail.scoring.detail.income}</b> : '-'
                      }</td>
                    </tr>
                    <tr>
                      <th>Koordinate</th>
                      <td style={{ width : '70%' }}>{
                        props.detail.scoring ?
                        <b>{props.detail.scoring.detail.koordinate}</b> : '-'
                      }</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </TabPanel>
            </Tabs>

            {/* Image Viewer */}
            <Modal centered size="lg" isOpen={nestedModal} toggle={() => toggleNested('')} >
            <ModalBody>
                <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15">
                <img className="rounded shadow-sm" src={viewedImage} width="100%" onError={addDefaultSrc} alt="Foto identitas" style={{ filter : 'brightness(85%)' }} />
                </div>
            </ModalBody>
            <ModalFooter>
              {
                viewedImage ?
                <Button className="c-btn c-warning" onClick={() => downloadFile(viewedImage)}>DOWNLOAD FOTO</Button> : null 
              }
              <Button className="c-btn c-danger" onClick={() => toggleNested('')}>Close</Button>
            </ModalFooter>
          </Modal>
          </ModalBody>
        )}


        <ModalFooter>
          {/* <Button className="c-btn c-info" onClick={() => to }>Do Something</Button>{' '} */}
          <Button className="c-btn c-danger" onClick={() =>  props.closeModal()}>
            CLOSE
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDetail

/* 




*/