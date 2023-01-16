export const goToLoginPage = (navigate)=>{
    navigate("/")
}

export const goToHomePage= (navigate)=> {
    navigate("/main")
}

export const goToHomePagePage = (navigate, page)=> {
    navigate(`/main/${page}`)
}

export const goToHTTPCatPage = (navigate)=> {
    navigate(`/main/httpcat`)
}

export const goToRandomDog = (navigate)=> {
    navigate('/main/randomdog')
}

export const goToRegisterClient = (navigate)=>{
    navigate('/main/cadastro_cliente')
}

export const goToDetailsClient = (navigate, cpfClient)=>{
    navigate(`/main/cadastro_cliente/${cpfClient}`)
}