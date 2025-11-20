import { useState} from "react";
import {v4 as uuidv4} from 'uuid';

const ChipsInput = () => {
  const [chipsText, setChipsText] = useState([]);
  const [errorText, setErrorText] = useState(null);

  const checkIfValueIsNumber = (value) => {
    const regex = /\d/;
    const containsNumber = regex.test(value);
    if(containsNumber) {
      setErrorText('Please entered the correct input')
    }
  }
  const handleEvent = (event) => {
    if(event.key === "Enter") {
      checkIfValueIsNumber(event.target.value)
      setChipsText((prev) => [
        ...prev,{
        id: uuidv4(),
        value: event.target.value
      }])
    } 
  }

  const handleDeletion = (id) => {
    const afterFilteration = chipsText.filter((chip) => chip.id != id);
    setChipsText(afterFilteration);
  }

  console.log("chips Text", chipsText)

  return (
    <div className="chips-input-container">
      <input 
        placeholder="Enter the text and press enter" 
        type="text"
        onKeyDown={handleEvent}
      />
      {errorText && <p>{errorText}</p>}
      {chipsText.length > 0 && (
        <div className="chips-display">
        {chipsText.map((chips) => {
          return (
            <div className="chips-container" key={chips.id}>
             <p>{chips.value}</p> 
              <button onClick={() =>handleDeletion(chips.id)}>❌</button>
            </div>
          )
        })}
        </div>
      )}
    </div>
  )
}

export default ChipsInput;