import axios from "axios"
import { useContext, useState } from "react"
import { GlobalContext } from "../../../context/GlobalContext"
import { MainModal } from "./styleNewClient"
import { ClientBase_Url } from "../../../constants/BASE_URL"

function NewClient(props){

    const context = useContext(GlobalContext)
    const [form, setForm] = useState({
        name: "",
        email: "",
        adress: "",
        phone: "",
        cpf:"",
        }
    ) //Daniel: variavel auxiliar para carregar as informações de cliente
    const [validatePass, setValidatePass] = useState(false) //Daniel: variavel para ativar mensagem de Cadastro não preenchido

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    //Daniel: callback para criar novo cliente na base
    const createNewClient =()=>{
        //Daniel: variavel para relacionar as variaveis declarada na base de dados no Back End com o Front End
        let body = {
        name: form.name,
        email: form.email,
        adress: form.adress,
        phone: form.phone,
        cpf: Number(form.cpf),
        }

        if(form.name === '' || form.email === '' || form.adress === '' || form.phone === '' || form.cpf === ''){
            setValidatePass(true)
            return
        }

        try{
            const auxClients = [...props.clients]
            axios.post(`${ClientBase_Url}/cadastro_cliente`,body)
            auxClients.push(form)
            props.setClients(auxClients)
            context.setShowModal(false)
        }catch(error){
            console.log('Erro', error)
            context.setShowModal(false)
        }        
    }

    return(
        <>
        <MainModal>
            <div>
                <h3>Novo Cliente</h3>
            </div>
            <div>
                <p>Nome Completo</p>
                <input value={form.name} name="name" onChange={onChangeForm}/>
            </div>

            <div>
                <p>E-mail</p>
                <input value={form.email} name="email" onChange={onChangeForm}/>
            </div>

            <div>
                <p>Telefone</p>
                <input value={form.phone} name="phone" onChange={onChangeForm}/>
            </div>

            <div>
                <p>Endereço</p>
                <input value={form.adress} name="adress" onChange={onChangeForm}/>
            </div>

            <div>
                <p>CPF</p>
                <input value={form.cpf} name="cpf" onChange={onChangeForm}/>
            </div>
            <div>
            {validatePass ? <p className='errorRegister'>Preencher todos os campos!</p> : ''}
            </div>
            <div>
                <button onClick={()=>createNewClient()} className="RegisterButton">Cadastrar</button>
                <button onClick={()=>context.setShowModal(false)} className="CancelButton">Cancelar</button>
            </div>
        </MainModal>
        </>
    )
}

export default NewClient