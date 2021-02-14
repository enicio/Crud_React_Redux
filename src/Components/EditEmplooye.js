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
    const { name, cpf, discount, dependents, salary} = employeeToUpdate[0];

    this.setState({
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
    const { list , employeeid , update } = this.props;
    console.log(employeeid)

    const employeeToUpdate = list.filter( (employee) => employee.id === employeeid )
    const { id, name, cpf, discount, dependents, salary} = employeeToUpdate[0];

    return(
      <div className="editForm">
        <input name="name" onChange={ (event) => this.handleChange(event)}
               type="text" className="name" placeholder={ name } ></input>
        <input name="cpf" onChange={ (event) => this.handleChange(event)}
               type="text" className="cpf" placeholder={ cpf }></input>
        <input name="salary" onChange={ (event) => this.handleChange(event) }
               type="text" className="salary" placeholder={ salary }></input>
        <input name="discount" onChange={ (event) => this.handleChange(event) }
               type="text" className="discount" placeholder={ discount }></input>
        <input name="dependents" onChange={ (event) => this.handleChange(event) }
               type="text" className="dependents" placeholder={ dependents }></input>
        <button onClick={ () => update( id, this.state ) }> Salvar </button>
     </div>
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
