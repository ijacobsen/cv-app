import React, { useEffect, useState } from 'react';

const WorkForm = (props) => {

    const [userInput, setUserInput] = useState(props.workData)
    
    useEffect(() => {props.onUpdateWorkData(userInput)}, [userInput]);

    const companyChangeHandler = (e) => {

        // passing a function to update state beats race conditions
        setUserInput((prevState) => {
            return {...prevState, enteredCompany: e.target.value}
        });

    };

    const titleChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: e.target.value}
        })

    }

    const hiredDateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredHiredDate: e.target.value}
        })

    }

    return (
        <form>
            <div className='new-work__controls'>
                <div className='new-work__control'>
                    <input 
                        placeholder='company'
                        type='text' 
                        onChange={companyChangeHandler}
                        value={userInput.enteredCompany} />
                </div>
                <div className='new-work__control'>
                    <input 
                        placeholder='title'
                        type='text' 
                        onChange={titleChangeHandler} 
                        value={userInput.enteredTitle} />
                </div>
                <div className='new-work__control'>
                    <input
                        type='date' 
                        onChange={hiredDateChangeHandler}
                        value={userInput.enteredHiredDate}/>
                </div>
            </div>

            <div className='new-work__actions'>
                <button 
                    type='button'
                    onClick={props.onRemoveWork}
                    value={userInput.key}
                    > Remove </button>
            </div>
        </form>
    )
}

export default WorkForm;