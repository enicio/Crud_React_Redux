import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import Employee from './Employee'
import EditEmplooye from "./EditEmplooye";
import { Link } from 'react-router-dom';
import HeaderTable from './HeaderTable'
import "./List.css";


class List extends React.Component {
  render() {
    const { list } = this.props;
    return(
      <div>
        <section className="subtitle" >
          <h1>Lista de Usuários </h1>
        </section>
        <section className="addUser">
          <Link to='/inpustlist'> Cadastrar Novo Usuário </Link>
        </section>
        <HeaderTable />
        { list.map( ( employee ) =>
          (employee.editing )
            ? < EditEmplooye key={ employee.id } employeeid={ employee.id } />
            : <Employee key={ employee.id } employee={ employee } />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
});

const mapDispatchToProps = dispatch => ({
  del: (id) => dispatch(actions.delAssignment(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(List);
