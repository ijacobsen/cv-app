import './App.css';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

// education components
import EducationList from './components/EducationList'
import AddEducationButton from './components/AddEducationButton';
import RenderEducation from './components/RenderEducation';

// work components
import WorkList from './components/WorkList';
import AddWorkButton from './components/AddWorkButton';
import RenderWork from './components/RenderWork';

// general info components
import InfoForm from './components/InfoForm';
import RenderInfo from './components/RenderInfo';

function App() {

  const [genInfo, setGenInfo] = useState({'name': '', 'email': '', 'phone': ''});
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
          <InfoForm
            genInfo={[genInfo, setGenInfo]}
          />
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
        <div className='displaySection' id='general'>
          <RenderInfo
            genInfo={genInfo}
          />
        </div>
        <RenderEducation
          edItems={edList}
        />
        <RenderWork
          workItems={workList}
        />
      </div>
    </div>
  );
}

export default App;
