import styled from "styled-components";

//Daniel: estilização de Container Global de Páginas
export const MainContainer = styled.div`
    padding-top: 2%;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`

//Daniel: estização do campo de busca da página Home
export const InputSearch = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p{
        margin-bottom: 20px;
    }

    input{
    width: 40%;
    height: 4vh;
    text-align: center;
    border-radius: 8px;
    background-color: #F7DDAB;
    border: 1px solid #EDD4A4;
    transition: width .3s;
    margin-bottom: 2vh;
    }

    input:hover{
        width: 50%;
        cursor: pointer;
    }

    input:focus{
        width: 50%;     
        background-color: #F2D8A7;
        outline: none;
    }
`

export const TokenRegister = styled.div`
    width: 100%;
    padding: 2vh 0 0 2vw;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-itens: center;

        input{
            width: 60%;
            height: 4vh;
            text-align: center;
            border-radius: 8px;
            background-color: #F7DDAB;
            border: 1px solid #EDD4A4;
            transition: width .3s;
            margin-bottom: 2vh;
            }
        
            input:hover{
                width: 50%;
                cursor: pointer;      
            }
        
            input:focus{
                width: 50%;     
                background-color: #F2D8A7;
                outline: none;
            }
    }
`

//Daniel: estilização da primeira seção do campo de busca e cadastro na página "Cadastro de Clientes"
export const BoxIntroClient = styled.div`
    width: 100%;
    padding: 0 4vw 0 2vw;
    margin-bottom: 30px;

    h3{
        color: #BB2649;
    }

    button{
        color: #fff;
        border-radius: 8px;
        width: 140px;
        height: 6vh;
        background-color: #BB2649;
        border: none;
        margin: 20px 0 20px 0;
    }


    button:hover{
        cursor: pointer;
        background-color: #F06091;
    }

    div:last-child{
        display: flex;
        justify-content: space-between;
        align-items: center;

        input{
            width: 40%;
            height: 4vh;
            text-align: center;
            border-radius: 8px;
            background-color: #F7DDAB;
            border: 1px solid #EDD4A4;
            transition: width .3s;
            margin-bottom: 2vh;
            }
        
            input:hover{
                width: 50%;
                cursor: pointer;     
            }
        
            input:focus{
                width: 50%;     
                background-color: #F2D8A7;
                outline: none;
            }
    }       
    `
//Daniel: estilização da seção da tabela de informações de clientes na página "Cadastro de Clientes"
export const MainShowBoxClient = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

//Daniel: estilização da tabela de dados de clientes na página "Cadastro de Clientes"
export const BoxClient = styled.div`
    width: 80%;
    border-radius: 8px;
    border: 1px solid #E8E8E8;
    box-shadow: 2px 2px 1px #BB2649;

    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        :hover{
            color: #BB2649;
            cursor: pointer;
        }
    }

    div:first-child{
        background-color: #E8E8E8;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .client{
        width: 98%;
        border-bottom: 1px solid #E8E8E8;
    }

    span{
        width:32%;
        padding: 0 2vw 0 2vw;

        img{
            width: 20px;
        }

        img:hover{
            cursor: pointer;
        }
        :last-child{
            width: 4%;
        }
    }
    `

export const MainShowCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2vw;
    `

//Daniel: Estilização botões de página da RandomUser
export const Button = styled.button`   
        color: #fff;
        border-radius: 20px;
        width: 100px;
        height: 4vh;
        background-color: #BB2649;
        border: none;
        margin: 20px 0 20px 0;

    :hover{
        cursor: pointer;
        background-color: #F06091;
    }
`

//Daniel: estilização para cards das páginas RandomDog e HTTPCat
export const CardPet = styled.div`
    border: 1px solid #F06091;
    border-radius: 12px;
    padding: 12px;
    box-shadow: 3px 3px 1px #BB2649;

    img{
        max-width: 300px;
    }
`

export const BoxSelect = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px 0 0 0;
    
    select{
        width: 40%;
        height: 4vh;
        text-align: center;
        border-radius: 8px;
        background-color: #F7DDAB;
        border: 1px solid #EDD4A4;
        margin-bottom: 2vh;
        }
    
        input:hover{
            cursor: pointer;
    
        }
    
        input:focus{   
            background-color: #F2D8A7;
            outline: none;
        }`

export const BoxIntro = styled.div`
    font-size: 14px;

    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

//Daniel: Estilização para box de páginas
export const BoxPage = styled.div`
    display: flex;
    gap: 0.5vw;
    button{
        color: #fff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background-color: #BB2649;
        border: none;
        margin: 20px 0 20px 0;
    }

    button:hover{
        cursor: pointer;
        background-color: #F06091;
}
`

//Daniel: estilização para Box
export const BoxPageDetails = styled.div`
    display: flex;
    gap: 0.5vw;

    button{
        color: #fff;
        border-radius: 8px;
        width: 120px;
        height: 30px;
        background-color: #BB2649;
        border: none;
    }


    button:hover{
        cursor: pointer;
        background-color: #F06091;
}
`