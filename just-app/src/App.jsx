import "./App.css";

function App() {
  return (
    <div>
      <Ustudy name="Подрочи мне" year="18"></Ustudy>
    </div>
  );
}

function Ustudy({ name, year }) {
  return (
    <p>
      Hey, {name}
      <br />
      <a href="www.youtube.com">Мне {year} лет</a>
    </p>
  );
}
export default App;
