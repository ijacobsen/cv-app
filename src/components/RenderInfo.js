const RenderInfo = (props) => {

    return (
        <div>
            <h3> {props.genInfo['name']} </h3>
            <h5> {props.genInfo['email']} </h5>
            <h5> {props.genInfo['phone']} </h5>
        </div>
        
    )
}

export default RenderInfo;