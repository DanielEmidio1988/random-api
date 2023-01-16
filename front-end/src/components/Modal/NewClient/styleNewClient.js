import styled from "styled-components";

export const MainModal = styled.div`
    border-radius: 8px;
    border: 1px solid black;
    background-color: white;
    width: 30%;
    min-width: 300px;
    position: absolute;
    top: 30%;
    left: 30%;
    padding: 8px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     
    h3{
        margin-bottom: 12px;
    }
    p{
        font-size: 12px;
    }

    .errorRegister{
        color: red;
        font-size: 14px;
        margin-bottom: 8px;
    }

    input{
        width: 80%;
        height: 4vh;
        text-align: center;
        border-radius: 8px;
        background-color: #F7DDAB;
        border: 1px solid #EDD4A4;
        margin-bottom: 2vh;
        }
    
        input:hover{
            border-bottom: 2px solid #BB2649;
            cursor: pointer;
    
        }
    
        input:focus{   
            background-color: #F2D8A7;
            outline: none;
        }

        .RegisterButton, .CancelButton{
            width: 100px;
            height: 4vh;
            border: none;
            border-radius: 8px;
            color: #fff;
            background-color: #BB2649; 
        }

        .RegisterButton:hover, .CancelButton:hover{
            cursor: pointer;
            background-color: #F06091;
        }
    }

    div:last-child{
        flex-direction: row;
        gap: 2vw;
    }

`