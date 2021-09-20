const TableRow = (props) => {
    console.log(props.name);
    console.log("tabledata",props.title)
    return (
            <tr>
              <td>{props.title}</td>
              <td>{props.expense}</td>
            </tr>
    );

}

export default TableRow;