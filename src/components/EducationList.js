import React, { useState } from 'react';
import EducationForm from './EducationForm'

const EducationList = (props) => {

    return (

        <ul>
            {props.edItems.map((ed) => (
            <EducationForm
                onUpdateEducationData = {props.onUpdateEducationData}
            />))}
        </ul>
    )
}

export default EducationList;