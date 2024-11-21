import React, {useState} from "react";


function RequestForm(props){
    const [details,setDetails] = useState('');

    const handleSubmint = (event) =>
    {
        event.preventDefault()
        alert(`상세 입력사항: ${details}`)
    }

    const handleChage = (event)=>{
        setDetails(event.target.value);
    }
    return(
        <form onSubmit={handleSubmint}>
            <label>
                요청사항
                <textarea value={details} onChange={handleChage}/>
            </label>
            <button type="submit">submit</button>
        </form>
    );
}

export default RequestForm;