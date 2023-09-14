import React from 'react'



const Switch = ({ isOn, handleToggle }) => {


    const colorOne = "#ffffff"
    const colorTwo = "#ff6525"
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="switch-checkbox"
                id={`switch`}
                type="checkbox"
            />
            <label
                style={{ background: isOn ? colorOne : colorTwo }}
                className="switch-label"
                htmlFor={`switch`}
            >
                <span className={`switch-button`} />
            </label>
        </>
    );
};

export default Switch