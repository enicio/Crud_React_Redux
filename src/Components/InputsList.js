import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
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
      shouldRedirect: false,
     };

     this.updateStatesAndEnableRedirect = this.updateStatesAndEnableRedirect.bind(this);

  }

  handleChange(event) {
    this.setState({
      id: Math.random() + 1,
      [event.target.name]: event.target.value
    })
  }

  updateStatesAndEnableRedirect() {
    this.setState({
      shouldRedirect: true,
    })
  }

  render() {
    const { add } = this.props;
    const { name , cpf , salary , discount , dependents , shouldRedirect  } = this.state;

    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className="fields">
        <section className="subtitle">
          <h1>Cadastro de Usuário</h1>
        </section>
        <section className="addUser">
          <Link to="/"> Usuários cadastrados </Link>
        </section>
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
            Salário Bruto
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
        <button onClick={ () => { add(this.state); this.updateStatesAndEnableRedirect(); } }>
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
