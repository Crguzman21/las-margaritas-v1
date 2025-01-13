function Button(props) {
    const {text, color, disabled, children} = props;

    let displayText;
    if(children === undefined) {
        displayText = text;
    }else{
        displayText = children;
    }

    return (
        <button style={{backgroundColor: color}} disabled={disabled}>
            {displayText}
        </button>
    );
}

export default Button;