import React from 'react';
import ReactTable from 'react-table';
import FoldableHoc from '../hoc/foldableTable';
import draggableColumnsHOC, {DragMode} from 'react-table-hoc-draggable-columns';
import 'react-table-hoc-draggable-columns/dist/styles.css';

// const Ftable = draggableColumnsHOC(FoldableHoc(ReactTable));
const Ftable = draggableColumnsHOC(ReactTable);

export default class FoldableTableWithHeader extends React.Component {

  getData = () => [{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
  }, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "ip_address": "229.179.4.212"
  }, {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female",
    "ip_address": "180.66.162.255"
  }, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male",
    "ip_address": "67.76.188.26"
  }];

  render() {
    return (
      <Ftable
        draggableColumns={{
          mode: DragMode.REORDER,
          draggable: ['first_name', 'last_name', 'Name', 'Info'],
          enableColumnWideDrag: false,
          disableTableScroll: true,
          useDragImage: true,
          onDraggedColumnChange: cols => console.log('new order', cols),
          onDropSuccess: (draggedColumn, targetColumn, oldIndex, newIndex, oldOffset, newOffset) => {
            console.log(draggedColumn, targetColumn, oldIndex, newIndex, oldOffset, newOffset);
          }
        }}
        data={this.getData()}
        columns={[{
          Header: "Name",
          foldable: true,
          columns: [
            {
              Header: "First Name",
              accessor: "first_name"
            },
            {
              Header: "Last Name",
              accessor: "last_name"
            }
          ]
        }, {
          Header: "Info",
          foldable: true,
          columns: [
            {
              Header: "Email",
              accessor: "email"
            },
            {
              Header: "Gender",
              accessor: "gender"
            }
          ]
        }]
        }></Ftable>
    );
  }
}
