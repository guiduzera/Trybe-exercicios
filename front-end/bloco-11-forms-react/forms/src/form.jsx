import React from "react";
import './form.css';
import Info from './infopessoal/nome'
import Email from './infopessoal/email'
import Cpf from './infopessoal/cpf'
import Endereco from './infopessoal/endereco'
import Cidade from './infopessoal/cidade'
import Estado from './infopessoal/estado'
import Radio from './infopessoal/radio'

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleState = this.handleState.bind(this)
        this.state = {
            nome: '',
            email: '',
            CPF: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
        }
    }

    handleState({ target }) {
        const { name, value } = target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <fieldset className="form-container">
                <h2>Meu formulario</h2>
                <div className="form-group">
                    <Info value={this.state.nome} handleState={this.handleState}/>
                    <Email value={this.state.email} handleState={this.handleState}/>
                    <Cpf value={this.state.CPF} handleState={this.handleState}/>
                    <Endereco value={this.state.endereco} handleState={this.handleState}/>
                    <Cidade value={this.state.cidade} handleState={this.handleState}/>
                    <Estado value={this.state.estado} handleState={this.handleState}/>
                    <Radio value={this.state.tipo} handleState={this.handleState}/>
                </div>
            </fieldset>
        );
    }
}

export default Form;
