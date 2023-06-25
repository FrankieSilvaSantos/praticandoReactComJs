import './DataScience.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SiUndertale } from 'react-icons/si';
import { MdBuild } from 'react-icons/md';
import { IoHeartDislikeSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';


function DataScience() {

    const [data, setData] = useState([])

    const [programacao, setProgramacao] = useState()




    function editar(index,time) {

            localStorage.setItem('id',index)
            localStorage.setItem('Data Science',time)
    }

    localStorage.clear()


    useEffect(() => {
        axios.get('http://localhost:4000/cards')
        .then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    },[])


    function deletar(index) {
        
  
                

                    

        return  axios.delete(`http://localhost:4000/cards/${index}`)
        
               .then(() => {
                    setTimeout(() => window.location.reload(),1000);
                    //    setProgramacao(programacao.filter(programacoes => programacoes.id !== index))
  
               })
            
          
      } 
    return (

        <section className='dataScience-background'>
            <section className='container-programacao'>
                <h1 className="titulo-programacao">Data Science</h1>
                <section className='container-border-programacao'>
                    <section className='container-border-dataScience2'></section>
                </section>



            
                    <section className="pt-5 pb-5 ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-6">

                                </div>
                               
                                <div className="col-12">



                                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                        <div className="carousel-inner">






                                            <div className="carousel-item active ">
                                                <div className="row ">
                                                    {data.filter((name) => name.time.includes('Data Science')).map((filteredtime) => (
                                           
                                                        <div key={filteredtime.id} className="col-md-4 mb-3 container-card-programacao">





                                                            <div className="card">
                                                                <div className='container-img-dataScience'>


                                                                    <img className="rounded-circle image-style" alt="imagem timee" src={filteredtime.imagem} height={'250px'} width={'300px'} />
                                                                </div>
                                                                <div className="card-body">
                                                                    <h4 className="card-title">{filteredtime.nome}</h4>
                                                                    <p className="card-text"><span className='span-programacao'><SiUndertale className="icon-dataScience"></SiUndertale> Cargo:</span> {filteredtime.cargo}</p>

                                                                    <div className=''>
                                                                        <div className='container-button'>
                                                                            
                                                                           <Link to={`/editar/${filteredtime.id}`}> <button type="button" onClick={(() => editar(filteredtime.id,filteredtime.time))} className="btn btn-primary button-dataScience-style"><MdBuild className='icon-time2'></MdBuild> Editar</button></Link>

                                                                                   
                                                                                        
                                                                            <button type='button'  className="btn btn-primary button-dataScience-style" onClick={(e) =>deletar(filteredtime.id)}>
                                                                                    <IoHeartDislikeSharp className='icon-dataScience2' ></IoHeartDislikeSharp> Deletar</button>
                                                                      
                                                                        
                                                                        </div>
                                                                    </div>

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
          


            </section>
        </section>

    )
}

export default DataScience;