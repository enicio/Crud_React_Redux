import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';

class List extends React.Component {
  render() {
    const { lista , del } = this.props;

    return(
      <div>
        <h1>OPS</h1>
        { lista.map( ( employee, index) =>
        <section key={ employee.id } onClick={ () => del(this.props.lista[index].id)} >
        <span>{ employee.name } </span>
        <span>{ employee.cpf } </span>
        <span>{ employee.discount } </span>
        <span>{ employee.dependents } </span>
        <span>{ employee.salary }</span>
        </section>) }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lista: state.listReducer,
});

const mapDispatchToProps = dispatch => ({
  del: (id) => dispatch(actions.delAssignment(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(List);
