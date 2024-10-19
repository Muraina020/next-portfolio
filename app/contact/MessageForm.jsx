"use client"

import React, { useState } from 'react';
import styles from "./contact.module.css";
import {
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    FormErrorMessage,
    Button,
    Textarea,
} from '@chakra-ui/react';
import { sendContactForm } from '../../lib/api';

const initValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
};

const initState = { values: initValues };

const MessageForm = () => {
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const { values, isLoading } = state;

    const onBlur = ({ target }) => setTouched((prev) => ({
        ...prev,
        [target.name]: true
    }));

    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }));

    

    return (
        <Container>
            <Heading>Contact</Heading>
            <FormControl isRequired isInvalid={touched.name && !values.name}>
                <FormLabel>Name</FormLabel>
                <Input
                    type='text'
                    name='name'
                    backgroundColor="lightgrey"
                    color="#000"
                    border="2px solid #3182ce"
                    errorBorderColor='red'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={touched.email && !values.email}>
                <FormLabel>Email</FormLabel>
                <Input
                    type='email'
                    name='email'
                    backgroundColor="lightgrey"
                    color="#000"
                    border="2px solid #3182ce"
                    errorBorderColor='red'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={touched.subject && !values.subject}>
                <FormLabel>Subject</FormLabel>
                <Input
                    type='text'
                    name='subject'
                    backgroundColor="lightgrey"
                    color="#000"
                    border="2px solid #3182ce"
                    errorBorderColor='red'
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={touched.message && !values.message}>
                <FormLabel>Message</FormLabel>
                <Textarea
                    name='message'
                    rows={4}
                    backgroundColor="lightgrey"
                    color="#000"
                    border="2px solid #3182ce"
                    errorBorderColor='red'
                    value={values.message}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <Button
                backgroundColor="lightgrey"
                color="#000"
                marginTop="10px"
                padding="9px 30px"
                border="2px solid #3182ce"
                borderRadius="5px"
                variant="outline"
                colorScheme='blue'
                isLoading={isLoading}
                disabled={!values.name || !values.email || !values.subject || !values.message}
                onClick={onSubmit}>
                Submit
            </Button>
        </Container>
    );
};

export default MessageForm;
