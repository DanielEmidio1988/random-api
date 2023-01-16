import { useEffect, useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { GlobalContext } from "../../context/GlobalContext"
import { RandomUser_Url } from "../../constants/BASE_URL"
import Header from "../../components/Header/Header"
import CardUser from "../../components/CardUser/CardUser"
import { MainContainer, InputSearch, MainShowCard, BoxPage } from "../../constants/stylePageGlobal"
import { goToHomePagePage, goToLoginPage } from "../../routes/coordinator"

function HomePage (){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const params = useParams()
    const [search, setSearch] = useState("") //Daniel: variável que fará a busca do usuário
    const [numbMin, setNumbMin] = useState(0) //Daniel: variavel para auxiliar na quantidade total de itens na página
    const [perPage,setPerPage] = useState(20) //Daniel: variavel para armazenar total de itens por pagina
    const [lastPage, setLastPage] = useState(1) //Daniel: variavel para armazenar o numero da última página
    const [pageNumber, setPageNumber] = useState(1) //Daniel: variavel para armazenar o numero da página
    const [numberCard, setNumberCard] = useState('') ////Daniel: variavel para armazenar total de cadastros de usuários
    const startPage = (pageNumber * perPage)-21 //Daniel: variavel para armazenar a posição inicial do usuário que será renderizado na página
    const endPage = startPage + perPage //Daniel: variavel para armazenar a posição final do usuário que será renderizado na página


    //Daniel: callback para direcionar a página correta
    const handlePageTurn = (value)=>{
        if(value === 0){
            setPageNumber(1)
            setNumbMin(0)
            goToHomePagePage(navigate,1)
        }else if(value === lastPage){
            setPageNumber(lastPage)
            setNumbMin((lastPage -1)*perPage)
            goToHomePagePage(navigate,lastPage)
        }else{
            setPageNumber((pageNumber + value))
            setNumbMin(((pageNumber + value)-1)*perPage)
            goToHomePagePage(navigate,pageNumber+value)
        }
    }
    
    useEffect(()=>{
        if(params.results){
            setNumbMin(Number(params.results)*perPage)
            setPageNumber(Number(params.results))
        }
    },[])
    console.log('params', params)
    useEffect(()=>{
        browserUsers()
    },[pageNumber])

    //Daniel: este hook verificará o localStorage, caso não tenha nenhuma informação armazenada de login de usuário, ele retorna a página de login
    //Será utilizado em todas as páginas
    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem("tokenrandomapi")) 
        if(!context.auth){
            if(!token){
        goToLoginPage(navigate) 
        }
         }        
    },[])

    //Daniel: função para busca de usuários da Api Random Users
    const browserUsers = async()=>{
        //Daniel: caso exista usuários na base, a função será encerrada
        if(context.users.length > 1){
            return
        }       
        try{
            context.setLoading(true)
            const response = await axios.get(`${RandomUser_Url}/?results=5000`)
            const auxUser = [...response.data.results]
            setLastPage(Math.ceil(response.data.info.results / perPage))
            setNumberCard(response.data.info.results)
            context.setUsers(auxUser)
            context.setLoading(false)
        }catch(error){
            console.log(`Erro! ${error.data.name} não foi adicionado a base`)
            console.log(error)
            context.setLoading(false)
        }
    }

    return(
        <>
        <Header/>
        
        <MainContainer>

            <InputSearch>
                <input value={search} onChange={(event)=>setSearch(event.target.value)}placeholder="Pesquisar usuário"/>
                <p>Total de Usuários: {numberCard}</p>             
            </InputSearch>
            
            <MainShowCard>
                {context.loading ? 
                'Carregando' 
                : 
                search !== ''? 
                context.users && context.users?.filter((user)=>
                user.email.includes(search) || user.name.first.includes(search) || user.login.username.includes(search))
                .map((user) => (<CardUser
                    user={user}/>)
                )  
                :
                context.users && context.users?.filter((client, i)=> i > startPage && i <= endPage)
                .map((user) => (<CardUser
                user={user}/>)
                )}
            </MainShowCard>

            <BoxPage pageNumber={pageNumber} lastPage={lastPage}>
                {/* Daniel: Condicionais para renderizar os botões de acordo com a página atual */}
                {pageNumber !== 1 && <button onClick={()=>handlePageTurn(0)}>{"<<"}</button>
                }{pageNumber - 2 > 0 && <button onClick={()=>handlePageTurn(-2)}>{pageNumber - 2}</button>
                }{pageNumber - 1 > 0 && <button onClick={()=>handlePageTurn(-1)}>{pageNumber - 1}</button>}
                 <button>{pageNumber}</button>                   
                {pageNumber + 1 < lastPage && <button onClick={()=>handlePageTurn(1)}>{pageNumber + 1}</button>
                }{pageNumber + 2 < lastPage && <button onClick={()=>handlePageTurn(2)}>{pageNumber + 2}</button>
                }{pageNumber !== lastPage < lastPage && <button onClick={()=>handlePageTurn(lastPage)}>{">>"}</button>
            }
            </BoxPage>   

        </MainContainer>
        </>
    )
}

export default HomePage