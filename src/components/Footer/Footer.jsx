import React from 'react'
import './Footer.css'

function Footer(){
    return(
    <div className="footer">
        <footer className="page-footer font-small mdb-color pt-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">CIDIA Proyect</h6>
                        <p>
                            My name is Joaquin Pettinari. I'm studying informatic in UNAHUR almost IT technician.
                            I has been working as assistant student for a year and a half, and currently working in Botmaker for 1 mounth.

                            Thanks "The Movie DB" for let me use your api
                        </p>                        
                    </div>

                    <hr className="w-100 clearfix d-md-none"></hr>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Tecnology</h6>
                        <p><a href="#!">React</a></p>
                        <p><a href="#!">Mongo DB</a></p>
                        <p><a href="#!">Node js</a></p>
                        <p><a href="#!">MDBootstrap</a></p>
                    </div>

                    <hr className="w-100 clearfix d-md-none"></hr>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                        <p><a href="http://www.unahur.edu.ar/">UNAHUR</a></p>
                        <p><a href="https://mdbootstrap.com/">MDBootstrap</a></p>
                        <p><a href="https://www.themoviedb.org/">The Movie DB</a></p>
                        <p><a href="https://www.youtube.com/watch?v=vjf774RKrLc&list=LL&index=2&t=2542s">Build Restful Api</a></p>       
                    </div>

                    <hr className="w-100 clearfix d-md-none"></hr>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i className="fas fa-home mr-3"></i> Castelar, Buenos Aires, Argentina</p>
                        <p><i className="fas fa-envelope mr-3"></i> joaquipettinari@hotmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> +54 011 6151 - 1893</p>                        
                    </div>                    
                </div> 

                <hr/>

                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-left">© 2020 Copyright:
                            <strong> Joaquin Pettinari Licence</strong>
                        </p>
                    </div>

                    <div className="col-md-5 col-lg-4 ml-lg-0">

      
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/jcpettinari">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://github.com/JoaquinPettinari">
                                    <i className="fab fa-github"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.youtube.com/channel/UCGUQfvTq_bTJg0AFAdqt9nw?view_as=subscriber">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.linkedin.com/in/joaquin-salvador-pettinari-/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
      
                </div>
            </div>   
        </footer>
    </div>
    );
}

export default Footer;
