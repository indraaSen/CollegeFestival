import styless from "./TableComponent.module.scss";

const TableComponent = (props:{tableData:any[] ; deleteStudData: (index:any)=> void}) => {

  const {tableData, deleteStudData} = props;

  return (
    <div>
      <table className={styless["table"]}>
        <tr>
          <th className={styless["th"]}>Student Name</th>
          <th className={styless["th"]}>Age</th>
          <th className={styless["th"]}>College</th>
          <th className={styless["th"]}>Branch</th>
          <th className={styless["th"]}>Gender</th>
          <th className={styless["th"]}>Action</th>
        </tr>
        {
          tableData.map((data, index)=>{
            return (
              <tr>
                <td className={styless["td"]}>{data.studName}</td>
                <td className={styless["td"]}>{data.age}</td>
                <td className={styless["td"]}>{data.college}</td>
                <td className={styless["td"]}>{data.branch}</td>
                <td className={styless["td"]}>{data.gender}</td>
                <td className={styless["td"]}>
                  <button onClick={()=>{deleteStudData(index)}}>delete</button>
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
};

export default TableComponent;
