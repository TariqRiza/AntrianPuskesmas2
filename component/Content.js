import Image from 'next/image';
import Link from 'next/link';
import {Pagi, Siang, Malam} from '../assets/img';

const Content = () => {
    return (
        <div className="flex-grow-1 my-5">
            <div className="d-flex flex-column justify-content-around">
                <h1 className="text-center display-4 font-weight-bold">Registrasi Online Puskesmas</h1>
                <h3 className="text-center display-5 font-weight-bold"> Silahkan Pilih Waktu Layanan</h3>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center mb-5">
                        <Link href="/Poli">
                            <a><Image width={300} height={300} src={Pagi} alt="Waktu Pagi"/></a>
                        </Link>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center mb-5">
                        <Link href="/Poli">
                            <a><Image width={300} height={300} src={Siang} alt="Waktu Siang"/></a>
                        </Link>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center mb-5">
                        <Link href="/Poli">
                            <a><Image width={300} height={300} src={Malam} alt="Waktu Malam"/></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;