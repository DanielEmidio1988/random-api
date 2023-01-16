import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import Header from "../../components/Header/Header"
import NewClient from "../../components/Modal/NewClient/NewClient"
import { ClientBase_Url } from "../../constants/BASE_URL"
import { MainContainer, BoxIntroClient, MainShowBoxClient, BoxClient} from "../../constants/stylePageGlobal"
import trash from "../../assets/icons/trash.svg"
import { useNavigate } from "react-router-dom"
import { goToDetailsClient, goToLoginPage } from "../../routes/coordinator"

function RegisterClient (){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const [search, setSearch] = useState('') //Daniel: variavel para campo de busca de clientes

    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem("tokenrandomapi")) 
        if(!context.auth){
            if(!token){
        goToLoginPage(navigate) 
        }
         }        
    },[])

    useEffect(()=>{
        browserClients()
    },[])

    //Daniel: callback para listar clientes da base de dados
    const browserClients = async ()=>{
        
        try{
            const response = await axios.get(`${ClientBase_Url}/cadastro_cliente`)
            const auxClients = [...response.data] 
            context.setClients(auxClients)
        }catch(error){
            console.log('Erro ao carregar Base de Clientes.\nVerifique!')
            console.log(error)
        }
    }

    //Daniel: callback para ativar o modal de cadastro de clientes
    const RegisterNewClient = ()=>{
        context.setShowModal(true)
        context.setAction("newClient")
    }

    //Daniel: callback para deletar cliente da base de dados
    const deleteClient =async (client)=>{

        context.setLoading(true)
        try{
        await axios.delete(`${ClientBase_Url}/cadastro_cliente/${client.cpf}`)
        const searchClient = context.clients.filter((cli)=> cli !== client)
        context.setClients(searchClient)
        context.setLoading(false)
        }catch(error){
            console.log('Erro ao excluir cliente.\nVerifique!', error)
            context.setLoading(false)
        }
    }

    return(
        <>
        
        {context.showModal && context.action === "newClient" ? <NewClient clients={context.clients} setClients={context.setClients}/> : ''}
        <Header/>

        <MainContainer>
           
           <BoxIntroClient>
                <div>
                    <h3>Cadastro de Clientes</h3>
                </div>
                <div>           
                    <button onClick={()=>RegisterNewClient()}>Cadastrar Cliente</button>  
                    <input value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Pesquisar cliente"/>                  
                </div>
            </BoxIntroClient>

            <MainShowBoxClient>

                <BoxClient>
                    <div>
                        <span>NOME</span>
                        <span>E-MAIL</span>
                        <span>CPF</span>
                        <span></span>
                    </div>

                    {context.clients.filter((client)=> client.name.includes(search) || client.email.includes(search) ).map((client)=>{ return(
                    <div className="client">
                        <span onClick={()=>goToDetailsClient(navigate, client.cpf)}>{client.name}</span>
                        <span onClick={()=>goToDetailsClient(navigate, client.cpf)}>{client.email}</span>
                        <span onClick={()=>goToDetailsClient(navigate, client.cpf)}>{client.cpf}</span>
                        <span><img src={trash} onClick={()=>deleteClient(client)} alt="Deletar Cliente"/></span>
                    </div>)})}
                </BoxClient>

            </MainShowBoxClient>

        </MainContainer>

        </>
    )
}

export default RegisterClient