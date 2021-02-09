import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import "./Employee.css"


class Employee extends React.Component {
  render() {
    const  { del , edit , employee } = this.props;
    const { id, name, cpf, discount, dependents, salary} = employee;
    return(
      <section className="section" >
        <span>{ name } </span>
        <span>{ cpf } </span>
        <span>{ discount } </span>
        <span>{ dependents } </span>
        <span>{ salary }</span>
        <button onClick={ () => del(id)} > Delete </button>
        <button onClick={ () => edit(id) }  > Editar </button>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  del: (id) => dispatch(actions.delAssignment(id)),
  edit: (id) => dispatch(actions.editAssignment(id)),
});

export default connect(null,mapDispatchToProps)(Employee);
