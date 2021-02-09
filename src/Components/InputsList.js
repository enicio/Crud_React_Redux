import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './InputList.css'
class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      cpf: '',
      salary: '',
      discount: '',
      dependents: '',
      editing: false,
     };
  }

  handleChange(event) {
    this.setState({
      id: Math.random() + 1,
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { add } = this.props;
    const { name , cpf , salary , discount , dependents  } = this.state;
    return (
      <div className="fields">
        <form className="forms" onSubmit={this.handleSubmit}>
        <label>
          Nome
        <input
          value={name}
          name='name'
          type="text"
          placeholder="Digite o nome"
          onChange={ (event) => this.handleChange(event)}
        />
        </label>
        <label>
          CPF
        <input
          value={cpf}
          name='cpf'
          type="text"
          placeholder="Digite a cpf"
          onChange={ (event) => this.handleChange(event)}
        />
        </label>
        <label>
          Salário
        <input
          value={salary}
          name='salary'
          type="number"
          placeholder="Digite o salário"
          onChange={ (event) => this.handleChange(event)}
        />
        </label>
        <label>
          Desconto da previdência
        <input
          value={discount}
          name='discount'
          type="number"
          onChange={ (event) => this.handleChange(event)}
        />
        </label>
        <label>
          Número de dependentes
        <input
          value={dependents}
          name='dependents'
          type="number"
          onChange={ (event) => this.handleChange(event)}
        />
        </label>
        </form>
        <button onClick={() => add(this.state)}>
          Adicionar Usuário
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: (data) => dispatch(actions.addAssignment(data)),
});

export default connect(null, mapDispatchToProps)(InputsList);
