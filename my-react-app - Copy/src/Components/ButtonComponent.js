import style from "../Stylesheet/External.module.css" 
import  "../Stylesheet/ExternalStyle.css"

import Button from 'react-bootstrap/Button';



const ButtonComponent=()=>{
    return(
    <div>
        <button className={style.btn}>Click Me</button>
        <button className="botn">Click Me</button>
        <Button as="a" variant="success">Button as link</Button>
    </div>
    )
}

export default ButtonComponent;