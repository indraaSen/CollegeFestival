interface radioType {
    name: string;
    value: string;
    setGender: (inputValue:string) => void
}
const RadioButtonComponent = (props: radioType) => {
    const {name, value,setGender  } = props;
    return(
        <div>
            <input type="radio" name = {name} id={value} value={value} onChange={(e)=>setGender(e.target.value)} /> 
            <label htmlFor={value}>{value}</label>
            
        </div>
    );
}

export default RadioButtonComponent;