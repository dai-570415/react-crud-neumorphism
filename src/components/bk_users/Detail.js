import React from 'react';
import { Form, FormGroup, Input, Button, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { db } from '../../Firebase';

class Detail extends React.Component {

    state = {
        user: { name: '', email: '' }
    }

    //更新ボタンが押されたら
    handleOnSubmit = (values) => {
        db.collection('users').doc(this.props.match.params.uid).update({
            name: values.name,
            email: values.email
        });
        this.props.history.push('/dashboard');
    }

    //uidで指定した値を取得
    getUser = async (uid) => {
        const docRef = db.collection('users').doc(uid);
        const doc = await docRef.get();
        //ドキュメントの存在確認
        if (doc.exists) {
            this.setState({
                user: doc.data(),
            });
        }else{
            //なければ404ページへ
            this.props.history.push('/404');
        }
    }

    //delete
    handleDelete = (uid) => {
        if (window.confirm('削除しますか？')) {
            db.collection('users').doc(uid).delete();
            this.props.history.push('/dashboard');
        }
    }

    //値を取得
    componentDidMount = () => {
        this.getUser(this.props.match.params.uid);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Detail</h2>
                    <Formik
                        enableReinitialize
                        initialValues={{ name: this.state.user.name, email: this.state.user.email }}
                        onSubmit={values => this.handleOnSubmit(values)}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('Name is required.'),
                            email: Yup.string().email('It is not in email format.').required('Email is required.'),
                        })}
                    >
                        {
                            ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                <Form onSubmit={handleSubmit}>
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
                                    <Button type="submit">edit</Button>
                                    <Button
                                        className="delete-button"
                                        onClick={() => this.handleDelete(this.props.match.params.uid)}
                                    >
                                        delete
                                    </Button>
                                </Form>
                            )
                        }
                    </Formik>
            </React.Fragment>
        );
    }
}

export default Detail;