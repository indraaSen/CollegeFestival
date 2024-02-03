import CardComponent from "../../../../module/CardComponent/CardComponent"
import styless from './EventManager.module.scss';
import singing from '../../../Images/RanuMondal.jpeg';
import dancing from '../../../Images/dancing.jpg';
import standup from '../../../Images/standUp.png';
import hiddentalent from '../../../Images/hiddenTalent.jpeg';
import award from '../../../Images/award.jpeg';
import fashionshow from '../../../Images/fashionShow.jpg';
import djdancing from '../../../Images/DjDancing.jpg'
import moment from "moment";

const EventManager = () =>{
    
    return(
        <div style={{backgroundImage: 'url('+ require("../../../Images/bgImageEvent2.jpg")+')',backgroundSize:'cover',backgroundPosition:'center' ,height:'100%',backgroundRepeat:'no-repeat',marginTop:'-50px'}}>
            <div className={styless['div-card_alignment1']}>
                <CardComponent eventProgram={'Singing'} cardColor={'green'} cardImage={singing} eventDate={'02/02/2024'}/>
                {/* <p className={styless['circle1']}></p> */}
                <div className={styless["container"]}></div>
                {/* <p className={styless['circle2']}></p> */}
                <CardComponent eventProgram={'Dancing'} cardColor={'green'} cardImage={dancing} eventDate={'03/02/2024'}/>
                {/* <p className={styless['circle3']}></p> */}
                <div className={styless["container"]}></div>
                {/* <p className={styless['circle4']}></p> */}
                <CardComponent eventProgram={'Stand-Up Comdedy'} cardColor={'yellow'} cardImage={standup} eventDate={'04/02/2024'}/>
            </div>

            <div  className={styless['div-verticalLine-outer']}>
                <div className={styless['div-verticalLine-inner']}></div>
            </div>

            <div className={styless['div-card_alignment2']}>
                
                <CardComponent eventProgram={'Award Ceremony'} cardColor={'red'} cardImage={award} eventDate={'06/02/2024'}/>
                {/* <p className={styless['circle1']}></p> */}
                <div className={styless["container"]}></div>
                {/* <p className={styless['circle2']}></p> */}
                <CardComponent eventProgram={'Fashion Show'} cardColor={'red'} cardImage={fashionshow} eventDate={'07/02/2024'}/>
                {/* <p className={styless['circle3']}></p> */}
                <div className={styless["container"]}></div>
                {/* <p className={styless['circle4']}></p> */}
                <CardComponent eventProgram={'Hidden Talent'} cardColor={'red'} cardImage={hiddentalent} eventDate={'08/02/2024'}/>
            </div>

            <div  className={styless['div-verticalLine-outer2']}>
                <div className={styless['div-verticalLine-inner2']}></div>
            </div>
             <div className={styless['div-card_alignment3']}>
                <CardComponent eventProgram={'DJ Dance'} cardColor={'red'} cardImage={djdancing} eventDate={'08/02/2024'}/>
            </div>
        </div>
    )
}

export default EventManager;