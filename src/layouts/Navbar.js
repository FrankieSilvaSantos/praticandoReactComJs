import './Navbar.css'
import { Link, useParams } from 'react-router-dom';

function Navbar() {

    const params = useParams()

    return (

        <>
            <section className='navbar-section'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar">
                    <div className="container-fluid container-navbar ">
                    <a className="navbar-brand" href="#"><img className='img-form' src='./img/Logo.png'></img></a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse container-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav container-link ">
                                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                               
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Minha organização
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item drop-style" to='/programacao'>Programação</Link></li>
                                        <li><Link className="dropdown-item drop-style" to='/frontend'>Front-end</Link></li>
                                        <li><Link className="dropdown-item drop-style" to='/datascience'>Data Science</Link></li>
                                        <li><Link className="dropdown-item drop-style" to='/devops'>Devops</Link></li>
                                        <li><hr className="dropdown-divider drop-style"></hr></li>
                                        <li><Link className="dropdown-item drop-style" to={'/design'}>UX e Design</Link></li>
                                        <li><Link className="dropdown-item drop-style" to='/mobile'>Mobile</Link></li>
                                        <li><Link className="dropdown-item drop-style" to='/inovacao'>Inovação e Gestão</Link></li>
                               
                            
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