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
 

  render() {
    const { update } = this.props;
    const  employee  = this.state;
    const { id, name, cpf, discount, dependents, salary} = employee;

    return(
      // <section className="editForm">
        <form className="editForm" onSubmit={this.handleSubmit} >
          <input name="name" onChange={ (event) => this.handleChange(event)}
                type="text" className="name" placeholder={ name } required />
          <input name="cpf" onChange={ (event) => this.handleChange(event)}
                type="text" className="cpf" placeholder={ cpf } required />
          <input name="salary" onChange={ (event) => this.handleChange(event) }
                type="number" className="salary" placeholder={ salary } required />
          <input name="discount" onChange={ (event) => this.handleChange(event) }
                type="number" className="discount" placeholder={ discount } required />
          <input name="dependents" onChange={ (event) => this.handleChange(event) }
                type="number" className="dependents" placeholder={ dependents } required />
          <button type="submit" onClick={ () => update( id, this.state ) }> Salvar </button>
        </form>
    //  </section>
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
