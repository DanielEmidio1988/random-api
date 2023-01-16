
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from "../../routes/coordinator" 
import { GlobalContext } from '../../context/GlobalContext'
import {MainContainer, BoxLogin} from "./styleLoginPage"
import logo from "../../assets/img/icon-daniel.png"

function LoginPage (){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        login: "",
        password: "",
    }) //Daniel: formulário para armazenar dados de login e senha
    const [validatePass, setValidatePass] = useState(false) //Daniel: variavel para ativar mensagem de login/senha incorretos
    const [checkBox, setCheckBox] = useState(false) //Daniel: variavel para ativar o checkbox de Lembre-me.

    //Daniel: callback para ativar o login
    const login = ()=>{
        if(form.login === 'admin' && form.password === 'ADMIN123'){        
            if(checkBox){
            const tokenrandomapi = JSON.stringify(form)
            window.localStorage.setItem("tokenrandomapi", tokenrandomapi)
            setCheckBox(false)
            }
            setValidatePass(false)
            context.setAuth(true)
            goToHomePage(navigate)
        }else{
            setValidatePass(true)
        }      
    }
    
    const onChangeCheckBox = (event)=>{
        const auxCheckBox = !checkBox
        setCheckBox(auxCheckBox)
    }
   
    const onChangeForm = (event)=>{
        setForm({...form,[event.target.name]:event.target.value})
    }

    //Daniel: este hook fará com que o usuário seja redirecionado a Home Page caso tenha ativado "lembre-me" quando logou
    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem("tokenrandomapi")) 
        if(token){
        goToHomePage(navigate) 
         }        
    },[])

    
    return (
        <>
        <MainContainer>
            <BoxLogin validate={validatePass}>

                <div>
                    <img src={logo} alt="Logo-Daniel"/>
                    <h2>LOGIN</h2>
                    <p>Acesse sua conta</p>
                </div>

                <div>
                        <input value={form.login} name="login" onChange={onChangeForm} placeholder="Insira seu e-mail"/>
                        <input value={form.password} name="password" onChange={onChangeForm} type='password' placeholder="Insira sua senha"/>
                        {validatePass ? <p className='errorLogin'>E-mail ou senha incorreto!</p> : ''}
                        <button onClick={()=>login()}>Login</button>

                        <div className="rememberme">
                            <input type="checkbox" name="rememberme" value={checkBox} onChange={onChangeCheckBox}/>
                            <label for="rememberme">Lembre-me!</label>
                        </div> 
                </div>
            </BoxLogin>
        </MainContainer>
        </>
    )
}

export default LoginPage