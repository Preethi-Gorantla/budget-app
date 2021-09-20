import TableRow from "./TableRow";

const Expenselist = (props) => {
  let actualData;
  const rows=[];
    console.log("4");
    console.log("ExpenseList", props.items);
    let data;
    for(let i=0; i<sessionStorage.length; i++){
      let key = `key ${i}`;
       data = sessionStorage.getItem(key);
      console.log("sessionStorgaei", data);
      const dataStr = JSON.parse(data);
       actualData=dataStr[0];
      console.log(actualData.title,actualData.amount);
      rows.push({
        title:actualData.title,
        id:key,
        amount:actualData.amount
      });
    }
    
    console.log("rows",rows);
    

    
    return (
      <div className="col-11 col-md-7 card mt-3 ">
        <h6>Expense History</h6>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Expense Title</th>
              <th scope="col">Expense Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
      <TableRow
        title={item.title}
        expense={item.amount}
        name={"Preethi"}
      />
    ))}
          </tbody>
        </table>
      </div>
    );

}

export default Expenselist;