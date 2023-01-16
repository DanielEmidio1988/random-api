import Header from "../../components/Header/Header"
import { goToRegisterClient, goToLoginPage } from "../../routes/coordinator"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { MainContainer, TokenRegister, BoxPageDetails } from "../../constants/stylePageGlobal"
import { ClientBase_Url } from "../../constants/BASE_URL"
import axios from "axios"

function DetailsClient(){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const params = useParams()
    const cpfClient = params.id

    //Daniel: variavel auxiliar para armazenar o cliente selecionado
    const [form, setForm] = useState({
        name: "",
        email: "",
        adress: "",
        phone: "",
        cpf:0,
        }
    )

    useEffect(()=>{
        updateToken(context.clients)
    },[])

    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem("tokenSharenergy")) 
        if(!context.auth){
            if(!token){
        goToLoginPage(navigate) 
        }
         }        
    },[])

    //Daniel: callback para acessar dados do cliente individual
    const updateToken = (clients)=>{
        const updateClient = clients.filter((client)=>client.cpf == cpfClient).map((client)=> {return client})
        setForm(updateClient[0])  
    }

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    //Daniel: callback para atualizar dados do cliente
    const updateClientToken = async (client)=>{
        context.setLoading(true)

        let body = {
            name: form.name,
            email: form.email,
            adress: form.adress,
            phone: form.phone,
            cpf: Number(form.cpf),
            }
        try{
            await axios.put(`${ClientBase_Url}/cadastro_cliente/${client.cpf}`, body)
            const auxClients = context.clients.filter((cli)=> cli !== client)
            auxClients.push(body)
            context.setClients(auxClients) //Daniel: esta ação é necessária para que o usuário consiga visualizar a atualização da base sem recarregar a página
            context.setLoading(false)
            goToRegisterClient(navigate)

        }catch(error){
            console.log('Erro ao atualizar ficha de cliente.\nVerifique!', error)
            context.setLoading(false)
        }
    }


    return(
        <>
        <Header/>
        <MainContainer>
            
            <div>
                <h3>Cadastro de Cliente</h3>          
            </div>

                            <TokenRegister>
                                <div>
                                    <p>Nome Completo</p>
                                    <input value={form.name} name="name" onChange={onChangeForm}/>
                                </div>
                                <div>
                                    <p>CPF</p>
                                    <input value={form.cpf} name="cpf" onChange={onChangeForm}/>                                
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
                            </TokenRegister>

            <BoxPageDetails>
                <button  onClick={()=>updateClientToken(form)}>Atualiza Cliente</button>
                <button  onClick={()=>goToRegisterClient(navigate)}>Cancelar</button>
            </BoxPageDetails>

        </MainContainer>
        </>
    )
}

export default DetailsClient