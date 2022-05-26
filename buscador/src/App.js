import { FiSearch } from 'react-icons/fi';
import './style.css';


function App() {
  return (
    <div className="container">
        <h1 className="title">Buscador de CEP</h1>

        <div className="containerInput">
          <input type='text' placeholder="Escreva seu cep..."/>
          <button className="buttonSearch" type='submit'>
            <FiSearch size={25} color='#FFF'/>
          </button>
        </div>

        <main className='main'>

          <h2>CEP: 52050340</h2>
          <span>rua teste</span>
          <span>complemento: 1234</span>
          <span>bairro teste</span>
          <span>cidade - uf</span>

        </main>

    </div>
  );
}

export default App;
