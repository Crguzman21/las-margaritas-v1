import { useState } from "react";

function Button(props) {
    const {color, disabled, children, onClick} = props;

    const [isDisabled, setIsDisabled] = useState(disabled);
    const [colorState, setColorState] = useState(color);

    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: colorState }}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button;