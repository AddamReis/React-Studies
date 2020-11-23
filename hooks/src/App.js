import React, { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Aprender C#',
    'Aprender HTML',
    'Aprender CSS'
  ]);

  const [input, setInput] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('');

    console.log(tarefas);
  }

  return (
    <div>
      <ul>
        {tarefas.map(data => (
          <li key={data}> {data}</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
