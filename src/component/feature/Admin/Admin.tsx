import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent";
import EventManager from "../Student/EventManager/EventManager";

const Admin = () => {
    const tabs:string[] = ["Home", "Manage Events", "Notice"];

    return(
        <div>
            <HeaderComponent tabs={tabs} />
            <EventManager />
        </div>
    )
};

export default Admin;