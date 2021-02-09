import React from "react";
import './HeaderTable.css'


class HeaderTable extends React.Component {
  render() {
    return(
      <section >
        <table className="table">
          <thead>
            <tr>
              <th id='tableName' >Nome</th>
              <th id='tablecpf' >CPF</th>
              <th>Salário</th>
              <th>Desconto</th>
              <th>Dependentes</th>
              <th>Desconto IRPF</th>
            </tr>
          </thead>
        </table>
      </section>
    );
  }
}

export default HeaderTable;