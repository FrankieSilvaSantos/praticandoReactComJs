import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <>
            <section className='navbar-section'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar">
                    <div className="container-fluid container-navbar ">


                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse container-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav container-link ">
                                <Link className="nav-link" aria-current="page">Home</Link>
                                <a className="nav-link" href="#">Features</a>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Minha organização
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item drop-style" href="#">Programação</a></li>
                                        <li><a class="dropdown-item drop-style" href="#">Front-end</a></li>
                                        <li><a class="dropdown-item drop-style" href="#">Data Science</a></li>
                                        <li><a class="dropdown-item drop-style" href="#">Devops</a></li>
                                        <li><hr class="dropdown-divider drop-style"></hr></li>
                                        <li><a class="dropdown-item drop-style" href="#">UX e Design</a></li>
                                        <li><a class="dropdown-item drop-style" href="#">Mobile</a></li>
                                        <li><a class="dropdown-item drop-style" href="#">Inovação e Gestão</a></li>
                               
                            
                                    </ul>
                                    </li>

                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>

    )
}

export default Navbar;