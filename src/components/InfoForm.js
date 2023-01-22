import React, { useEffect, useState } from 'react';

const InfoForm = (props) => {

    //const [userInput, setUserInput] = useState(props.genInfo)
    //useEffect(() => {props.onUpdateWorkData(userInput)}, [userInput]);
    const [userInput, setUserInput] = props.genInfo;

    

    const nameChangeHandler = (e) => {

        // passing a function to update state beats race conditions
        setUserInput((prevState) => {
            return {...prevState, name: e.target.value}
        });

    };

    const emailChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, email: e.target.value}
        })

    }

    const phoneChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, phone: e.target.value}
        })

    }

    return (
        <form>
            <div className='info__controls'>
                <div className='info__control'>
                    <input 
                        placeholder='name'
                        type='text' 
                        onChange={nameChangeHandler}
                        value={userInput.name} />
                </div>
                <div className='info__control'>
                    <input 
                        placeholder='email'
                        type='text' 
                        onChange={emailChangeHandler} 
                        value={userInput.email} />
                </div>
                <div className='info__control'>
                    <input 
                        placeholder='phone'
                        type='text' 
                        onChange={phoneChangeHandler} 
                        value={userInput.phone} />
                </div>
            </div>
        </form>
    )
}

export default InfoForm;