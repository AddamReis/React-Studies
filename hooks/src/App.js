import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Aprender C#',
    'Aprender HTML',
    'Aprender CSS'
  ]);

  const [input, setInput] = useState('');

  //DidMounth
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage.toUpperCase()));
    }
  }, []); //executa função somente na construção da tela

  //DidUpdate
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]); //toda vez que ocorrer alguma alteração sobre o array de tarefas, executa a função

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input])
    setInput('');
  }, [tarefas, input]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map(data => (
          <li key={data}> {data}</li>
        ))}
      </ul>
      < br />
      <strong>Você tem {totalTarefas} tarefas!</strong>
      < br />
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
