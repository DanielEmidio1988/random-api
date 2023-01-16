import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #BB2649;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        border-radius: 50%;
        width: 60px;
    }
`

export const BoxLogin = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 4px 4px 4px #9E213E;
    width: 50%;
    height: 60%;

    .errorLogin{
        font-size: 12px;
        color: #BB2649;
    }
    
    div:first-child{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 40%;
    }
   
    div:last-child{
        display: flex;
        justify-content: flex-start;
        align-items:center;
        gap: 10px;
        flex-direction: column;
        height: 60%;

        .rememberme{
            width: 100%;
            font-size: 12px;
            
            input{
                height: 20px;
            }
        }

        input{
            border-radius: 8px;
            height: 6vh;
            width: 50%;
            padding-left: 4px;
            border: ${props=>props.validate ? '1px solid #BB2649': 'none'};
        }

        input:hover{
            cursor: pointer;
            border-bottom: 2px solid #F06091;
        }

        input:focus{
            border-bottom: 2px solid #BB2649;        
            background-color: #F0F0F0;
            outline: none;
        }

        button{
            color: #fff;
            border-radius: 20px;
            width: 50%;
            height: 6vh;
            background-color: #F06091;
            border: none;
        }

        button:hover{
            cursor: pointer;
            background-color: #BB2649;
        }
    }`