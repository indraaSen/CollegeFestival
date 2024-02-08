import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent"
import EventManager from "../EventManager/EventManager";

const College = () =>{

    const tabs:string[] = ["Home", "Events", "Notice", "Particepents"];

    return(
        <div>
            <HeaderComponent tabs={tabs}/>
            <h1>this is for college professors</h1>
            <EventManager />
        </div>
    )
}

export default College;
