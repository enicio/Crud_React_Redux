import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import "./Employee.css"
import { salaryBase } from '../functions/functions'

class Employee extends React.Component {

  render() {
    const  { del , edit , employee } = this.props;
    const { id, name, cpf, discount, dependents, salary} = employee;
    return(
      <div className="dataAndButtons">
        <section className="section" >
          <span id="name">{ name } </span>
          <span id="cpf">{ cpf } </span>
          <span id="salary">{ salary }</span>
          <span id="discount">{ discount } </span>
          <span id="dependents">{ dependents } </span>
          { salaryBase( salary, discount, dependents ) }
        </section>
        <section className="buttonsDeleteAndEdit">
          <button onClick={ () => del(id)} > Delete </button>
          <button onClick={ () => edit(id) }  > Editar </button>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  del: (id) => dispatch(actions.delAssignment(id)),
  edit: (id) => dispatch(actions.editAssignment(id)),
});

export default connect(null,mapDispatchToProps)(Employee);
