const RenderEducation = (props) => {

    return (
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
        
    )
}

export default RenderEducation;