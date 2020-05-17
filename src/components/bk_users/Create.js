import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase, { db } from '../../Firebase';

class Create extends Component {

    //登録ボタンが押されたら
    handleOnSubmit = (values) => {
        const docId = db.collection('users').doc().id;
        db.collection('users').doc(docId).set({
            docId: docId,
            name: values.name,
            email: values.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <Formik
                    initialValues={{ name: '', email: '' }}
                    onSubmit={values => this.handleOnSubmit(values)}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Name is required.'),
                        email: Yup.string().email('It is not in email format.').required('Email is required.'),
                    })}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                        <Form className="form" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={Boolean(touched.name && errors.name)}
                                />
                                <FormFeedback>
                                    {errors.name}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="email"
                                    email="email"
                                    id="email"
                                    placeholder="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={Boolean(touched.email && errors.email)}
                                />
                                <FormFeedback>
                                    {errors.email}
                                </FormFeedback>
                            </FormGroup>
                            <Button type="submit">create</Button>
                        </Form>
                    )}
                </Formik>
            </React.Fragment>
        );
    }
}

export default Create;