const EducationItem = (props) => {
    return (
        <li className='education-item'>
            <h5> School: {props.school} </h5>
            <h6> Major: {props.major} </h6>
            <h6> Graduation Date: {props.gradDate.toLocaleDateString()} </h6>
        </li>
    )
}

export default EducationItem;