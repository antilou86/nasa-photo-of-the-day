import React from "react";

function Description(props) {
    const {descriptionData} = props;
    return (
        <div>
            <p>{descriptionData}</p>
        </div>
    )
}


export default Description;