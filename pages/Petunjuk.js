import Image from 'next/image';
import styles from '../styles/Isi.module.css'
import Navbar1 from '../component/Navbar1';
import {PetunjukDaftar} from '../assets/img';

const Petunjuk = () => {
    return (
        <div className={styles.container}>
            <Navbar1/>

            <div className="flex-grow-1 my-5">
                <div className="d-flex flex-column justify-content-around">
                    <h1 className="text-center display-4 font-weight-bold">Petunjuk Registrasi Antrian</h1>
                </div>
                <div className="container mt-5">
                    <div className="col-md-12 d-flex justify-content-center mb-5">
                        <Image width={2560} height={1232} src={PetunjukDaftar} alt="Petunjuk Daftar"/>
                    </div>
                </div>
            </div>


            <footer className="text-center bg-dark text-white">
                PNJ 2021
            </footer>
        </div>
    );
};

export default Petunjuk;