import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import "./EditEmplooye.css"

class EditEmplooye extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      cpf: '',
      salary: '',
      discount: '',
      dependents: '',
      editing: false,
     };

     this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    const { list , employeeid } = this.props;
    const employeeToUpdate = list.filter( (employee) => employee.id === employeeid )
    const { id, name, cpf, discount, dependents, salary} = employeeToUpdate[0];

    this.setState({
      id : id,
      name: name,
      cpf: cpf,
      salary: salary,
      discount: discount,
      dependents: dependents,
      editing: false,
     });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit( id ) {
    const { update } = this.props;
    update( id, this.state)
  }

  render() {
    const  employee  = this.state;
    const { id, name, cpf, discount, dependents, salary} = employee;

    return(
        <form className="editForm" onSubmit={ () => this.handleSubmit( id )} >
          <input value={ name } name="name" onChange={ (event) => this.handleChange(event)}
                type="text" className="name" placeholder={ name } required />
          <input value={ cpf } name="cpf" onChange={ (event) => this.handleChange(event)}
                type="text" className="cpf" placeholder={ cpf } required />
          <input value={ salary } name="salary" onChange={ (event) => this.handleChange(event) }
                type="number" className="salary" placeholder={ salary } required />
          <input value={ discount } name="discount" onChange={ (event) => this.handleChange(event) }
                type="number" className="discount" placeholder={ discount } required />
          <input value={ dependents } name="dependents" onChange={ (event) => this.handleChange(event) }
                type="number" className="dependents" placeholder={ dependents } required />
          <button type="submit" > Salvar </button>
        </form>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
});

const mapDispatchToProps = dispatch => ({
  update: (id, data) => dispatch(actions.updateAssignment(id, data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(EditEmplooye);
