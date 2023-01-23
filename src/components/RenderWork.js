const RenderWork = (props) => {

    return (
        <div className='displaySection' id='work'>
            <h3> {Object.keys(props.workItems).length ? 'Experience': ''} </h3>
            <ul>
                {Object.keys(props.workItems).map((key) => {
                    return (
                        <div key={key} className='workItem'>
                            <h4> {props.workItems[key]['enteredCompany']} </h4>
                            <h5> {props.workItems[key]['enteredTitle']} </h5>
                            <h5> {props.workItems[key]['enteredHiredDate']} </h5>
                        </div>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default RenderWork;