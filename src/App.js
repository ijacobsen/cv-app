
import './App.css';
import React, { useState } from 'react';
import EducationList from './components/EducationList'
import AddEducationButton from './components/AddEducationButton';
import EducationForm from './components/EducationForm';

function App() {

  const [genInfo, setGenInfo] = useState('');
  const [edList, setEdList] = useState([]);
  const [workList, setWorkList] = useState('');

  const updateEducationHandler = (userInput) => {
    console.log(userInput);
    console.log('updating education');
  }

  const addEducationHandler = () => {
    console.log('adding education box');
    setEdList((prevState) => {return [...prevState, '']})
  }


  return (
    <div className="App">
      <div className="section"> General </div>
      <div className="section"> Education
        <EducationList edItems={edList} onUpdateEducationData = {updateEducationHandler} />
        <AddEducationButton onAdd={addEducationHandler}/>
      </div>
    </div>
  );
}

export default App;
