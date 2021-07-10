import { Table } from "react-bootstrap";
import styles from '../styles/Isi.module.css'
import Navbar1 from '../component/Navbar1';

const Antrian = () => {
    return (
        <div className={styles.container}>
            <Navbar1/>

            <div className="flex-grow-1 my-5">
                <div className="d-flex flex-column justify-content-around">
                    <h1 className="text-center display-4 font-weight-bold">Antrian Saat Ini</h1>
                </div>
                <div className="row justify-content-center m-5">
                    <div className="col-md-6 d-flex">
                        <Table striped bordered hover size="sm">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th width="6%">No</th>
                                    <th>Poli</th>
                                    <th>Antrian</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Umum</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Lansia</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Anak</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                
            </div>
            
            <footer className="text-center bg-dark text-white">
                PNJ 2021
            </footer>
        </div>
    );
};

export default Antrian;