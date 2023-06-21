import './Programacao.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {SiUndertale} from 'react-icons/si';

function Programacao() {

    const [data, setData] = useState([])

    const [programacao, setProgramacao] = useState(false)


    useEffect(() => {
     
        axios.get('http://localhost:4000/cards')
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
    }, [])




    function show() {







    }



    return (

        <>
            <section className='container-programacao'>
                <h1 className="titulo-programacao">Programação</h1>
                <section className='container-border-programacao'>
                    <section className='container-border-programacao2'></section>
                </section>



                <form onSubmit={show()}>
                    <section class="pt-5 pb-5 ">
                        <div class="container ">
                            <div class="row">
                                <div class="col-6">

                                </div>
                                <div class="col-6 text-right">
                                   

                                   
                                    <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                                        <i class="fa fa-arrow-left"></i>
                                    </a>
                                    <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                        <i class="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                                <div class="col-12">

                                        

                                    <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                                        <div class="carousel-inner">


                               


                                           
                                                <div  class="carousel-item active ">
                                                    <div class="row ">
                                                    {data.filter((name) => name.time.includes('Programação')).map(filteredtime => (
                                                        <div key={filteredtime.id} class="col-md-4 mb-3 ">





                                                    
                                                                    <div  class="card">
                                                                        <div className='container-img'>
                                                                           
                                                                       
                                                                        <img className="rounded-circle image-style" alt="imagem timee" src={filteredtime.imagem} height={'250px'} width={'300px'} />
                                                                        </div>
                                                                        <div class="card-body">
                                                                            <h4 class="card-title">{filteredtime.nome}</h4>
                                                                            <p class="card-text"><span className='span-programacao'><SiUndertale className="icon-time"></SiUndertale> Cargo:</span> {filteredtime.cargo}</p>
                                                                    </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                                   ))}
                                                            </div>
  
                                                        </div>




                                         


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>


            </section>
        </>

    )
}

export default Programacao;