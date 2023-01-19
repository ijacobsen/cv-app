import React from 'react';
import EducationForm from './EducationForm'

const EducationList = (props) => {

    return (
        <ul>
            {Object.keys(props.edItems).map((key) => {
                return (
                        <EducationForm
                            onUpdateEducationData={props.onUpdateEducationData} 
                            onRemoveEducation={props.onRemoveEducation}
                            edData={props.edItems[key]}
                            setEdData={props.setEdItems}
                            key={key}
                        />
                )
            })}
        </ul>
        
    )
}

export default EducationList;