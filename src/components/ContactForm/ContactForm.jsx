import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import React from "react";
import { nanoid } from 'nanoid';
import { Container, Input, Label, Wrapper, ErrorMsg, SubmitButton  } from './ContactForm.styled';


const schema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required(),
    number: Yup.string()
    .min(6, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
    .required(),
});
  
const initialValues = {
  id: '',
  name: '',
  number: '',
};


export const ContactForm = ({ onSubmit }) => {
    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: 'id-' + nanoid(),
            name: values.name,
            number: values.number,
        };

        onSubmit(newContact);
        resetForm();
    };

    return (
        <>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            <Container>
                <Wrapper>
                    <Label htmlFor="name">Name:</Label>
                    <Input name="name" type="text" id="name" />
                    <ErrorMsg  name="name" component="div" />
                </Wrapper>

                <Wrapper>
                    <Label htmlFor="number">Number:</Label>
                    <Input name="number" type="tel" id="number" />
                    <ErrorMsg  name="number" component="div" />
                </Wrapper>

                <SubmitButton  type="submit">Add contact</SubmitButton >
            </Container>
        </Formik>
        </>
    );
};

ContactForm.protoType = {
    onSubmit: PropTypes.func.isRequired,
};