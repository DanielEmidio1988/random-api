import styled from "styled-components";

export const MainCard = styled.div`
    width: 300px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    border-radius: 8px;
    box-shadow: 3px 3px 1px #BB2649;
    
    div:first-child{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        width: 100%;
        padding-top: 8px;

        img{
            border: 1px solid black;
            padding: 2px;
            border-radius: 50%;
        }
    }

    div:last-child{
        width: 100%;
        padding-left: 12px;
        text-align: center;
        
        p{
            font-size: 12px;
            transition: transform .3s;          
        }

        p:hover{
            cursor: pointer;
            color: #BB2649;
            transform: scale(1.1);
        }
    }



`