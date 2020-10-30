import React from 'react'

function Footer(){
    return(
    <div>
        <footer class="page-footer font-small mdb-color pt-4">
            <div class="container text-center text-md-left">
                <div class="row text-center text-md-left mt-3 pb-3">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">CIDIA Proyect</h6>
                        <p>
                            My name is Joaquin Pettinari. I'm studying informatic in UNAHUR almost IT technician.
                            I has been working as assistant student for a year and a half, and currently working in Botmaker for 1 mounth.

                            Thanks "The Movie DB" for let me use your api
                        </p>                        
                    </div>

                    <hr class="w-100 clearfix d-md-none"></hr>

                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Tecnology</h6>
                        <p><a href="#!">React</a></p>
                        <p><a href="#!">Mongo DB</a></p>
                        <p><a href="#!">Node js</a></p>
                        <p><a href="#!">MDBootstrap</a></p>
                    </div>

                    <hr class="w-100 clearfix d-md-none"></hr>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                        <p><a href="http://www.unahur.edu.ar/">UNAHUR</a></p>
                        <p><a href="https://mdbootstrap.com/">MDBootstrap</a></p>
                        <p><a href="https://www.themoviedb.org/">The Movie DB</a></p>
                        <p><a href="https://www.youtube.com/watch?v=vjf774RKrLc&list=LL&index=2&t=2542s">Build Restful Api</a></p>       
                    </div>

                    <hr class="w-100 clearfix d-md-none"></hr>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i class="fas fa-home mr-3"></i> Castelar, Buenos Aires, Argentina</p>
                        <p><i class="fas fa-envelope mr-3"></i> joaquipettinari@hotmail.com</p>
                        <p><i class="fas fa-phone mr-3"></i> +54 011 6151 - 1893</p>                        
                    </div>                    
                </div> 

                <hr/>

                <div class="row d-flex align-items-center">
                    <div class="col-md-7 col-lg-8">
                        <p class="text-center text-md-left">© 2020 Copyright:
                            <strong> Joaquin Pettinari Licence</strong>
                        </p>
                    </div>

                    <div class="col-md-5 col-lg-4 ml-lg-0">

      
                        <div class="text-center text-md-right">
                            <ul class="list-unstyled list-inline">
                                <li class="list-inline-item">
                                <a class="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/jcpettinari">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                </li>
                                <li class="list-inline-item">
                                <a class="btn-floating btn-sm rgba-white-slight mx-1" href="https://github.com/JoaquinPettinari">
                                    <i class="fab fa-github"></i>
                                </a>
                                </li>
                                <li class="list-inline-item">
                                <a class="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.youtube.com/channel/UCGUQfvTq_bTJg0AFAdqt9nw?view_as=subscriber">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                </li>
                                <li class="list-inline-item">
                                <a class="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.linkedin.com/in/joaquin-salvador-pettinari-/">
                                    <i class="fab fa-linkedin-in"></i>
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
