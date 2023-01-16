import { MainCard} from "./styleCardUser"

function CardUser(props){

    return(
        <>
        
        <MainCard>
            
            <div>
                <img src={props.user.picture.large} alt="foto-usuario"/>
                <h2>{props.user.name.first + " " + props.user.name.last}</h2>
                <p>{props.user.login.username}</p>
            </div>
            <div>
            <p>E-mail: {props.user.email}</p>
            <p>Idade: {props.user.dob.age}</p>
            </div>

        </MainCard>
        </>
    )

}

export default CardUser