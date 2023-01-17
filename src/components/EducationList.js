import React, { useState } from 'react';
import EducationForm from './EducationForm'
import uniqid from 'uniqid';

const EducationList = (props) => {

    return (

        <ul>
            {props.edItems.map((ed) => (
            <EducationForm
                onUpdateEducationData = {props.onUpdateEducationData} key={uniqid()}
            />))}
        </ul>
    )
}

export default EducationList;