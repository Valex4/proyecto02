import { useRef } from "react"
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import Input from "../atoms/Input"

function FormLogin() {
    const navigate = useNavigate()
    const form = useRef();
    const handleClick = (e) =>{
        e.preventDefault();
        const updateForm = new FormData(form.current);
        let updateUser = updateForm.get('username');
        let updatePassword = updateForm.get('password');
        console.log(updateUser + " " + updatePassword);
        navigate("/");
    }

    const handlerClickRegister = () => {
        navigate("/register");
    }
    return(  
        <>
        
        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
        </div>
        <form ref={form}> 
        <div id="textlogindiv">
        <h1 id="textlogin">Login</h1>
        </div>
         <Input type={"text"} textLabel={"User / Email"} inputName={"username"} id={"username"} divClassName=""/>
         <Input type={"password"} textLabel={"Password"} inputName={"password"} id={"psw"} divClassName=""/>
        <button onClick={handleClick}>Login</button>
        <h3>Haven't account?</h3>
        <button onClick={handlerClickRegister} id="btn2">Register Now!!</button>
        </form>
        </>
    );
}

export default FormLogin;