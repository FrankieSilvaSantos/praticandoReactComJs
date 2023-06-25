import axios from "axios"
import { useEffect, useState } from "react"
import './Editar.css'
import { MdBuild } from 'react-icons/md';
import { SiBitrise } from "react-icons/si";
import { useNavigate, useParams } from "react-router-dom";

function Editar() {

    const navigate = useNavigate()

    const times = ['Programação', 'Front-end', 'Back-end', 'Data Science',
        'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão']


    const [post, setPost] = useState({
        nome: '',
        cargo: '',
        imagem: '',
        time: '',
    })

    const params = useParams()

    const [post2, setPost2] = useState()

    function handleInput(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }


    function handleClick(e) {
        e.preventDefault()

        axios.put(`http://localhost:4000/cards/${params.id}`, post)

            .then((response) => {
                console.log(response)
            })

            .then(() => {
                setPost2(post)
            })

            .then(() => {
                if(localStorage.getItem('Front-end')) {
                setTimeout(() => navigate('/frontend'), 2000);
                }

                if(localStorage.getItem('programacao')) {
                    setTimeout(() => navigate('/programacao'), 2000);
                    }

                    if(localStorage.getItem('Back-end')) {
                        setTimeout(() => navigate('/backend'), 2000);
                        }

                        if(localStorage.getItem('Data Science')) {
                            setTimeout(() => navigate('/datascience'), 2000);
                            }

                            if(localStorage.getItem('Devops')) {
                                setTimeout(() => navigate('/devops'), 2000);
                                }

                                if(localStorage.getItem('design')) {
                                    setTimeout(() => navigate('/design'), 2000);
                                    }

                                    if(localStorage.getItem('Mobile')) {
                                        setTimeout(() => navigate('/mobile'), 2000);
                                        }

                                        if(localStorage.getItem('Inovação e Gestão')) {
                                            setTimeout(() => navigate('/inovacao'), 2000);
                                            }

            })



    }



    return (

        <>
            <form onSubmit={handleClick} className="form-style">

                <section className='form-container'>
                    <h1 className='titulo-form'>Preencha os dados para Editar o card do colaborador</h1>

                    <div className="form">
                        <label className="form-label label-form" htmlFor="nome">Nome</label>
                        <input type="text" placeholder='Digite o nome' id="nome" name="nome" className="form-control input-form"
                            pattern='[A-Z a-z]+' minLength={3} maxLength={18} required onChange={handleInput} />

                    </div>


                    <div className="form">
                        <label className="form-label label-form" htmlFor="cargo">Cargo</label>
                        <input type="text" id="cargo" name="cargo" className="form-control input-form"
                            pattern='[A-Z a-z]+' placeholder='Digite o cargo' minLength={5} maxLength={18} required onChange={handleInput} />

                    </div>

                    <div className="form">
                        <label className="form-label label-form" htmlFor="imagem">Imagem</label>
                        <input type="text" id="imagem" name="imagem" className="form-control input-form"
                            placeholder='Digite o url da imagem' required onChange={handleInput} />

                    </div>







                    <div className="form" >
                        <label className="form-label label-form " htmlFor="time">Time</label>

                        <select onChange={handleInput} defaultValue={'DEFAULT'} className="form-select select-form"
                            aria-label="Default select example" id="time" name="time" required >
                            <option value='DEFAULT' disabled>Selecione um item</option>
                            {times.map((items, index) => {
                                return <option key={index} value={items}>{items}</option>
                            })}



                  


                        </select>

                        <div className="form file-form-container ">
                                <button className="btn btn-primary btn-block mb-4 button-editar"><MdBuild className='icon-editar'></MdBuild> Editar</button>
                            </div>

                    </div>



                    {post2 && (
                        <div className='container-sucesso'>

                            <div class="alert alert-success container-sucesso" role="alert">
                                <SiBitrise className='icon-sucesso'></SiBitrise> Card Alterado com SUCESSO!!
                            </div>

                        </div>
                    )}



                </section>
            </form>

        </>

    )
}




export default Editar;