import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import Employee from './employee'
import EditEmplooye from "./EditEmplooye";
import "./List.css";

class List extends React.Component {
  render() {
    const { list } = this.props;
    console.log(list)
    return(
      <div>
        {/* <h1>Lista de funcionários</h1> */}
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
