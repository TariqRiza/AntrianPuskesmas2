import styles from '../styles/Isi.module.css'
import Navbar1 from '../component/Navbar1';

const PasienBaru = () => {
    return (
        <div className={styles.container}>
            <Navbar1/>

            <div className="flex-grow-1 my-5">
                <div className="d-flex flex-column justify-content-around">
                    <h3 className="text-center display-5 font-weight-bold"> Pendaftaran Pasien Baru</h3>
                </div>
                <div className="container">
                    <div className="column">
                        <form>
                            <div className="row mb-3">
                                <label for="NoPasien" className="col-sm-3 col-form-label">NIK (No.KTP)</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="NoPasien" placeholder="Silahkan masukan NIK anda"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="namaLengkap" className="col-sm-3 col-form-label">Nama Lengkap</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="namaLengkap" placeholder="Silahkan masukan nama lengkap anda"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="kepalaKeluarga" className="col-sm-3 col-form-label">Nama Kepala Keluarga</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="kepalaKeluarga" placeholder="Silahkan masukan nama kepala keluarga anda"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-3 col-form-label pt-0">Jenis Kelamin</div>
                                <div className="col-sm-9">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="jenisKelamin" id="laki" value="1" checked/>
                                        <label className="form-check-label" for="laki">Laki-laki</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="jenisKelamin" id="perempuan" value="2" checked/>
                                        <label className="form-check-label" for="perempuan">Perempuan</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="tglLahir" className="col-sm-3 col-form-label">Tanggal Lahir</label>
                                <div className="col-sm-9">
                                    <input type="date" className="form-control" id="tglLahir"/>
                                    <div className="fs-5 text text-muted">Pilih tanggal Lahir (Bulan/Tanggal/Tahun)</div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="alamat" className="col-sm-3 col-form-label">Alamat</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" id="alamat" placeholder="Silahkan masukan alamat anda"></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="kecamatan"className="col-sm-3 col-form-label">Kecamatan</label>
                                <div className="col-sm-9">
                                    <select className="form-control" id="kecamatan">
                                        <option selected>Pilih Kecamatan...</option>
                                        <option value="1">Kecamatan 01</option>
                                        <option value="2">Kecamatan 02</option>
                                        <option value="3">Kecamatan 03</option>
                                        <option value="4">Kecamatan 04</option>
                                        <option value="5">Kecamatan 05</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="kelurahan"className="col-sm-3 col-form-label">Kelurahan</label>
                                <div className="col-sm-9">
                                    <select className="form-control" id="kelurahan">
                                        <option selected>Pilih Kelurahan...</option>
                                        <option value="1">Kelurahan 01</option>
                                        <option value="2">Kelurahan 02</option>
                                        <option value="3">Kelurahan 03</option>
                                        <option value="4">Kelurahan 04</option>
                                        <option value="5">Kelurahan 05</option>
                                    </select>
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
        </div>
    );
};

export default PasienBaru;