import React from 'react';
import WorkForm from './WorkForm'

const WorkList = (props) => {

    return (
        <ul>
            {Object.keys(props.workItems).map((key) => {
                return (
                        <WorkForm
                            onUpdateWorkData={props.onUpdateWorkData} 
                            onRemoveWork={props.onRemoveWork}
                            workData={props.workItems[key]}
                            setWorkData={props.setWorkItems}
                            key={key}
                        />
                )
            })}
        </ul>
        
    )
}

export default WorkList;