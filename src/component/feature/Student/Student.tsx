
import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent";
import ListComponent from "../../../module/ListComponent/ListComponent";

const Student = () => {

  const tabs:string[] = ["Home", "Events", "Notice"];
  
  return (
    <div>
     <HeaderComponent tabs={tabs}/>
     <ListComponent/>
    </div>
  )
};

export default Student;


// import { useReducer } from "react";
// import InputComponent from "../../module/InputComponent/InputComponent";
// import RadioButtonComponent from "../../module/RadioButtonComponent/RadioButtonComponent";
// import ButtonComponent from "../../module/ButtonComponent/ButtonComponent";
// import styless from './Student.module.scss';

// const initialState = {
//   studName: "",
//   age: 0,
//   college: "",
//   branch: "",
//   gender: "",
// };

// const reducerFun = (state: any, action: any) => {
//   switch (action.type) {
//     case "setStudName":
//       return { ...state, studName: action.payload.studName };
//     case "setAge":
//       return { ...state, age: action.payload.age };
//     case "setCollege":
//       return { ...state, college: action.payload.college };
//     case "setBranch":
//       return { ...state, branch: action.payload.branch };
//     case "setGender":
//       return { ...state, gender: action.payload.gender };
//     default:
//       console.log("this is error from the reducer function");
//       break;
//   }
// };

// const Student = (props: {studData: any[], setStudData: React.Dispatch<any>}) => {
//   const {setStudData, studData } = props;
//   const gender = ["male", "female"];

//   const inputComp = [
//     {
//       inputType: "text",
//       placeholder: "studentName",
//       inputValue: ".studentName",
//       typeOfInput: "setStudName",
//       payload: "studName",
//     },
//     {
//       inputType: "number",
//       placeholder: "studentAge",
//       inputValue: ".age",
//       typeOfInput: "setAge",
//       payload: "age",
//     },
//     {
//       inputType: "text",
//       placeholder: "studentCollege",
//       inputValue: ".college",
//       typeOfInput: "setCollege",
//       payload: "college",
//     },
//     {
//       inputType: "text",
//       placeholder: "studentBranch",
//       inputValue: ".branch",
//       typeOfInput: "setBranch",
//       payload: "branch",
//     },
//   ];

//   const [state, dispatch] = useReducer<(state: any, action: any) => any>(
//     reducerFun,
//     initialState
//   );

//   const validateForm = () => {
//     console.log(state);
//     // setStudData(state);
//     // console.log("stud data from student ", studData);
//     setStudData([...studData, state]);
//   };

//   return (
//     <div>
//       <h1>student component</h1>
//       <div className={styless['main_div']}>
//         {inputComp.map((value) => (
//           <InputComponent
//             inputType={value.inputValue}
//             placeholder={value.placeholder}
//             inputValue={state[value.inputValue]}
//             inputOnChange={(inputValue: string) =>
//               dispatch({
//                 type: value.typeOfInput,
//                 payload: { [value.payload]: inputValue },
//               })
//             }
//           />
//         ))}

//         {gender.map((value) => {
//           return (
//             <RadioButtonComponent
//               name="gender"
//               value={value}
//               setGender={(inputValue: string) =>
//                 dispatch({ type: "setGender", payload: { gender: inputValue } })
//               }
//             />
//           );
//         })}
//         <ButtonComponent validateForm={validateForm} />
//       </div>
//     </div>
//   );
// };

// export default Student;
