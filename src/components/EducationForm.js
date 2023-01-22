import React, { useEffect, useState } from 'react';

const EducationForm = (props) => {

    const [userInput, setUserInput] = useState(props.edData)
    
    // when userInput state updates, call onUpdateEducationData
    useEffect(() => {props.onUpdateEducationData(userInput)}, [userInput]);

    const schoolChangeHandler = (e) => {

        // passing a function to update state beats race conditions
        setUserInput((prevState) => {
            return {...prevState, enteredSchool: e.target.value}
        });

    };

    const majorChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredMajor: e.target.value}
        })

    }

    const gradDateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredGradDate: e.target.value}
        })

    }

    return (
        <form>
            <div className='new-education__controls'>
                <div className='new-education__control'>
                    <input 
                        placeholder='school'
                        type='text' 
                        onChange={schoolChangeHandler}
                        value={userInput.enteredSchool} />
                </div>
                <div className='new-education__control'>
                    <input 
                        placeholder='major'
                        type='text' 
                        onChange={majorChangeHandler} 
                        value={userInput.enteredMajor} />
                </div>
                <div className='new-education__control'>
                    <input
                        type='date' 
                        onChange={gradDateChangeHandler}
                        value={userInput.enteredGradDate}/>
                </div>
            </div>

            <div className='new-education__actions'>
                <button 
                    type='button'
                    onClick={props.onRemoveEducation}
                    value={userInput.key}
                    > Remove </button>
            </div>
        </form>
    )
}

export default EducationForm;