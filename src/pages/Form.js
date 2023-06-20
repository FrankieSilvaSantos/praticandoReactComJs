import { useState } from 'react';
import './Form.css';
import axios from 'axios';
import {SiBitrise} from "react-icons/si";

function Form() {

    // const times = ['Programação','Front-end','Back-end','Data Science',
    // 'Devops','UX e Design','Mobile','Inovação e Gestão']


    const [nome, setNome] = useState()
    const [nome2, setNome2] = useState()

    const [cargo, setCargo] = useState()
    const [cargo2, setCargo2] = useState()

    const [time, setTime] = useState()
    const [time2, setTime2] = useState()

    const [imagem, setimagem] = useState()
    const [imagem2, setimagem2] = useState()



    function handleClick(e) {
        e.preventDefault()




        axios.post('http://localhost:4000/cards', {


            nome,
            cargo,
            time,
            imagem,


        })

            .then((response) => {
                setNome2(nome)
                setCargo2(cargo)
                setTime2(time)
                setimagem2(imagem)
                console.log(response)
            })

            .then(() => {
                if (nome && cargo && time && imagem) {

                    setTimeout(() => window.location.reload(), 2000);
                }


            })



    }

    return (

        <>
            <form onSubmit={handleClick} className="form-style">

                <section className='form-container'>

                    <div className="form">
                        <label className="form-label label-form" htmlFor="nome">Nome</label>
                        <input type="text" placeholder='Digite o nome' id="nome" className="form-control input-form"
                            pattern='[A-Z a-z]+' minLength={9} maxLength={15} required onChange={((e) => {
                                setNome(e.target.value)
                            })} />

                    </div>


                    <div className="form">
                        <label className="form-label label-form" htmlFor="cargo">Cargo</label>
                        <input type="text" id="cargo" className="form-control input-form"
                            pattern='[A-Z a-z]+' placeholder='Digite o cargo' minLength={8} maxLength={15} required onChange={((e) => {
                                setCargo(e.target.value)
                            })} />

                    </div>

                    <div className="form">
                        <label className="form-label label-form" htmlFor="imagem">Imagem</label>
                        <input type="text" id="imagem" className="form-control input-form"
                            placeholder='Digite o url da imagem' required onChange={((e) => {
                                setimagem(e.target.value)
                            })} />

                    </div>







                    <div className="form" >
                        <label className="form-label label-form " htmlFor="time">Time</label>
                        <select className="form-select select-form"
                            aria-label="Default select example" required onChange={((e) => {
                                setTime(e.target.value)
                            })}>
                            <option value='' >Selecione um item</option>
                            {/* {times.map((items,index) =>  */}
                            <option value="Programação">Programação</option>
                            <option value="Front-end">Front-end</option>
                            <option value="Back-end">Back-end</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Devops">Devops</option>
                            <option value="UX e Design">UX e Design</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Inovação e Gestão">Inovação e Gestão</option>

                            {/* )} */}


                        </select>

                    </div>




                    <div className="form file-form-container ">
                        <button className="btn btn-primary btn-block mb-4 button-form">Criar Card</button>
                    </div>

                    {nome2 && cargo2 && time2 && imagem2 && (
                        <div className='container-sucesso'>

                            <div class="alert alert-success container-sucesso" role="alert">
                            <SiBitrise className='icon-sucesso'></SiBitrise> Card criado com SUCESSO!!
                            </div>

                        </div>
                    )}



                </section>
            </form>

        </>

    )
}

export default Form