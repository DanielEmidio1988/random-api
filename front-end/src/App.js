import Router from "./routes/Router"
import { GlobalStyled } from "./GlobalStyled";
import {useState} from 'react'
import { GlobalContext } from "./context/GlobalContext";

function App() {

  const [users, setUsers] = useState([]) //Daniel: variavel para armazenar dados da API RandomUsers
  const [loading, setLoading] = useState(false) //Daniel: variavel para armazenar status de loading
  const [showModal, setShowModal] = useState(false) //Daniel: variavel para ativar os modais
  const [action, setAction] = useState('') //Daniel: variavel para definir o tipo de modal
  const [clients, setClients] = useState([]) //Daniel: variavel para armazenar dados da APi de Clientes Locais
  const [auth, setAuth] = useState(false) //Daniel: variavel para manter o usuário conectado a aplicação

  const context = {
    users,
    setUsers,
    loading,
    setLoading,
    showModal, 
    setShowModal,
    action,
    setAction,
    clients,
    setClients,
    auth,setAuth,
  }

  
  return (
    <>
      <GlobalStyled/>
      <GlobalContext.Provider value={context}>
        <Router/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
