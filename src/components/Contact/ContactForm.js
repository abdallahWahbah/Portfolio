import React, {useRef, useState} from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup';
import { ContactSchema } from '../JsonData';
import InitialValuesValidators from './InitialValuesValidators';
import FormInputCreator from './FormInputCreator';
import emailjs from '@emailjs/browser';
import PopUp from '../Portfolio/PopUp';

const ContactForm = () => 
{
    const formRef = useRef();
    const [showMessage, setShowMessage] = useState(false);
    const [messagePassed, setMessagePassed] = useState(null);

    const messageData =
    {
        passed: 
        {
            title: "Done!",
            content: "Your message is successfully sent"
        },
        failed:
        {
            title: "Failed!",
            content: "Failed to send yout message, Please use the direct links"
        }
    }

    const onSubmit =  values =>
    {
        console.log(values)

        emailjs.sendForm('service_ggjkvw9', 'template_lwnlutc', formRef.current, "UmtmezqLS36L9eJmO")
        .then((result) => {
            // console.log(result.text);
            setShowMessage(true);
            setMessagePassed(true);
            formik.resetForm();
        }, (error) => {
            // console.log(error.text);
            setShowMessage(true);
            setMessagePassed(false);
        });

    }

    const {initialValues} = InitialValuesValidators("initialValues", ContactSchema);
    const {validators} = InitialValuesValidators("validators", ContactSchema);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema: yup.object(validators)
    })

    const formContent = <FormInputCreator jsonObject={ContactSchema} formik={formik}/>;

    return (
        // CSS file: components/form
        <form className='form' onSubmit={formik.handleSubmit} autoComplete="off" ref={formRef}>
            {formContent}
            {showMessage && (
                <PopUp 
                    onClose={() => setShowMessage(false)}
                    type="message" 
                    messageData={messagePassed ? messageData.passed : messageData.failed}
                />
            )}
            {/* <PopUp 
                onClose={() => setShowMessage(false)}
                type="message" 
                messageData={messagePassed ? messageData.passed : messageData.passed}
            /> */}
        </form>
    )
}

export default ContactForm