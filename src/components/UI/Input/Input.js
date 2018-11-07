import React from 'react';

const input = ( props ) => {

    console.log(props);
    let inputElement = null;

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                            className={props.style}
                            value={props.value}
                            {...props.elementConfig}
                            onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                            className={props.style}
                            value={props.value}
                            {...props.elementConfig}
                            onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={props.style}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(
                        option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        )
                    )}
                </select>
            );
            break;
        default:
            inputElement = <input
                            className={props.style}
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed} 
                            />;
    }

    return (
        <div className="form-group">
            <label>
                    {props.label}
            </label>
            {inputElement}
        </div>
    );

};

export default input;