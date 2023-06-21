import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <>
            <section className='navbar-section'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar">
                    <div className="container-fluid container-navbar ">
                    <a class="navbar-brand" href="#"><img className='img-form' src='./img/Logo.png'></img></a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse container-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav container-link ">
                                <Link className="nav-link" aria-current="page">Home</Link>
                                <a className="nav-link" href="#">Features</a>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Minha organização
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item drop-style" href="#">Programação</a></li>
                                        <li><a className="dropdown-item drop-style" href="#">Front-end</a></li>
                                        <li><a className="dropdown-item drop-style" href="#">Data Science</a></li>
                                        <li><a className="dropdown-item drop-style" href="#">Devops</a></li>
                                        <li><hr className="dropdown-divider drop-style"></hr></li>
                                        <li><a className="dropdown-item drop-style" href="#">UX e Design</a></li>
                                        <li><a className="dropdown-item drop-style" href="#">Mobile</a></li>
                                        <li><a className="dropdown-item drop-style" href="#">Inovação e Gestão</a></li>
                               
                            
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