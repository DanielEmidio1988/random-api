import Header from "../../components/Header/Header"
import {useState, useEffect, useContext } from "react"
import { MainContainer, BoxIntro, MainShowCard, CardPet, Button, InputSearch } from "../../constants/stylePageGlobal"
import cat from "../../assets/img/cat.png"
import notfound from "../../assets/img/notfoundhttpcode.gif"
import { goToLoginPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"

function HTTPCat (){

    const [status, setStatus] = useState('')
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem("tokenrandomapi")) 
        if(!context.auth){
            if(!token){
        goToLoginPage(navigate) 
        }
         }        
    },[])

    //Daniel: callback para busca da imagem de gatos
    const browserCat = async (statusHttp)=>{
        try{
            await fetch(`https://http.cat/${statusHttp}`, {
                method: 'GET',
                mode: 'no-cors',
              });
            setSearch(statusHttp)         
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <Header/>
        <MainContainer>

            <BoxIntro>
                <div>
                    <img src={cat} alt="icone-gato"/>
                </div>
                <div>
                    Informe o status code abaixo para visualizar a imagem.
                </div>               
            </BoxIntro>

            <InputSearch>
                <input value={status} onChange={(event)=>setStatus(event.target.value)}placeholder="Informe o HTTP Code desejado" maxLength={3}/>
                <Button onClick={()=>browserCat(status)}>Buscar</Button>  
            </InputSearch>

            <MainShowCard>
                <CardPet>
                    {search === '' ? <img src={notfound} alt="Status Quote Cats"/> : <img src={`https://http.cat/${search}`} alt="Status Quote Cats"/>}                        
                </CardPet>
            </MainShowCard>

        </MainContainer>

        </>
    )
}

export default HTTPCat