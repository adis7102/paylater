import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";

const PrivacyPolicy = props => {
  const detailCardStyle = {
    borderRadius: "6px"
  };

  const buttonBack = {
    backgroundColor: "#563c91",
    color: "white",
    width: "150px"
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <div
        className="col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12 d-flex flex-column shadow p-4 bg-white ptb-15 mt-20 mb-40"
        style={detailCardStyle}
      >
        <h5 className="text-center">
          <strong>SYARAT DAN KETENTUAN</strong>
        </h5>
        <h5 className="text-center mb-30">
          <strong>PENGGUNAAN SITUS DAN APLIKASI KREDITPRO</strong>
        </h5>
        <div className="container-fluid">
          <div className="mb-30 col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12">
            <h6 className="mb-10"><strong>Selamat datang di KREDITPRO.</strong></h6>
            <p>Dengan mengakses dan/atau menggunakan Layanan yang ada di dalam Situs dan/atau Aplikasi KREDITPRO, Pengguna setuju bahwa Pengguna telah membaca, memahami, menerima dan menyetujui Syarat dan Ketentuan ini dan setuju untuk terikat secara hukum. Jika Pengguna tidak menyetujui Syarat dan Ketentuan ini, mohon tidak mengakses dan menggunakan Layanan yang ada di dalam Situs dan Aplikasi KREDITPRO.
            Syarat dan Ketentuan ini dapat Kami ubah sewaktu-waktu dengan pemberitahuan terlebih dahulu <span style={{ color: '#ff1744' }}>selambat-lambatnya 30 (tiga puluh) hari kerja sebelum berlakunya perubahan Syarat dan Ketentuan ini.</span></p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>1. DEFINISI DAN INTERPRETASI</b>
            </p>
            <p className="mb-10">
            Dalam Syarat dan Ketentuan ini, kecuali secara tegas dinyatakan lain, ungkapan-ungkapan di bawah ini mempunyai pengertian sebagai berikut:
            </p>
            <p><b>“Pengguna”</b> adalah setiap calon Pemberi Pinjaman, calon Penerima Pinjaman, Penerima Pinjaman, Pemberi Pinjaman atau pengguna yang menggunakan Layanan Situs dan/atau Aplikasi KREDITPRO.</p>
            <p><b>“Aplikasi”</b>  berarti Aplikasi mobile KREDITPRO termasuk namun tidak terbatas pada, aplikasi pada web, android dan IOS yang dioperasikan dan dimiliki oleh kami.</p>
            <p><b>“FAQ”</b>  berarti Frequently Asked Questions yang ada dalam Situs KREDITPRO. </p>
            <p><b>“Layanan”</b>  berarti layanan pinjam meminjam berbasis teknologi informasi melalui Situs dan Aplikasi yang mempertemukan Pemberi Pinjaman dengan Penerima Pinjaman yang diselenggarakan oleh KREDITPRO. </p>
            <p><b>“Layanan E-mail”</b>  berarti layanan e-mail yang kami berikan kepada Pengguna, yang dapat diakses dengan cara mengirimkan e-mail ke support@kreditpro.id</p>
            <p><b>“Layanan Live Chat”</b>  berarti layanan live chat yang kami berikan kepada Pengguna, yang dapat diakses melalui Situs kami. 
</p>
            <p><b>“Layanan Telepon”</b>  berarti layanan telepon yang kami berikan kepada Pengguna, yang dapat diakses dengan cara menghubungi nomor +6221 30008789. </p>
            <p><b>“OJK”</b>  berarti Otoritas Jasa Keuangan Republik Indonesia.</p>
            <p><b>“Pemberi Pinjaman”</b>  berarti perusahaan, institusi, atau individu yang menempatkan dana di rekening KREDITPRO untuk disalurkan sebagai pinjaman kepada Penerima Pinjaman melalui Situs dan/atau Aplikasi, <span style={{ color: '#ff1744' }}>berdasarkan suatu perjanjian terkait layanan pinjam meminjam uang berbasis teknologi informasi.</span></p>
            <p><b>“Penerima Pinjaman”</b>  berarti individu yang berwarga negara Indonesia <span style={{ color: '#ff1744' }}>dan/atau badan hukum yang mempunyai utang karena suatu perjanjian yang terkait layanan pinjam meminjam uang berbasis teknologi informasi.</span></p>
            <p><b>“Peristiwa Keadaan Memaksa”</b>  adalah peristiwa saat suatu keadaan atau peristiwa di luar kendali wajar dari suatu pihak yang memengaruhi masyarakat umum di negara atau wilayah pihak tersebut, dan yang mengakibatkan pihak tersebut tidak mampu mematuhi atau melakukan kewajiban tepat waktu berdasarkan Syarat dan Ketentuan ini. Keadaan atau peristiwa tersebut termasuk tindakan industri atau sengketa buruh, kerusuhan sipil, perang atau ancaman perang, tindakan kriminal atau teroris, tindakan atau peraturan pemerintah, kegagalan telekomunikasi atau utilitas, pemadaman listrik, kebakaran, ledakan, bencana alam fisik, epidemi, pembatasan karantina, dan tidak berfungsinya transportasi umum.</p>
            <p><b>“Situs”</b>  berarti website www.kreditpro.id, termasuk semua domain dan sub-domainnya yang dioperasikan dan dimiliki oleh kami.</p>
            <p><b>“KREDITPRO” </b> atau “Kami” berarti PT Tri Digi Fin yang didirikan berdasarkan hukum negara Republik Indonesia sebagai penyelenggara Layanan</p>
            <p><b>“Grup KREDITPRO”</b> berarti segala perusahaan atau entitas yang terafiliasi dengan PT Tri Digi Fin.
          </p>
          </div>

          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>2. SYARAT UMUM PENGGUNAAN</b>
            </p>
            <p><b>2.1</b> Layanan yang terdapat dalam Situs dan/atau Aplikasi ini ditujukan untuk dan digunakan oleh:
pengguna individu berkewarganegaraan Indonesia berusia minimal 21 tahun dan memiliki kapasitas hukum, hak, kuasa dan otoritas yang diperlukan untuk menyetujui Syarat dan Ketentuan ini; dan
badan hukum yang didirikan secara sah menurut hukum Indonesia dan telah memiliki perizinan umum yang diperlukan untuk menjalankan kegiatan usahanya.
KREDITPRO berdasarkan pertimbangan tertentu dapat memberikan persetujuan kepada Pengguna yang berusia kurang dari 21 tahun.</p>
            <p><b>2.2</b> Pengguna akan menggunakan Layanan yang terdapat pada Situs dan/atau Aplikasi hanya untuk tujuan yang sah dan tidak berlawanan dengan hukum, termasuk peraturan perundang-undangan yang terkait pada tindak pidana korupsi, tindaka pidana pencucian uang dan pendanaan terorisme.</p>
            <p><b>2.3</b> Semua informasi, termasuk tetapi tidak terbatas pada data pribadi yang Pengguna berikan adalah akurat dan benar. </p>
            <p><b>2.4</b> Limit pinjaman yang melalui Situs dan/atau Aplikasi dapat dilakukan dalam jumlah Rp 1.000.000 (satu juta Rupiah) sampai dengan Rp 2.000.000.000 (dua miliar Rupiah), dimana jumlah pinjaman yang akan diberikan kepada calon Penerima Pinjaman tunduk pada pemenuhan persyaratan tertentu.</p>
            <p><b>2.5</b> KREDITPRO tidak memungut biaya apapun sehubungan dengan aplikasi yang dilakukan oleh calon Penerima Pinjaman untuk mengajukan pinjaman.</p>
            <p><b>2.6</b> KREDITPRO berhak untuk mengadakan uji kelayakan atau penilaian terhadap calon Penerima Pinjaman. Selama proses tersebut berlangsung, KREDITPRO akan menghubungi lembaga, perusahaan, atau individu terkait untuk mencari informasi, melakukan verifikasi dan konfirmasi atas informasi terkait calon Penerima Pinjaman, termasuk namun tidak terbatas pada catatan historis hukum dan pinjaman, serta informasi lainnya yang dianggap perlu oleh KREDITPRO untuk melakukan penilaian atau uji kelayakan. Calon Penerima Pinjaman wajib memberikan izin dan kuasa kepada KREDITPRO untuk melakukan hal-hal tersebut.</p>
            
          </div>

          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p>
              <b style={{ color : '#ff1744' }}>3. PENGUMPULAN INFORMASI</b>
            </p>
            <p><b>3.1</b> Dari waktu ke waktu, KREDITPRO dapat mengumpulkan informasi dan data tentang Pengguna, termasuk informasi dan data:
bahwa diberikan oleh Pengguna atau diberikan oleh siapapun yang diizinkan oleh Pengguna;
dalam kaitannya dengan setiap kunjungan Pengguna ke Situs kami; dan
dari para pihak ketiga lainnya yang diizinkan oleh Pengguna dan sumber-sumber yang tersedia untuk umum termasuk lembaga atau biro pemeringkat pinjaman.</p>
            <p><b>3.2</b> Melalui Pengguna, KREDITPRO juga dapat mengumpulkan informasi dan data tentang para anggota keluarga, teman, penerima manfaat, pengacara, pemegang saham, pemilik manfaat, kuasa, orang-orang di bawah perwaliamanatan, wali amanat, penjamin Pengguna, penyedia jaminan lainnya dan individu-individu lain (secara kolektif semua yang tersebut di atas yang adalah orang perseorangan, "Individu Yang Relevan").</p>
            <p><b>3.3</b> Dalam hal ini, KREDITPRO dapat mengumpulkan informasi dan data berikut yang dinyatakan dalam pasal 3.1 dan 3.2 sebagai berikut:
Setiap informasi atau data tentang Pengguna dan/atau Individu Yang Relevan tersebut yang dapat mengidentifikasi Pengguna atau Individu Yang Relevan tersebut, termasuk tetapi tidak terbatas pada nama, tanggal lahir, KTP, paspor atau nomor atau keterangan identifikasi lain, alamat, alamat email, nomor telepon, rincian kontak, informasi keuangan dan kartu pinjaman, deskripsi dan foto pribadi, informasi portofolio produk dan layanan, pola dan perilaku transaksi, latar belakang keuangan, sejarah pendanaan, latar belakang pendidikan dan data kependudukan;
Setiap informasi dan data tentang Pengguna dan/atau Individu yang relevan tersebut dihasilkan dan/atau diberikan kepada kami selama mengakses Situs kami dan melakukan kegiatan apapun pada Situs kami. Contohnya, username terdaftar Pengguna untuk Situs, hasil pencarian dan sejarah untuk Produk dan Layanan dalam Situs kami, sejarah penyerahan Produk, catatan transaksi untuk Layanan dan Produk yang diberikan melalui Situs kami, catatan partisipasi dalam setiap Layanan Interaktif pada situs kami, dan jawaban Pengguna atas pertanyaan-pertanyaan yang ditujukan untuk verifikasi keamanan;
Setiap informasi dan data tentang Pengguna dan Individu Yang Relevan tersebut dihasilkan dan/atau diberikan kepada kami dalam perjalanan mempertahankan hubungan antara kami dan Pengguna termasuk laporan tinjauan akun dan catatan korespondensi dengan Pengguna melalui telepon atau melalui email;
Setiap informasi dan data tentang Pengguna yang dikumpulkan dalam kaitannya dengan setiap kunjungan Pengguna ke Situs kami termasuk:
informasi teknis, termasuk alamat Internet Protocol (IP) yang digunakan untuk menghubungkan komputer Pengguna dengan Internet, informasi login Pengguna, tipe dan versi browser, pengaturan zona waktu, tipe dan versi browser plug-in, sistem operasi dan platform;
informasi kunjungan situs, termasuk semua Uniform Resources Locators (URL) clickstream ke, melalui dan dari Situs kami (termasuk tanggal dan waktu); produk-produk yang Pengguna lihat atau cari; waktu respon halaman, kesalahan unduh, lama kunjungan ke laman-laman tertentu, informasi interaksi laman (seperti scrolling, klik, dan mouse-over), dan metode-metode yang digunakan untuk pindah dari laman tersebut dan nomor telepon apapun yang digunakan untuk menghubungi nomor layanan pelanggan kami;
informasi dan data dari cookies atau teknologi lainnya yang digunakan pada Situs kami. Untuk informasi lebih lanjut tentang cookie dan teknologi tersebut dan tujuan kami menggunakannya, lihat di Kebijakan Cookie kami;
Setiap informasi dan data tentang Pengguna yang dikumpulkan oleh kami ketika Pengguna berpartisipasi dalam acara yang kami selenggarakan, seperti pesta, seminar, program kontes atau penghargaan, yang dapat termasuk foto, rekaman video dan suara Pengguna;
Setiap informasi dan data tentang Pengguna yang kami terima jika Pengguna menggunakan website lain apapun yang dioperasikan oleh kami, afiliasi dan anak perusahaan kami atau layanan lain yang disediakan oleh kami, afiliasi dan anak perusahaan kami. Dalam hal tersebut, kami akan memberitahu Pengguna dan mendapatkan persetujuan Pengguna untuk pengumpulan informasi atau data tentang Pengguna dengan Kebijakan Privasi yang terkait yang terkandung dalam website lain yang dioperasikan oleh kami;
Setiap informasi dan data tentang Pengguna yang kami terima dari para pihak ketiga Yang Dipilih (ditetapkan pada pasal 4.5 di bawah); dan
Informasi dan data tentang Pengguna dan Individu yang relevan yang dimaksud di atas pada pasal 3.3 secara kolektif merupakan bagian dari data Pribadi.</p>
          </div>

          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>4. PENGGUNAAN DAN PENGUNGKAPAN INFORMASI DAN DATA PRIBADI</b>
            </p>
            <p><b>4.1 </b> Apabila dianggap perlu dan pantas oleh KREDITPRO dan sesuai dengan hukum, aturan, dan peraturan yang berlaku, data pribadi dapat digunakan dan diungkapkan oleh KREDITPRO dan/atau Grup KREDITPRO untuk tujuan berikut ini:
memberikan akses kepada Pengguna dan memfasilitasi penggunaan Situs kami dan memastikan bahwa Konten Situs, Produk, Layanan, Layanan Interaktif, Konten Pihak Ketiga dan Situs Pihak Ketiga ditampilkan dengan cara yang paling efektif untuk Pengguna dan Perangkat Pengguna;
memberikan kepada Pengguna informasi, Konten Situs, Produk, Layanan dan Layanan Interaktif yang Pengguna minta dari kami dan akses ke Situs Pihak Ketiga dan Konten Pihak Ketiga;
melaksanakan kewajiban kami yang timbul dari setiap kontrak yang diadakan antara Pengguna dan kami;
memberikan kepada Pengguna informasi tentang Produk dan Layanan lain yang kami tawarkan yang serupa dengan Produk dan Layanan yang Pengguna telah beli atau tanyakan;
memberikan kepada Pengguna, atau mengizinkan Para Pihak Ketiga Yang Dipilih untuk memberikan informasi tentang Produk atau Layanan kepada Pengguna yang kami rasa mungkin menarik bagi Pengguna. Apabila Pengguna telah menjadi Pengguna, kami hanya akan menghubungi Pengguna melalui email, SMS atau telepon untuk memberikan Informasi tentang Produk dan Layanan yang serupa dengan yang sebelumnya telah Pengguna pertimbangkan, pendanaan atau manfaatkan. Jika Pengguna seorang pelanggan baru, dan apabila Pengguna setuju untuk mengungkapkan Data Pribadi Pengguna kepada Para Pihak Ketiga Yang Dipilih, kami (atau Para Pihak Ketiga Yang Dipilih) dapat menghubungi Pengguna melalui email atau SMS untuk memberikan informasi tentang Produk atau Layanan;
memberitahu Pengguna tentang perubahan-perubahan di Situs, Konten Situs, Produk, Layanan, Layanan Interaktif, Konten Pihak Ketiga dan Situs Pihak Ketiga;
mengelola Situs kami dan untuk pengoperasian internalnya, termasuk pemecahan masalah (troubleshooting), analisis data, pengujian, penelitian, tujuan statistik dan survei;
meningkatkan Situs kami untuk memastikan bahwa Konten Situs, Produk, Layanan, Layanan Interaktif, Konten Pihak Ketiga dan Situs Pihak Ketiga disampaikan dengan cara yang paling efektif untuk Pengguna dan Perangkat Pengguna;
memungkinkan Pengguna untuk berpartisipasi dalam Layanan Interaktif dan fitur interaktif lainnya dari Situs, Produk dan Layanan kami, jika Pengguna memilih untuk melakukannya;
menerapkan dan meninjau langkah-langkah pengamanan dan perlindungan pada Situs kami sehingga menjaga Situs kami tetap aman dan terjamin;
menilai atau memahami efektivitas iklan kami dan iklan pihak ketiga pada Situs kami dan pada website pihak ketiga lain, dan untuk menyampaikan iklan yang relevan kepada Pengguna;
membuat saran dan rekomendasi untuk Pengguna dan Para Pengguna lain Situs kami tentang Produk, Layanan atau produk dan layanan pihak ketiga yang mungkin menarik bagi Pengguna atau mereka;
membuat keputusan yang berkaitan dengan pembukaan atau kelanjutan akun(-akun) Pengguna dan pembuatan, penyediaan atau kelanjutan dari Layanan(-Layanan) dan Produk(-Produk) selain itu menjaga akurasi informasi "kenali pelanggan Pengguna" dan melakukan pemeriksaan anti pencucian uang, pinjaman dan latar belakang;
menyediakan, mengoperasikan, memproses dan mengelola akun(-akun) Pengguna, Layanan(-Layanan) dan Produk(-Produk) atau mengelola aplikasi-aplikasi untuk Akun(-Akun) Pengguna, Layanan(-Layanan) dan Produk(-Produk), setiap transaksi (termasuk transaksi pengiriman uang), dan menjaga kualitas layanan dan melatih staf;
melakukan kegiatan-kegiatan yang berkaitan dengan penyediaan akun(-akun) Pengguna, Layanan(-Layanan) dan Produk(-Produk), termasuk langganan atau usulan langganan atas Produk(-Produk) atau Layanan(-Layanan) (baik yang ditawarkan atau yang dikeluarkan oleh KREDITPRO atau yang lainnya) dan penyediaan laporan penelitian atau bahan untuk analisis;
menyediakan layanan dan dukungan terkait Produk, termasuk tetapi tidak terbatas pada, penyediaan dukungan pengelolaan atau administratif atau bertindak sebagai perantara/pihak yang ditunjuk (nominee)/agen sehubungan dengan partisipasi Pengguna dalam Produk(-Produk);
menyediakan atau memberikan akses kepada materi-materi terkait Produk seperti dokumen penawaran, laporan penelitian, profil produk, lembar fakta, lembar ketentuan (term sheet) atau materi-materi lain terkait produk;
memenuhi persyaratan-persyaratan hukum, regulasi dan kepatuhan di dalam dan luar negeri yang berlaku pada KREDITPRO dan Grup KREDITPRO berdasarkan undang-undang yang berlaku (termasuk anti pencucian uang dan kewajiban pajak yang berlaku pada KREDITPRO dan Grup KREDITPRO, dan pengungkapan pada setiap bursa efek, pengadilan, otoritas pemerintah, otoritas pengawas atau regulator lain apapun sesuai dengan pedoman, peraturan, perintah, petunjuk atau permintaan yang relevan dari organisasi-organisasi tersebut) dan mematuhi setiap perjanjian internasional atau perjanjian yang berlaku dengan atau antara pemerintah asing dan dalam negeri yang berlaku pada KREDITPRO dan Grup KREDITPRO;
memeriksa identitas dan/atau kewenangan dari para kuasa Pengguna yang menghubungi KREDITPRO atau Grup KREDITPRO atau dapat dihubungi oleh KREDITPRO atau Grup KREDITPRO dan untuk melaksanakan atau menanggapi permintaan, pertanyaan atau instruksi dari para kuasa yang telah diperiksa atau para pihak lain sesuai dengan prosedur pengamanan kami yang berlaku;
melakukan penilaian risiko, analisis dan perencanaan statistik dan tren, termasuk melaksanakan pengolahan data, analisis statistik, pinjaman, risiko dan anti pencucian uang, membuat dan mengelola model penilaian pinjaman, melakukan pemeriksaan dan peninjauan pinjaman dan latar belakang lain, dan menyimpan sejarah pinjaman Pengguna dan kuasa Pengguna yang sah (terlepas apakah ada hubungan langsung antara kuasa yang sah tersebut dengan KREDITPRO atau Grup KREDITPRO atau tidak) untuk referensi saat ini dan di masa mendatang;
memantau dan mencatat panggilan dan komunikasi elektronik dengan Pengguna untuk tujuan pencatatan, kualitas, pelatihan, investigasi, dan pencegahan penipuan;
mendeteksi, mencegah, melakukan penyidikan dan mendakwa kejahatan dan penipuan termasuk membantu dalam setiap penyidikan kejahatan oleh otoritas yang relevan terhadap Pengguna, Individu Yang Relevan atau orang lain;
melaksanakan (termasuk, namun tidak terbatas pada, penagihan jumlah yang terutang kepada KREDITPRO dan/atau Grup KREDITPRO) atau membela hak-hak KREDITPRO atau Grup KREDITPRO, yang berasal dari kontrak atau lainnya;
melakukan menajemen internal untuk mengoperasikan sistem informasi kontrol dan manajemen dan melaksanakan audit internal atau mengizinkan pelaksanaan audit eksternal;
memungkinkan penerima hak yang sebenarnya atau yang diajukan dari KREDITPRO, atau peserta atau sub-peserta dari hak-hak KREDITPRO sehubungan dengan Pengguna, untuk mengevaluasi transaksi yang dimaksudkan untuk menjadi obyek dari pengalihan, partisipasi atau sub-partisipasi;
mematuhi pengaturan kontrak oleh atau antara industri otonom, badan industri, asosiasi penyedia industri atau lembaga lain yang serupa dengan KREDITPRO atau Grup KREDITPRO; dan
mengelola hubungan KREDITPRO dengan Pengguna, yang dapat termasuk menyediakan informasi kepada Pengguna atau Individu Yang Relevan, tentang produk dan layanan KREDITPRO atau Grup KREDITPRO, apabila secara khusus disetujui atau apabila diizinkan berdasarkan peraturan perundang-undangan yang berlaku;
untuk memasarkan produk atau layanan keuangan atau yang terkait dengan pinjaman melalui berbagai moda komunikasi termasuk surat, telepon, SMS, fax, email, internet, riset pasar, dan merancang atau menyaring produk atau layanan yang serupa termasuk dengan melakukan riset pasar, analisis data, dan survei;
mematuhi setiap kewajiban, persyaratan, kebijakan, prosedur, penilaian atau pengaturan untuk berbagi data dan informasi dalam KREDITPRO atau Grup KREDITPRO dan penggunaan data dan informasi lainnya sesuai dengan setiap program Grup KREDITPRO untuk pemenuhan sanksi atau pencegahan atau pendeteksian tindak pidana korupsi, pencucian uang, pendanaan teroris atau kegiatan melanggar hukum lainnya.</p>
            <p><b>4.2 </b> Kami dapat menggabungkan setiap informasi dan data, terlepas dari bagaimana informasi dan data tersebut diberikan kepada kami atau dikumpulkan oleh kami, dan menggunakan informasi atau data yang digabungkan untuk tujuan yang ditetapkan dalam pasal 4.1 di atas.</p>
            <p><b>4.3</b> Kami juga dapat menggunakan dan mengungkapkan Data Pribadi untuk tujuan lain yang berkaitan dengan hal-hal apapun di atas sebagaimana ditetapkan dalam pasal 4.1 dan 4.2, yang secara umum akan dianggap sesuai dengan situasi tersebut.</p>
            <p><b>4.4</b> Sebagaimana tujuan dari kami dapat mengumpulkan, menggunakan, mengungkapkan atau mengolah data pribadi Pengguna tergantung pada keadaan pada saat itu, tujuan tersebut mungkin tidak muncul dalam pasal di atas. Namun, kami akan memberitahu Pengguna tentang tujuan lain tersebut pada saat meminta persetujuan Pengguna untuk pengumpulan data pribadi tersebut, kecuali pengolahan data pribadi Pengguna tanpa persetujuan Pengguna yang diizinkan oleh hukum.</p>
            <p><b>4.5</b> Kami juga dapat berbagi data pribadi dengan Para Pihak Ketiga Yang Dipilih termasuk:
para mitra usaha, pemasok dan sub-kontraktor untuk pelaksanaan setiap kontrak yang kami adakan dengan mereka atau Pengguna;
para pengiklan dan jaringan-jaringan iklan yang memerlukan data untuk memilih dan menyediakan iklan yang relevan kepada Pengguna dan orang lain. Kami tidak mengungkapkan informasi tentang individu yang dapat diidentifikasi kepada para pengiklan, tetapi kami dapat memberikan mereka informasi agregat tentang Para Pengguna kami (misalnya, kami dapat memberitahu mereka bahwa 500 pria berusia di bawah 30 tahun mengklik iklan mereka pada hari tertentu). Kami juga bisa menggunakan informasi agregat tersebut untuk membantu para pengiklan menjangkau jenis audiens yang mereka ingin targetkan. Kami dapat menggunakan informasi atau data yang dikumpulkan dari Pengguna untuk memungkinkan kami memenuhi keinginan para pengiklan kami dengan menampilkan iklan mereka kepada audiens yang menjadi target;
penyedia analisis dan mesin pencari yang membantu kami dalam peningkatan dan optimalisasi situs kami;
calon penjual atau pembeli bisnis atau aset apabila kami menjual atau membeli bisnis atau aset apapun, dalam hal ini kami dapat mengalihkan data pribadi Pengguna kepada pembeli atau penjual tersebut sebagai bagian dari transaksi;
setiap organisasi atau orang tersebut, jika kami berada di bawah kewajiban untuk mengungkapkan atau membagikan data pribadi Pengguna untuk mematuhi setiap kewajiban hukum, atau untuk melaksanakan atau menerapkan Ketentuan-Ketentuan Penggunaan kami, Kebijakan Cookie kami, dan perjanjian lainnya, atau untuk melindungi hak, aset, atau keamanan dari KREDITPRO dan Grup KREDITPRO, pelanggan kami, Para Pengguna atau lainnya. Ini termasuk bertukar informasi dengan perusahaan dan organisasi lain untuk tujuan perlindungan dari penipuan dan pengurangan risiko pinjaman;
agen, kontraktor atau penyedia layanan pihak ketiga yang menyediakan administrasi, pengiriman pos, telemarketing, telekomunikasi penjualan langsung, call center, proses bisnis, perjalanan, visa, manajemen pengetahuan, sumber daya manusia, pengolahan data, teknologi informasi, komputer, pembayaran, penagihan utang, referensi pinjaman atau pemeriksaan-pemeriksaan latar belakang lain atau layanan-layanan lain kepada KREDITPRO atau Grup KREDITPRO sehubungan dengan pengoperasian bisnis dari KREDITPRO atau Grup KREDITPRO;
orang atau entitas yang merupakan bagian dari Grup KREDITPRO walaupun hanya sepanjang diperlukan untuk memenuhi Tujuan Yang Diizinkan yang relevan;
bank tertarik atau penarik sehubungan dengan setiap cek atau yang setara yang diproses oleh KREDITPRO atau Grup KREDITPRO;
lembaga keuangan yang dengannya Pengguna memiliki atau mengajukan untuk memiliki urusan terkait dengan setiap Produk dan/atau Layanan;
orang atau entitas yang kepada orang atau entitas tersebut KREDITPRO atau Grup KREDITPRO berkewajiban atau disyaratkan untuk melakukan pengungkapan sesuai dengan proses hukum atau berdasarkan persyaratan dari hukum, peraturan, perintah pengadilan di dalam dan luar negeri atau perjanjian yang diadakan, yang mengikat atau berlaku untuk KREDITPRO atau Grup KREDITPRO dan setiap otoritas pemerintah, di dalam atau luar negeri, atau antara dua otoritas pemerintah atau lebih di dalam atau di luar negeri, atau setiap pengungkapan berdasarkan dan untuk tujuan pedoman atau petunjuk yang diberikan atau dikeluarkan oleh badan penegak hukum, regulasi, badan pemerintah, otoritas pajak, lembaga penegak hukum atau otoritas-otoritas lain, atau peraturan otonom dari badan industri atau asosiasi dari penyedia jasa keuangan atau bursa efek yang disyaratkan atau diharapkan untuk dipenuhi oleh KREDITPRO atau Grup KREDITPRO, atau setiap pengungkapan sesuai dengan setiap kontrak atau komitmen lain dari KREDITPRO atau Grup KREDITPRO dengan lembaga hukum, regulasi, badan pemerintah, pajak, lembaga penegak hukum atau otoritas-otoritas lain, atau badan otonom atau industri atau asosiasi dari penyedia jasa keuangan, atau bursa efek, semua yang mungkin di dalam atau di luar Indonesia termasuk pengungkapan ke sidang pengadilan, pengadilan tribunal, dan/atau lembaga hukum, regulasi, pajak dan badan pemerintah, terlepas apakah proses hukum, kewajiban, permintaan, persyaratan, perjanjian atau pedoman tersebut saat ini masih ada atau dibuat di masa mendatang;
lembaga keuangan, agen proses, atau pihak lain yang akan terlibat dalam transaksi pengiriman uang atau kegiatan perbankan/keuangan apapun;
penerima pengalihan yang sebenarnya atau yang diajukan dari KREDITPRO atau Grup KREDITPRO, atau peserta atau sub-peserta atau penerima pengalihan hak-hak KREDITPRO atau Grup KREDITPRO sehubungan dengan Pengguna atau Individu Yang Relevan lain, semua atau sebagian dari aset atau bisnis dari KREDITPRO atau Grup KREDITPRO; dan
pihak yang memberikan atau mengajukan untuk memberikan jaminan atau jaminan pihak ketiga kepada penerima jaminan atau menjamin kewajiban-kewajiban Pengguna atau orang-orang dari Individu Yang Relevan manapun.
Dalam hal ini, tujuan atas penggunaan dan pengungkapan informasi dan data tentang Pengguna yang dimaksud berdasarkan pasal 4 ini secara kolektif selanjutnya disebut sebagai "Tujuan Yang Diizinkan".</p>
          </div>

          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>5. DATA PRIBADI DAN LEMBAGA RUJUKAN PINJAMAN</b>
            </p>
            <p><b>5.1 </b> KREDITPRO atau Grup KREDITPRO dapat, dengan sendirinya dan/atau sebagai agen Pengguna, menyediakan informasi dan data yang relevan tentang Pengguna dan Individu Yang Relevan tersebut kepada lembaga-lembaga referensi pinjaman untuk tujuan memperbarui catatan pinjaman Pengguna dalam basis data pinjaman pelanggan dari lembaga-lembaga tersebut. Dalam hal ini, informasi dan data yang relevan tentang Pengguna dan Individu Yang Relevan akan sehubungan dengan Produk(-Produk) dan/atau Layanan(-Layanan) yang diadakan atau digunakan oleh Pengguna dan Individu Yang Relevan tersebut (apakah sebagai peminjam, pemberi hak tanggungan, penjamin atau penyedia jaminan dan apakah dengan nama Pengguna dan nama Individu Yang Relevan sendiri atau bersama dengan orang lain) dan informasi dan data ini akan termasuk:
nama panjang;
kapasitas sehubungan dengan Produk (sebagai peminjam, pemberi hak tanggungan, penjamin atau penyedia jaminan, dan apakah dengan nama sendiri atau dengan nama bersama dengan orang lain);
nomor identitas (misalnya, nomor kartu identitas, paspor atau KTP);
tanggal lahir;
alamat korespondensi;
akun atau nomor referensi berkenaan dengan setiap Produk;
jenis Produk yang diadakan dan/atau digunakan;
status akun (contohnya, aktif, ditutup, dihapus (selain karena putusan kepailitian), dihapus karena karena putusan kepailitian);
tren dan status pembayaran (misalnya, pembayaran semua atau sebagian, saat ini atau di akhir periode);
tanggal penutupan akun, jika ada, berkenaan dengan setiap Produk;
tanggal penggunaan Produk; dan
informasi umum tentang akun dan informasi mengenai setiap standar materi, jika ada, yang berkaitan dengan standar materi.
Untuk tujuan menentukan risiko pinjaman Pengguna ketika Pengguna mengajukan untuk setiap Produk atau Layanan, KREDITPRO atau Grup KREDITPRO dapat mengakses dan memperoleh dari lembaga-lembaga referensi pinjaman informasi pribadi dan akun atau catatan tentang Pengguna dan Individu Yang Relevan tersebut (termasuk informasi tentang jumlah perhitungan fasilitas/pinjaman) yang disimpan oleh lembaga referensi pinjaman manapun dalam yurisdiksi yang relevan.</p>
            <p><b>5.2 </b> KREDITPRO atau Grup KREDITPRO dan Individu Yang Relevan dari waktu ke waktu dapat juga mengakses informasi pribadi dan akun atau catatan tentang Pengguna dan Individu Yang Relevan tersebut (termasuk informasi tentang perhitungan hak tanggungan) yang disimpan oleh lembaga referensi pinjaman untuk tujuan meninjau salah satu hal berikut dalam kaitannya dengan Produk yang sudah ada yang diberikan kepada Pengguna atau pihak ketiga yang kewajibannya dijamin oleh Pengguna:
peningkatan jumlah pinjaman;
pengetatan pinjaman (termasuk pembatalan pinjaman atau penurunan jumlah pinjaman);
pemberian Produk tambahan; atau
penempatan atau pelaksanaan skema pengaturan yang berkaitan dengan Pengguna atau pihak ketiga manapun yang kewajibannya dijamin oleh Pengguna.</p>
            <p><b>5.3</b> KREDITPRO atau Grup KREDITPRO juga dapat memperoleh laporan pinjaman mengenai Pengguna dari lembaga referensi pinjaman dalam mempertimbangkan setiap permohonan dari Pengguna untuk mendaftarkan dan mengunggah suatu Produk pada Situs kami untuk langganan. Dalam hal ini, jika Pengguna ingin mengakses laporan pinjaman tentang Pengguna tersebut, KREDITPRO akan memberikan kepada Pengguna rincian kontak dari lembaga referensi pinjaman yang terkait kepada Pengguna untuk mendapatkan laporan secara independen.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>6. ADMINISTRASI DAN PENGELOLAAN DATA PRIBADI PENGGUNA</b>
            </p>
            <p><b>6.1 </b> Kami akan melakukan upaya yang wajar untuk memastikan bahwa data pribadi Pengguna akurat dan lengkap, jika data pribadi Pengguna kemungkinan akan digunakan oleh KREDITPRO untuk membuat keputusan yang mempengaruhi Pengguna dalam penyediaan pinjaman, atau mengungkapkan kepada organisasi lain. Namun, ini berarti bahwa Pengguna harus juga memberitahukan kepada kami setiap perubahan pada data pribadi Pengguna yang awalnya Pengguna berikan kepada kami. Sejauh pengetahuan Kami atas data pribadi Pengguna, Kami tidak akan bertanggung jawab untuk mengandalkan data pribadi yang tidak akurat dan tidak lengkap yang diakibatkan karena Pengguna tidak memberitahukan kepada kami setiap perubahan pada data pribadi Pengguna yang awalnya Pengguna berikan kepada kami.
</p>
            <p><b>6.2</b> Kami juga akan menempatkan pengaturan pengamanan yang wajar untuk memastikan data pribadi Pengguna cukup terlindungi dan aman. Pengaturan pengamanan yang sesuai akan dilakukan untuk mencegah akses, pengumpulan, penggunana, pengungkapan, penyalinan, perubahan, kebocoran, kehilangan, kerusakan dan/atau perubahan yang tidak sah terhadap data pribadi Pengguna. Namun, kami tidak menanggung suatu tanggung jawab apapun atas setiap penggunaan tidak sah dari data pribadi Pengguna oleh para pihak ketiga yang sepenuhnya disebabkan oleh faktor-faktor di luar kendali kami.</p>
            <p><b>6.3</b> Kami juga akan menempatkan langkah-langkah yang memastikan data pribadi Pengguna yang ada di bawah penguasaan atau berada di bawah kendali kami dimusnahkan dan/atau dijadikan bersifat anonim sesegera mungkin saat dianggap wajar untuk mengasumsikan bahwa (i) tujuan data pribadi itu dikumpulkan tidak lagi dipenuhi dengan penyimpanan data pribadi tersebut; dan (ii) penyimpanan tidak lagi perlu dilakukan untuk tujuan hukum atau bisnis lain apapun.</p>
            <p><b>6.4 </b> Apabila data pribadi Pengguna akan dipindahkan dari negara manapun di tempat Pengguna mengakses Situs ini, kami akan mematuhi hukum yang berlaku dalam melakukannya.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>7. HAK UNTUK MENOLAK PENGGUNAAN DATA PRIBADI UNTUK TUJUAN PEMASARAN</b>
            </p>
            <p>
              <b>7.1</b> Pengguna memiliki hak untuk meminta kami agar tidak mengolah data pribadi Pengguna untuk tujuan pemasaran. Kami akan memberitahu Pengguna dan meminta persetujuan dari Pengguna sebelum kami menggunakan data pribadi Pengguna untuk tujuan tersebut atau jika kami bermaksud mengungkapkan data pribadi Pengguna kepada pihak ketiga manapun untuk tujuan tersebut. Pengguna dapat menggunakan hak Pengguna untuk menolak pengolahan tersebut dengan cara memberikan tanda pada formulir yang terkait yang kami gunakan untuk mengumpulkan data Pengguna. Bahkan setelah Pengguna memberikan persetujuan Pengguna atas data pribadi yang akan digunakan untuk tujuan pemasaran, Pengguna dapat, setiap saat setelah itu, menarik persetujuan Pengguna dengan menghubungi kami di support@kreditpro.id
            </p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>8. AKSES KE INFORMASI</b>
            </p>
            <p><b>8.1 </b> Pengguna memiliki hak untuk meminta dari kami data pribadi tentang Pengguna yang disimpan oleh KREDITPRO. Jika Pengguna ingin mengakses, memutakhirkan atau mengubah atau menghapus setiap informasi yang Pengguna berikan kepada kami, hubungi kami di support@kreditpro.id untuk mendapatkan bantuan.</p>
            <p><b>8.2</b> Dalam keadaan-keadaan luar biasa, KREDITPRO dapat menolak akses Pengguna ke Data Pribadi Pengguna tetapi kami akan memberikan kepada Pengguna penjelasan tentang alasan(-alasan) yang mencegah kami melakukan hal itu berdasarkan hukum yang berlaku. Keadaan-keadaan luar biasa tersebut termasuk tetapi tidak terbatas pada apabila:
Otoritas yang melakukan penyelidikan atau lembaga pemerintah berkeberatan terhadap pemenuhan permintaan pelanggan oleh KREDITPRO;
Informasi dapat, dalam pelaksanaan kewenangan dan/atau penilaian yang wajar dari KREDITPRO, mempengaruhi hidup atau keamanan seorang individu; dan
Data dikumpulkan sehubungan dengan investigasi terhadap pelanggaran kontrak, kecurigaan terhadap aktivitas-aktivitas penipuan atau pelanggaran hukum.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>
              9. PENGAKUAN
              </b>
            </p>
            <p><b>9.1</b> Pengguna mengakui bahwa apabila Pengguna tidak memberikan informasi atau data yang relevan atau menarik persetujuan sehubungan dengan pengumpulan, penggunaan dan/atau pengungkapan informasi atau data yang relevan sebagaimana dijelaskan dalam Kebijakan Privasi, KREDITPRO berpeluang untuk tidak dapat membuka atau melanjutkan akun Pengguna, atau membuat atau memberikan atau melanjutkan setiap Produk dan Layanan, atau terus mengizinkan Pengguna menggunakan atau mengakses Situs, Konten Situs, Produk, Layanan atau Layanan Interaktif kami. KREDITPRO atau Grup KREDITPRO akan memberitahu Pengguna tentang konsekuensi dari penarikan persetujuan tersebut seandainya Pengguna memberitahukan kepada kami tentang keinginan Pengguna untuk menarik persetujuan Pengguna.</p>
            <p><b>9.2</b> Pengguna menjamin kepada KREDITPRO dan Grup KREDITPRO bahwa apabila Pengguna atau kuasa Pengguna bertanggung jawab atas penyediaan setiap informasi atau data berkaitan dengan siapapun kepada KREDITPRO dan Grup KREDITPRO, atau menyediakan setiap informasi atau data tersebut kepada KREDITPRO dan Grup KREDITPRO, Pengguna telah memberitahukan dan mendapatkan persetujuan dari orang(-orang) yang bersangkutan untuk mengizinkan KREDITPRO dan/atau Grup KREDITPRO untuk mengumpulkan, menggunakan dan/atau mengungkapkan informasi berkaitan dengan orang(-orang) yang bersangkutan sebagaimana dijelaskan dalam Kebijakan Privasi ini.</p>
            <p><b>9.3</b> Pengguna setuju bahwa Pengguna telah memperoleh persetujuan dari semua Individu Yang Relevan tersebut sehingga setiap infromasi atau data dari Individu Yang Relevan dapat diolah, disimpan, di-transfer atau diungkapkan dalam dan kepada negara manapun sebagaimana yang dianggap oleh KREDITPRO dan Grup KREDITPRO sesuai dengan hukum yang berlaku untuk Tujuan Yang Diizinkan. Data tersebut juga dapat diolah, disimpan, ditansfer atau diungkapkan sesuai dengan hukum dan praktik, aturan dan peraturan setempat (termasuk setiap permintaan berdasarkan peraturan, tindakan dan perintah pemerintah) di negara/yurisdiksi tersebut.</p>
            <p><b>9.4</b> Dalam penyediaan Layanan, Pengguna mengakui bahwa KREDITPRO akan bertindak sebagai:
Fasilitator dalam penyaluran pinjaman yang diberikan oleh Pemberi Pinjaman kepada Penerima Pinjaman sesuai dengan kriteria yang ditentukan;
Kuasa Pemberi Pinjaman dalam melakukan penagihan, pengelolaan dan administrasi sehubungan dengan kegiatan penyediaan pinjaman kepada Penerima Pinjaman;
Kuasa Pemberi Pinjaman dalam melakukan uji kelayakan atau penilaian terhadap Penerima Pinjaman; dan
Kuasa Pemberi Pinjaman untuk melakukan peran-peran lain yang dianggap perlu oleh KREDITPRO dan Pemberi Pinjaman dalam rangka penyaluran pinjaman kepada Penerima Pinjaman.</p>
            <p><b>9.5</b> Sesuai dengan Ketentuan-Ketentuan Penggunaan, Kebijakan Cookie dan perjanjian definitf, Pengguna setuju bahwa KREDITPRO dapat mengubah dan memodifikasi ketentuan-ketentuan dari Kebijakan Privasi ini dari waktu ke waktu dan bawa setelah pemberitahuan kepada Pengguna terhadap Kebijakan Privasi yang diubah tersebut, konten-konten daripadanya sama halnya akan mengubah, meragamkan dan melengkapi Ketentuan-Ketentuan Penggunaan, Kebijakan Cookie dan perjanjian definitf, perjanjian-perjanjian lain dan/atau pengaturan-pengaturan tersebut di atas akan berlaku sejak tanggal yang ditetapkan dalam Kebijakan Privasi yang diubah tersebut, dan tanpa mengurangi hal tersebut di atas, akses/penggunaan atau kelanjutan akses/penggunaan Pengguna atas Situs, Konten Situs, Produk, Layanan, Layanan Interaktif setelah perubahan tersebut juga harus dianggap sebagai penerimaan dan persetujuan Pengguna pada hal-hal tersebut.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>10. HAL-HAL TERKAIT KEKAYAAN INTELEKTUAL</b>
            </p>
            <p><b>10.1 </b> Hak kekayaan intelektual Situs dan/atau Aplikasi ini, termasuk, namun tidak terbatas, pada hak cipta, hak paten, termasuk merek dagang untuk dan atas nama KREDITPRO dimiliki secara penuh oleh dan menjadi aset tetap dari KREDITPRO. </p>
            <p><b>10.2 </b> Pengguna diperbolehkan untuk melihat dan menyalin-cetak diatas kertas isi yang disediakan Situs dan Aplikasi, namun: (a) seluruh salinan tersebut merupakan hak kekayaan intelektual dari KREDITPRO dan pihak ketiga yang kami berikan lisensi; dan (b) Pengguna tidak mengubah dengan cara apapun salinan kertas dari bahan-bahan yang telah dicetak, termasuk penghapusan segala hak cipta atau kepemilikan lainnya yang terkandung di Situs dan/atau Aplikasi. </p>
            <p><b>10.3</b> Pengguna setuju tidak akan menggunakan bagian manapun dari Situs dan Aplikasi ini untuk: (a) menyelipkan atau dengan sengaja atau tidak sengaja menularkan atau menyebarkan virus, worm, trojan horse, time bomb, trap door atau kode komputer, berkas, atau program atau membuat permintaan berulang yang dirancang untuk mengganggu, merusak atau membatasi fungsi dari perangkat lunak, atau perangkat keras komputer, atau peralatan telekomunikasi, atau untuk mengurangi kualitas, mengganggu tampilan dari, atau merusak fungsi Situs dan Aplikasi ini; (b) mengunggah, memasang, mengirimkan e-mail atau sebaliknya menerima, atau menempelkan tautan pada konten apapun yang memfasilitasi peretasan data; (c) meretas apapun yang menjadi bagian dari Situs dan Aplikasi ini; (d) mengunggah, mengirimkan e-mail, atau mengirimkan tautan kepada konten mana saja yang melanggar hak kekayaan intelektual dari pihak ketiga; (e) mengelakkan atau mencoba mengelakkan, cara pengamanan apapun dari Situs dan Aplikasi; (f) mengizinkan pihak ketiga mana pun untuk melakukan semua hal di atas; (g) jika Pengguna menggunakan konten dari Situs dan Aplikasi ini namun gagal memenuhi persyaratan-persyaratan ini, maka hak Pengguna untuk menggunakan Situs dan Aplikasi ini akan langsung hilang; (h) tidak ada tautan dari situs lain pada Situs dan Aplikasi ini yang mungkin masuk tanpa izin tertulis dari kami terlebih dahulu. Pengguna tidak berhak memberi nama, memodifikasi, atau membagikan kembali konten dari Situs dan Aplikasi ini tanpa izin dari kami.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>11. DOKUMEN LAIN YANG BERLAKU</b>
            </p>
            <p><b>11.1 </b> Sebagai tambahan atas Syarat dan Ketentuan ini, hal-hal berikut juga berlaku terhadap penggunaan Layanan melalui Situs dan Aplikasi KREDITPRO oleh Pengguna: (a)Syarat dan Ketentuan Pinjaman Pribadi; dan (b)Perjanjian lainnya dengan KREDITPRO yang akan mengatur mengenai penggunaan Pengguna atas Layanan. </p>
            <p><b>11.2</b> Jika terdapat pertentangan antara Syarat dan Ketentuan ini dan perjanjian lain yang berlaku untuk aspek-aspek khusus dari Layanan, yang berlaku adalah perjanjian lain itu dalam kaitannya dengan aspek-aspek khusus dari Layanan yang kepadanya perjanjian itu berlaku.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>12. PERUBAHAN ATAS SYARAT DAN KETENTUAN</b>
            </p>
            <p><b>12.1 </b> KREDITPRO berhak untuk mengubah Syarat dan Ketentuan Umum atas kebijakannya sendiri dari waktu ke waktu. Segala perubahan atas Syarat dan Ketentuan ini akan berlaku dengan pemberitahuan terlebih dahulu selambat-lambatnya 30 (tiga puluh) hari kerja sebelum berlakunya perubahan Syarat dan Ketentuan ini . </p>
            <p><b>12.2 </b> Pengguna memahami dan menyetujui bahwa ketika Pengguna melanjutkan penggunaan Layanan melalui Situs dan/atau Aplikasi setelah dilakukan perubahan atas Syarat dan Ketentuan ini menjadikan Pengguna tunduk dan terikat pada Syarat dan Ketentuan yang baru.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>13. KETERPISAHAN</b>
            </p>
            <p>Jika ada syarat atau ketentuan dalam Syarat dan Ketentuan ini secara keseluruhan atau sebagian dinyatakan sampai batas apapun sebagai tidak sah atau tidak dapat dilaksanakan berdasarkan undang-undang atau peraturan hukum, syarat atau ketentuan atau bagian itu hingga batas tersebut dianggap bukan merupakan bagian dari Syarat dan Ketentuan ini dan keberlakuan dari syarat dan ketentuan lainnya di dalam Syarat dan Ketentuan tidak akan terpengaruh. Kegagalan KREDITPRO dalam melaksanakan atau menjalankan setiap hak atau ketentuan dari Syarat dan Ketentuan ini bukan merupakan pengesampingan hak, ketentuan tersebut, keadaan tersebut atau setiap keadaan lainnya.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>14. PEMBATASAN TANGGUNG JAWAB</b>
            </p>
            <p><b>14.1</b> KREDITPRO ataupun karyawan-karyawannya tidak bertanggung jawab dan tidak berhak untuk memberikan ganti rugi dan ketika terjadi pelanggaran Syarat dan Ketentuan ini, Syarat dan Ketentuan Peminjaman, atau Perjanjian lainnya dengan KREDITPRO yang akan mengatur mengenai penggunaan Pengguna atas Layanan, yang disebabkan oleh Pengguna. </p>
            <p><b>14.2</b> Perlu Pengguna ketahui bahwa pesan yang disampaikan melalui koneksi internet tidak dapat dijamin sepenuhnya keamanannya dan dapat saja tertahan, hilang atau mengalami perubahan. Kami tidak bertanggung jawab atas pesan yang hilang, diubah oleh pihak ketiga, atau tertahan dan kami tidak bertanggung jawab secara material kepada Pengguna atau siapa saja atas kerusakan atau hal lainnya sehubungan dengan pesan yang dikirim oleh Pengguna kepada kami atau kami kepada Pengguna melalui koneksi internet.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>15. PERISTIWA KEADAAN MEMAKSA</b>
            </p>
            <p>Tidak ada pihak yang harus bertanggung jawab atas setiap kegagalan pelaksanaan kewajibannya berdasarkan Syarat dan Ketentuan ini jika kegagalan tersebut diakibatkan oleh Peristiwa Keadaan Memaksa. Senantiasa dengan ketentuan bahwa bila memungkinkan, pihak yang terkena dampak akan melanjutkan pelaksanaan kewajiban tersebut segera setelah Peristiwa Keadaan Memaksa yang menyebabkan kegagalan tersebut berhenti atau mereda.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b> 16. GANTI RUGI</b>
            </p>
            <p>Pengguna sepakat untuk melepaskan, membebaskan dan mengganti kerugian KREDITPRO, afiliasinya, pemegang sahamnya, direktur, komisaris, karyawan, subkontraktor, pemasok, agen dari dan atas segala bentuk tuntutan, gugatan, klaim, kerugian, ganti rugi, termasuk biaya konsultan hukum, yang disebabkan oleh pelanggaran Syarat dan Ketentuan ini oleh Pengguna dan ketentuan lain yang ditetapkan oleh KREDITPRO.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>17. PENGAKHIRAN</b>
            </p>
            <p>Pengguna sepakat bahwa dalam hal terdapat pelanggaran yang Pengguna lakukan atas ketentuan dalam Syarat dan Ketentuan ini atau terhadap hukum yang berlaku, maka KREDITPRO dapat secara sepihak dengan atau tanpa pemberitahuan terlebih dahulu menghapus akun Pengguna pada Situs dan Aplikasi, membatasi akses Pengguna pada Situs dan Aplikasi, mengakhiri Layanan kepada Pengguna. Pengguna sepakat bahwa segala kerugian baik material ataupun immaterial yang timbul dari penghapusan akun dan/atau pembatasan akses Pengguna sebagaimana dimaksud di atas sepenuhnya merupakan tanggung jawab Pengguna.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>18. HUKUM YANG BERLAKU DAN PENYELESAIAN SENGKETA</b>
            </p>
            <p>Syarat dan Ketentuan ini dan setiap kewajiban non-kontraktual lain yang timbul dari atau sehubungan dengannya diatur oleh hukum negara Republik Indonesia. Pengguna sepakat bahwa segala tindakan hukum apapun atau sengketa yang mungkin timbul akibat sehubungan dengan penggunaan Situs dan Aplikasi akan diselesaikan dan diputuskan secara final pada Pengadilan Negeri Jakarta Selatan.</p>
          </div>
          <div className="mb-30 col-12 col-xl-11 col-lg-11 col-md-12 col-sm-12">
            <p className="mb-20">
              <b>19. HUBUNGI KAMI</b>
            </p>
            <p>Untuk informasi lebih lanjut, Pengguna menghubungi kami melalui layanan telepon pada +6221 30008789, layanan live chat atau layanan e-mail pada support@kreditpro.id</p>
          </div>
        </div>
        <div>
          <p className="text-right">Last update: 22/02/2019</p>
        </div>
      </div>
      <div>
        <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-2 mb-20">
          <Button
            className="c-primary pa-8 font-weight-bold"
            onClick={() => props.history.goBack()}
            style={buttonBack}
          >
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PrivacyPolicy);
