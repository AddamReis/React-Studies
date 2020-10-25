import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tarefa: '',
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        let state = this.state;
        if (this._tarefaInput.value !== '') {
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };
            this.setState({ items: [...state.items, newItem] });
        }

        this.setState({ tarefa: '' });
        e.preventDefault();
    }

    deleteItem(key){
        let filtro = this.state.items.filter((item)=>{
            return(item.key !== key); //retorna somente os itens que forem diferentes do parametro
        })

        this.setState({items: filtro});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Nova Tarefa?" name="tarefa"
                        value={this.state.tarefa}
                        onChange={(e) => this.setState({ tarefa: e.target.value })}
                        ref={(e) => this._tarefaInput = e} />
                    <button type="submit"> Adicionar </button>
                </form>
                <TodoItems lista={this.state.items} delete={this.deleteItem} />
            </div>
        );
    }
}

export default TodoList;