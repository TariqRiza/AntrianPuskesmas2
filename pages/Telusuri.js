import styles from '../styles/Isi.module.css'
import Navbar1 from '../component/Navbar1';

const Telusuri = () => {
    return (
        <div className={styles.container}>
            <Navbar1/>

            <div className="flex-grow-1 my-5">
                <div className="d-flex flex-column justify-content-around">
                    <h3 className="text-center display-5 font-weight-bold"> Cari Informasi Pendaftaran</h3>
                </div>
                <div className="container">
                    <div className="column">
                        <form>
                            <div className="row mb-3">
                                <label for="NoRegistrasi" className="col-sm-3 col-form-label">NIK (No.KTP) / No.Registrasi</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="NoRegistrasi" placeholder="Silahkan masukan NIK atau Nomor Registrasi anda"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Cari</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Telusuri;