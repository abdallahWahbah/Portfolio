import React from 'react';

const FormInputCreator = ({jsonObject, formik}) => {

    const formContent = jsonObject.map(element =>
    {
        if(element.name === "name" || 
            element.name === "email")
        {
            return (
                // <div className="form__input--container" key={element.name}>
                //     <label className='form__label' htmlFor={element.name} >{element.label}</label>
                //     <input 
                //         className='form__input'
                //         type={element.type ? element.type : "text"}
                //         id={element.name}
                //         {...formik.getFieldProps(element.name)}
                //     />
                //     {formik.touched[element.name] && 
                //         formik.errors[element.name] ? 
                //         <div className='form__error'>
                //                 {formik.errors[element.name]}
                //         </div> :
                //         null
                //     }
                // </div>
                <div className="form__input--container" key={element.name}>
                    {/* <label 
                        className='form__label' 
                        htmlFor={element.name} 
                    >
                        {element.label}
                    </label> */}
                    <input 
                        className={`form__input ${formik.touched[element.name] && formik.errors[element.name] ? "border__error" : ""}`}
                        type={element.type ? element.type : "text"}
                        id={element.name}
                        {...formik.getFieldProps(element.name)}
                    />
                    {formik.touched[element.name] && 
                        formik.errors[element.name] ? 
                        <div className='form__error'>
                                {formik.errors[element.name]}
                        </div> :
                        <label 
                            className='form__label' 
                            htmlFor={element.name} 
                        >
                            {element.label}
                        </label>
                    }
                </div>
            )
        }
        if(element.name === "message")
        {
            return (
                <div className="form__input--container" key={element.name}>
                    {/* <label className='form__label' htmlFor={element.name} >{element.label}</label> */}
                    <textarea 
                        className={`form__input ${formik.touched[element.name] && formik.errors[element.name] ? "border__error" : ""}`}
                        id={element.name}
                        rows={element.rows}
                        cols={element.cols}
                        {...formik.getFieldProps(element.name)}
                    />
                    {formik.touched[element.name] && 
                        formik.errors[element.name] ? 
                        <div className='form__error'>
                                {formik.errors[element.name]}
                        </div> :
                        <label 
                            className='form__label' 
                            htmlFor={element.name} 
                        >
                            {element.label}
                        </label>
                    }
                </div>
            )
        }
        if(element.name === "button")
        {
            return (
                <button 
                    className='main__button' 
                    key={element.name}
                    type={element.type}
                    style={{border: "none"}}
                >
                    {element.label}
                </button>
            )
        }

        return null
    });

    return (
        <React.Fragment>
            {formContent}
        </React.Fragment>
    )
}

export default FormInputCreator;