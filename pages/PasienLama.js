import styles from '../styles/Isi.module.css'
import Navbar1 from '../component/Navbar1';

const PasienLama = () => {
    return (
        <div className={styles.container}>
            <Navbar1/>

            <div className="flex-grow-1 my-5">
                <div className="d-flex flex-column justify-content-around">
                    <h3 className="text-center display-5 font-weight-bold"> Pendaftaran Pasien Lama</h3>
                </div>
                <div className="container">
                    <div className="column">
                        <form>
                            <div className="row mb-3">
                                <label for="NoPasien" className="col-sm-3 col-form-label">NIK (No.KTP) / No.Kartu Pasien</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="NoPasien" placeholder="Silahkan masukan NIK atau Nomor Kartu Pasien anda"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="tglKunjungan" className="col-sm-3 col-form-label">Tanggal Kunjungan</label>
                                <div className="col-sm-9">
                                    <input type="date" className="form-control" id="tglKunjungan"/>
                                    <div className="fs-5 text text-muted">Pilih tanggal Kunjungan (Bulan/Tanggal/Tahun)</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="jenisBayar"className="col-sm-3 col-form-label">Jenis Bayar</label>
                                <div className="col-sm-9">
                                    <select className="form-control" id="jenisBayar">
                                        <option selected>Pilih jenis bayar...</option>
                                        <option value="tunai">Tunai</option>
                                        <option value="bpjs">BPJS</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="NoBPJS" className="col-sm-3 col-form-label">No.BPJS</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="NoBPJS" placeholder="Silahkan masukan Nomor BPJS jika menggunakan BPJS"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Daftar</button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="text-center bg-dark text-white">
            PNJ 2021
            </footer>
        </div>
    );
};

export default PasienLama;