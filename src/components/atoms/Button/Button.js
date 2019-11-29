import React from "react";

const Button = props => {
    const { variant, disabled, children, onClick } = props;

    // This is the default style
    let backgroundColor = "white";
    let color = "#0078AE";

    // Which variant do we want?
    switch (variant) {
        case "primary":
            backgroundColor = "#0078AE";
            color = "white";
            break;
        case "secondary":
            backgroundColor = "#279A2C";
            color = "white";
            break;
        default:
            break;
    }

    // Let's build the style based on the variant
    // We also add properties depending on the `disabled` state
    const style = {
        backgroundColor,
        color,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        borderRadius: 22,
        padding: 10
    };

    return (
        <button onClick={onClick} disabled={disabled} style={style}>
            {children}
        </button>
    );
};

export default Button;