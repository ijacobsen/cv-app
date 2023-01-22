import './App.css';
import React, { useState, useEffect } from 'react';
import EducationList from './components/EducationList'
import AddEducationButton from './components/AddEducationButton';
import RenderEducation from './components/RenderEducation';
import WorkList from './components/WorkList';
import AddWorkButton from './components/AddWorkButton';
import RenderWork from './components/RenderWork';

import uniqid from 'uniqid';

function App() {

  // const [genInfo, setGenInfo] = useState('');

  const [workList, setWorkList] = useState({});
  const [edList, setEdList] = useState({});

  // print education list to console on change
  //useEffect(() => {console.log(edList)}, [edList]);


  const updateWorkHandler = (userInput) => {
    setWorkList((prevState) => {
      return {...prevState, 
              [userInput['key']]: userInput,
            }})
  
  }

  const addWorkHandler = () => {
    setWorkList((prevState) => {
      const newKey = uniqid();
      return {...prevState, 
              [newKey]: {
                        key: newKey,
                        enteredCompany: '',
                        enteredTitle: '',
                        enteredHiredDate: ''
              }
            }
          })}

  const removeWorkHandler = (e) => {
    const keyToRemove = e.target.value;

    setWorkList((prevState) => {
      const {[keyToRemove]: oldWork, ...rest} = prevState;
      return rest;
    })

  }

  const updateEducationHandler = (userInput) => {
    setEdList((prevState) => {
      return {...prevState, 
              [userInput['key']]: userInput,
            }})
  
  }

  const addEducationHandler = () => {
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
        <div className="section"> Work
          <WorkList 
            workItems={workList}
            setWorkItems={setWorkList}
            onUpdateWorkData={updateWorkHandler} 
            onRemoveWork={removeWorkHandler}
          />
          <AddWorkButton onAdd={addWorkHandler}/>
        </div>
      </div>
      <div className='dataDisplay'>
        <div className='displaySection' id='education'>
          <RenderEducation
            edItems={edList}
          />
          <RenderWork
            workItems={workList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
