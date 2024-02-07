import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent"
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
