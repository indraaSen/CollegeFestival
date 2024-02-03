import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent"
import ListComponent from "../../../module/ListComponent/ListComponent";
import EventManager from "../Student/EventManager/EventManager";

const College = () =>{

    const tabs:string[] = ["Home", "Events", "Notice", "Particepents"];

    return(
        <div>
            <HeaderComponent tabs={tabs}/>
            <EventManager />
        </div>
    )
}

export default College;

// import TableComponent from "../../module/TableComponent/TableComponent";

// const College = (props:{studData: any[], setStudData: React.Dispatch<any>}) => {
//     const {studData, setStudData} = props;

//     const deleteStudData = (index:any) =>{
//         console.log("index", index);
//         const newArr = studData.filter((data, newIndex) => {
//             if(index !== newIndex)
//                 return data;
//         });
//         setStudData(newArr);
//     }
    
//     return(
//         <div>
//             <h1>college component</h1>
//             <TableComponent tableData={studData} deleteStudData={deleteStudData}/>
//         </div>
//     )
// };

// export default College;