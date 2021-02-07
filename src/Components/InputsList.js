import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
     };
  }

  handleChange(event) {
    this.setState({
      id: Math.random() + 1,
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target)
  //   const name = this.getName.value;
  //   const cpf = this.getCPF.value;
  //   const salary = this.getSalary.value;
  //   const discount = this.getDiscount.value;
  //   const dependents = this.getDependents.value;
  //   console.log(name, cpf, salary, discount, dependents);

  //   this.setState({
  //     id: Math.random(),
  //     name: name,
  //     cpf: cpf,
  //     salary: salary,
  //     discount: discount,
  //     dependents: dependents,
  //   })

  // }

  render() {
    console.log(this.state)
    const { add } = this.props;
    console.log(this.props)
    const { name , cpf , salary , discount , dependents  } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Nome
        <input
          ref={(input)=>this.getName = input}
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
          ref={(input)=>this.getCPF = input}
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
          ref={(input)=>this.getSalary = input}
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
          ref={(input)=>this.getDiscount = input}
          value={discount}
          name='discount'
          type="number"
          onChange={ (event) => this.handleChange(event)}
        />
        </label>
        <label>
          Número de dependentes
        <input
          ref={(input)=>this.getDependents = input}
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
