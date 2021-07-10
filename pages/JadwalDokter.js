import { Table } from "react-bootstrap";
import Link from 'next/link';
import styles from '../styles/Isi.module.css'
import Navbar1 from '../component/Navbar1';

const JadwalDokter = () => {
    return (
        <div className={styles.container}>
            <Navbar1/>

            <div className="flex-grow-1 my-5">
                <div className="d-flex flex-column justify-content-around">
                    <h1 className="text-center display-4 font-weight-bold">Jadwal Harian Dokter</h1>
                </div>
                <div className="row justify-content-center m-5">
                    <div className="col-md-8 d-flex">
                        <Table responsive striped bordered hover size="sm" className="text-center">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th className="align-middle" rowSpan="2">Hari</th>
                                    <th className="align-middle" rowSpan="2" colSpan="2">Sesi</th>
                                    <th colSpan="3">Poli</th>
                                </tr>
                                <tr>
                                    <th>Umum</th>
                                    <th>Lansia</th>
                                    <th>Anak</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="align-middle" rowSpan="3">Senin</th>
                                    <th>Pagi</th>
                                    <th>08.00 - 11.00</th>
                                    <th>Dokter U1</th>
                                    <th>Dokter L1</th>
                                    <th>Dokter A1</th>
                                </tr>
                                <tr>
                                    <th>Siang</th>
                                    <th>13.00 - 16.00</th>
                                    <th>Dokter U2</th>
                                    <th>Dokter L2</th>
                                    <th>Dokter A2</th>
                                </tr>
                                <tr>
                                    <th>Malam</th>
                                    <th>18.00 - 21.00</th>
                                    <th>Dokter U3</th>
                                    <th>Dokter L3</th>
                                    <th>Dokter A3</th>
                                </tr>
                                <tr>
                                    <th colSpan="6"></th>
                                </tr>
                                <tr>
                                    <th className="align-middle" rowSpan="3">Selasa</th>
                                    <th>Pagi</th>
                                    <th>08.00 - 11.00</th>
                                    <th>Dokter U1</th>
                                    <th>Dokter L1</th>
                                    <th>Dokter A1</th>
                                </tr>
                                <tr>
                                    <th>Siang</th>
                                    <th>13.00 - 16.00</th>
                                    <th>Dokter U2</th>
                                    <th>Dokter L2</th>
                                    <th>Dokter A2</th>
                                </tr>
                                <tr>
                                    <th>Malam</th>
                                    <th>18.00 - 21.00</th>
                                    <th>Dokter U3</th>
                                    <th>Dokter L3</th>
                                    <th>Dokter A3</th>
                                </tr>
                                <tr>
                                    <th colSpan="6"></th>
                                </tr>
                                <tr>
                                    <th className="align-middle" rowSpan="3">Rabu</th>
                                    <th>Pagi</th>
                                    <th>08.00 - 11.00</th>
                                    <th>Dokter U1</th>
                                    <th>Dokter L1</th>
                                    <th>Dokter A1</th>
                                </tr>
                                <tr>
                                    <th>Siang</th>
                                    <th>13.00 - 16.00</th>
                                    <th>Dokter U2</th>
                                    <th>Dokter L2</th>
                                    <th>Dokter A2</th>
                                </tr>
                                <tr>
                                    <th>Malam</th>
                                    <th>18.00 - 21.00</th>
                                    <th>Dokter U3</th>
                                    <th>Dokter L3</th>
                                    <th>Dokter A3</th>
                                </tr>
                                <tr>
                                    <th colSpan="6"></th>
                                </tr>
                                <tr>
                                    <th className="align-middle" rowSpan="3">Kamis</th>
                                    <th>Pagi</th>
                                    <th>08.00 - 11.00</th>
                                    <th>Dokter U4</th>
                                    <th>Dokter L4</th>
                                    <th>Dokter A4</th>
                                </tr>
                                <tr>
                                    <th>Siang</th>
                                    <th>13.00 - 16.00</th>
                                    <th>Dokter U5</th>
                                    <th>Dokter L5</th>
                                    <th>Dokter A5</th>
                                </tr>
                                <tr>
                                    <th>Malam</th>
                                    <th>18.00 - 21.00</th>
                                    <th>Dokter U6</th>
                                    <th>Dokter L6</th>
                                    <th>Dokter A6</th>
                                </tr>
                                <tr>
                                    <th colSpan="6"></th>
                                </tr>
                                <tr>
                                    <th className="align-middle" rowSpan="3">Jum'at</th>
                                    <th>Pagi</th>
                                    <th>08.00 - 11.00</th>
                                    <th>Dokter U4</th>
                                    <th>Dokter L4</th>
                                    <th>Dokter A4</th>
                                </tr>
                                <tr>
                                    <th>Siang</th>
                                    <th>13.00 - 16.00</th>
                                    <th>Dokter U5</th>
                                    <th>Dokter L5</th>
                                    <th>Dokter A5</th>
                                </tr>
                                <tr>
                                    <th>Malam</th>
                                    <th>18.00 - 21.00</th>
                                    <th>Dokter U6</th>
                                    <th>Dokter L6</th>
                                    <th>Dokter A6</th>
                                </tr>
                                <tr>
                                    <th colSpan="6"></th>
                                </tr>
                                <tr>
                                    <th className="align-middle" rowSpan="3">Sabtu</th>
                                    <th>Pagi</th>
                                    <th>08.00 - 11.00</th>
                                    <th>Dokter U4</th>
                                    <th>Dokter L4</th>
                                    <th>Dokter A4</th>
                                </tr>
                                <tr>
                                    <th>Siang</th>
                                    <th>13.00 - 16.00</th>
                                    <th>Dokter U5</th>
                                    <th>Dokter L5</th>
                                    <th>Dokter A5</th>
                                </tr>
                                <tr>
                                    <th>Malam</th>
                                    <th>18.00 - 21.00</th>
                                    <th>Dokter U6</th>
                                    <th>Dokter L6</th>
                                    <th>Dokter A6</th>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-md-8 d-flex justify-content-center">
                        <Link href="/Sesi">
                            <a className="btn btn-info btn-lg" role="button">Selanjutnya</a>
                        </Link>
                    </div>
                </div>
            </div>
            <footer className="text-center bg-dark text-white">
                PNJ 2021
            </footer>
        </div>
    );
};

export default JadwalDokter;