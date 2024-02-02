import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent";
import EventManager from "../Student/EventManager/EventManager";
import styless from './Admin.module.scss';

const Admin = () => {
    const tabs:string[] = ["Home", "Manage Events", "Notice"];
    return(
        <div  className={styless['div-bgimage']}>
            <HeaderComponent tabs={tabs} />
            <EventManager />
        </div>
    )
};

export default Admin;