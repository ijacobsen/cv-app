import './App.css';
import React, { useState, useEffect } from 'react';
import EducationList from './components/EducationList'
import AddEducationButton from './components/AddEducationButton';
import RenderEducation from './components/RenderEducation';
import uniqid from 'uniqid';

function App() {

  // const [genInfo, setGenInfo] = useState('');
  // const [workList, setWorkList] = useState('');

  const [edList, setEdList] = useState({});

  // print education list to console on change
  useEffect(() => {console.log(edList)}, [edList]);

  
  const updateEducationHandler = (userInput) => {
    setEdList((prevState) => {
      return {...prevState, 
              [userInput['key']]: userInput,
            }})
  
  }

  const addEducationHandler = () => {
    console.log('adding education box');
    setEdList((prevState) => {
      const newKey = uniqid();
      return {...prevState, 
              [newKey]: {
                        key: newKey,
                        enteredSchool: '',
                        enteredMajor: '',
                        enteredGradDate: ''
              }
            }
          })}

  const removeEducationHandler = (e) => {
    const keyToRemove = e.target.value;

    setEdList((prevState) => {
      const {[keyToRemove]: oldEd, ...rest} = prevState;
      return rest;
    })

  }


  return (
    <div className="App">
      <div className='dataEntry'>
        <div className="section"> General </div>
        <div className="section"> Education
          <EducationList 
            edItems={edList}
            setEdItems={setEdList}
            onUpdateEducationData={updateEducationHandler} 
            onRemoveEducation={removeEducationHandler}
          />
          <AddEducationButton onAdd={addEducationHandler}/>
        </div>
      </div>
      <div className='dataDisplay'>
        <div className='displaySection' id='education'>
          <RenderEducation
            edItems={edList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
