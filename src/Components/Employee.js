import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import "./Employee.css"

class Employee extends React.Component {

  PortionToBeDeductedAndAliquot(salary) {
    if ( salary < 1903.98 ) return [ 0 , 0 ];
    if ( salary > 1903.99 || salary < 2826.65 ) return [ 0.075 , 142.80 ];
    if ( salary > 2826.66 || salary < 3715.05 ) return [ 0.15 , 354.80 ];
    if ( salary > 3751.06 || salary < 4664.68 ) return [ 0.225 , 636.13 ];
    if ( salary > 4664.68 ) return [ 0.275 , 869.36 ];
  }

  salaryBase( salary, discount, quantityOfDependents ) {
    const aliquotAndPortion = this.PortionToBeDeductedAndAliquot(salary)
    const deductionPerDependent = 164.56;
    const SalaryBaseIR = ( salary - discount - deductionPerDependent ) * quantityOfDependents;
    const discountIRRF = ( SalaryBaseIR ) * aliquotAndPortion[0] - aliquotAndPortion[1]
    return (
      <span>{ discountIRRF }</span>
    );
  };

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
          { this.salaryBase( salary, discount, dependents ) }
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
