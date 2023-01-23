const RenderEducation = (props) => {

    return (
        <div className='displaySection' id='education'>
            <h3> {Object.keys(props.edItems).length ? 'Education': ''} </h3>
            <ul>
                {Object.keys(props.edItems).map((key) => {
                    return (
                        <div key={key} className='educationItem'>
                            <h4> {props.edItems[key]['enteredSchool']} </h4>
                            <h5> {props.edItems[key]['enteredMajor']} </h5>
                            <h5> {props.edItems[key]['enteredGradDate']} </h5>
                        </div>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default RenderEducation;