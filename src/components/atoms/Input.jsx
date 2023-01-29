function Input({type, id, inputName, textLabel, divClassName}) {
    return (  
        <>
        <div className={divClassName}> 
        <label htmlFor={id}>{textLabel}</label>
        <input type={type} id={id} name={inputName}></input>
        </div>
        </>
    );
}

export default Input;