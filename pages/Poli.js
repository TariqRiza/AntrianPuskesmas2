import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Isi.module.css'
import Navbar1 from '../component/Navbar1';
import {Anak, Lansia, Umum} from '../assets/img';

const Poli = () => {
    return (
      <div className={styles.container}>
        <Navbar1/>

        <div className="flex-grow-1 my-5">
          <div className="d-flex flex-column justify-content-around">
            <h1 className="text-center display-4 font-weight-bold">Registrasi Online Puskesmas</h1>
            <h3 className="text-center display-5 font-weight-bold"> Silahkan Pilih Jenis Layanan</h3>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center mb-5">
                <Link href="/Pasien">
                  <a><Image width={300} height={300} src={Umum} alt="Poli Umum"/></a>
                </Link>
              </div>
              <div className="col-md-4 d-flex justify-content-center mb-5">
                <Link href="/Pasien">
                  <a><Image width={300} height={300} src={Lansia} alt="Poli Lansia"/></a>
                </Link>
              </div>
              <div className="col-md-4 d-flex justify-content-center mb-5">
                <Link href="/Pasien">
                  <a><Image width={300} height={300} src={Anak} alt="Poli Anak"/></a>
                </Link>
              </div>
            </div>
          </div>
          <div className="m-5">
            <h3 className="text-start display-5 font-weight-bold"> Daftar Poli Tujuan</h3>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="font-weight-bold">UMUM</div>
                  Pasien dengan penyakit gejala umum
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="font-weight-bold">LANSIA</div>
                  Pasien dengan usia lebih besar dari 60 tahun
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="font-weight-bold">ANAK</div>
                  Pasien dengan usia 1 bulan - 17 tahun
                </div>
              </li>
            </ol>
          </div>
        </div>

        <footer className="text-center bg-dark text-white">
          PNJ 2021
        </footer>
      </div>
    );
};

export default Poli;