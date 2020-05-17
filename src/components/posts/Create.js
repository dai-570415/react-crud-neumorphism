import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase, { db } from '../../Firebase';
import PostIcon from '../../assets/img/post.png';

class Create extends Component {

    //登録ボタンが押されたら
    handleOnSubmit = (values) => {
        const docId = db.collection('posts').doc().id;
        db.collection('posts').doc(docId).set({
            msg: values.msg,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    render() {
        return (
            <React.Fragment>
                <Formik
                    initialValues={{ msg: '' }}
                    onSubmit={values => this.handleOnSubmit(values)}
                    validationSchema={Yup.object().shape({
                        msg: Yup.string().required('必須項目です'),
                    })}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                        <Form className="form post-form" onSubmit={handleSubmit}>
                            <FormGroup>
                                <FormFeedback>{errors.msg}</FormFeedback>
                                <Input
                                    type="text"
                                    name="msg"
                                    id="msg"
                                    placeholder="Let's Tweet!"
                                    value={values.msg}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    invalid={Boolean(touched.msg && errors.msg)}
                                />
                            </FormGroup>
                            <Button className="post-button" type="submit"><img src={ PostIcon } alt="create" /></Button>
                        </Form>
                    )}
                </Formik>
            </React.Fragment>
        );
    }
}

export default Create;