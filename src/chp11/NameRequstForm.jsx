import React, {useState} from "react";

function NameRequestForm(props){
    const [details,setDetails] = useState('');
    const [name,setName] = useState('');
    const [fruit,setFruits] = useState('수박');
    const [file,setfile] = useState('');

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        alert(`
        이름: ${name}
        상세 입력사항: ${details}
        좋아하는 과일: ${fruit}
        선택한 파일: ${file}`)
    }

    const handleChange = (event)=>{
        const{target} = event;
        switch (target.id){
            case "name":
                setName(target.value.toUpperCase());
                break;
            case "details":
                setDetails(target.value);
                break;
            case "fruit":
                setFruits(target.value);
                break;
            case "file":
                setfile(target.value);
                break;
        }

    }



    return(
        <form onSubmit={handleSubmit}>
            <br/><br/>
            <label>
                요청사항
                <textarea id="details" value={details} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                성명:
                <input id="name" value={name} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                좋아하는 과일선택:
                <select id="fruit" value={fruit} onChange={handleChange}>
                    <option>사과</option>
                    <option>포도</option>
                    <option>바나나</option>
                    <option>수박</option>
                </select>
            </label><br/><br/>
            <label>
                파일 선택:
                <input id="file" type="file" onChange={handleChange}/>
            </label>
            <button type="submit">submit</button>
        </form>

    );
}

export default NameRequestForm;