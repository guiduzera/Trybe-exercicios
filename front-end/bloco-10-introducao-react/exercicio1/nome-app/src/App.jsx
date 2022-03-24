const tarefas = ['fazer as compras', 'estudar', 'lavar a louca'];

const task = (value) => {
  const mapa = value.map((iten) => <li>{iten}</li>)
  return mapa
};

function App() {
  return (
    <ul>{task(tarefas)}</ul>
  );
};

export default App;


