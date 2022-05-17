import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class ListaContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tarefas: [],
      inputTarefa: ""
    };

    this.addTarefa = (ev) => {
      ev.preventDefault();
      const tarefas = this.state.tarefas.slice();
      tarefas.push(this.state.inputTarefa);
      this.setState({
        tarefas: tarefas,
        inputTarefa: ""
      });
    };

    this.removeTarefa = (index) => {
      const tarefas = this.state.tarefas.slice();
      tarefas.splice(index, 1);
      this.setState({tarefas});
    };

    this.onChange = (ev) => {
      ev.preventDefault();
      const state = Object.assign({}, this.state);
      state[ev.target.name] = ev.target.value;
      this.setState(state);
    };
  }

  render(){
    return (
      <ListaView
      tarefas={this.state.tarefas}
      inputTarefa={this.state.inputTarefa}
      onChange={this.onChange}
      addTarefa={this.addTarefa}
      removeTarefa={this.removeTarefa} />
    );
  }
}

const ListaView = (props) => (
  <div>
  <h1>Lista de Tarefas</h1>
  <input type="text" name="inputTarefa" placeholder='Digite nome da tarefa' value={props.inputTarefa} onChange={props.onChange} />
  <button type="submit" onClick={props.addTarefa}>Add</button>
  {
    props.tarefas.map((tarefa, index) => (
    <p>
      {index+1} - {tarefa} 
      <button className='botaoexcluir' style={{cursor:"pointer"}} onClick={() => props.removeTarefa(index)}> excluir</button>
      </p>
      ))
  }
</div>
);




ReactDOM.render(
  <ListaContainer />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
