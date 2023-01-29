import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
function FormRegister() {
    const formRegister = useRef();
    const navigate = useNavigate();
    const handlerClick = (event) => {
        event.preventDefault();
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const register = new FormData(formRegister.current);
        let name = register.get("name");
        let email = register.get("email");
        let password = register.get("password");
        let passwordConfirmation = register.get("password2");
        let phone = register.get("phone");
        
        if(emailRegex.test(email)){
            console.log("Email correcto");
           
            if(password == passwordConfirmation){
                console.log("Password correcto");
                console.log("Name: " + name + " Email: " + email + " Password: " + password + " Password Confirmation: "+ passwordConfirmation + " Phone: " + phone);
                navigate("/")
            }else{
                console.log("Password incorrecto");
            }
        }else{
            console.log("Email incorrecto");
        }
    }

    const handlerClickRegister = (event) => {
        navigate("/login");
    }

    return ( 
        <>
        <div class="background1">
        <div class="shape1"></div>
        <div class="shape1"></div>
        </div>
        <form ref={formRegister} id="formulario">
            <div id="textregisterdiv">
                <h1 id="textregister">Register</h1>
            </div>
            <Input type={"text"} id={"name"} inputName={"name"} textLabel={"Name: "} divClassName=""/>
            <Input type={"text"} id={"lastname"} inputName={"lastname"} textLabel={"Last Name: "} divClassName=""/>
            <Input type={"email"} id={"email"} inputName={"email"} textLabel={"Email: "} divClassName=""/>
            <Input type={"password"} id={"password"} inputName={"password"} textLabel={"Password: "} divClassName=""/>
            <Input type={"password"} id={"password2"} inputName={"password2"} textLabel={"Confirm password: "} divClassName=""/>
            <Input type={"tel"} id={"phone"} inputName={"phone"} textLabel={"Phone: "} divClassName=""/>

            <button type="button" onClick={handlerClick} id="btn">Register Now!!</button>
            <h3>You've an account?</h3>
            <button onClick={handlerClickRegister} id="btn2">Log In</button>
            {/* <Link to="/login">Log In</Link> */}
        </form>
        </>
     );
}

export default FormRegister;