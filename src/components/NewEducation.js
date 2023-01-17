import React from 'react';
import EducationForm from './EducationForm';

const NewEducation = (props) => {

    const updateEducationData = (educationDataState) => {
        const educationData = {
            id: Math.random().toString(), 
            ...educationDataState}
        props.onAddEducation(educationData);
    }

    return (
        <div className='new-education'> 
            <EducationForm onUpdateEducationData={updateEducationData} />
        </div>
    )
}

export default NewEducation;