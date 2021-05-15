import { Component } from "react";
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

export default Table;