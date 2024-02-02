import styless from './ButtonComponent.module.scss'

const ButtonComponent = (props: {validateForm : () => void}) => {
    const {validateForm} = props;
    return(
        <div>
            <button className={styless['buttoncomp']} onClick={() => validateForm()}>submit</button>
        </div>
    )
};

export default ButtonComponent;