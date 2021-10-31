import React, { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('{nome}');
  const [age, setAge] = useState('{idade}');


  return (
    <main>
      <header>
        <h1>Meu nome é {name ? name : '{nome}'}!</h1>
        <p>Tenho {age ? age : '{idade}'} anos e quer ser um Blinger!</p>
      </header>


      <footer>
        <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Idade" onChange={(e) => setAge(e.target.value)} />
      </footer>
    </main>

  );
}

export default App;
