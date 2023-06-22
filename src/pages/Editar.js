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
                setTimeout(() => navigate('/programacao'), 2000);

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
                            pattern='[A-Z a-z]+' minLength={9} maxLength={18} required onChange={handleInput} />

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

                    </div>


                    {localStorage.getItem('programacao') && (

                        <div className="form file-form-container ">
                            <button className="btn btn-primary button-programacao-style"><MdBuild className='icon-time2'></MdBuild> Editar</button>
                        </div>

                    )}



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