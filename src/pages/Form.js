import './Form.css'

function Form() {

    const times = ['Programação','Front-end','Back-end','Data Science',
    'Devops','UX e Design','Mobile','Inovação e Gestão']

    return (

        <>
            <form className="form-style">

                <section className='form-container'>

                    <div className="form">
                        <label className="form-label label-form" htmlFor="nome">Nome</label>
                        <input type="text" id="nome" className="form-control input-form" />

                    </div>


                    <div className="form">
                        <label className="form-label label-form" htmlFor="cargo">Cargo</label>
                        <input type="text" id="cargo" className="form-control input-form" />

                    </div>







                    <div className="form" >
                        <label className="form-label label-form " htmlFor="time">Time</label>
                        <select className="form-select select-form" aria-label="Default select example">
                            <option value=''>Selecione um item</option>
                            {times.map((items,index) => 
                            <option key={index} value="items">{items}</option>
                            )}
                            
                       
                        </select>

                    </div>

                    <div className='container-button-form'>
                        <div className="form file-form-container ">
                            <button type="submit" className="btn btn-primary btn-block mb-4 button-form">Criar Card</button>
                        </div>
                        <div className="form file-form-container container-button-form">
                            <input type="file" id="imagem" className="file-form" style={{ padding: "5px" }} />
                        </div>

                    </div>

                </section>
            </form>

        </>

    )
}

export default Form