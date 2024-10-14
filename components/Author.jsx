
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const Author = ({ createData, setCreateData }) => {
    //using useNavigate  to redirect to the user page
    const navigate = useNavigate();
    //using useState to manage the state of the Field fields
    // const [createData, setCreateData] = useState({
    //     book: "",
    //     author: "",
    //     dates: "",
    //     description: "",
    // });


    //post  request to add a new user using axios
    // const handleSubmit = async (values) => {
    //     // e.preventDefault();
    //     try {
    //         const response = await axios.post(
    //             "https://65f3479f105614e654a04979.mockapi.io/api/Details",
    //             values
    //         );
    //         console.log(response.data);
    //         navigate("/authorlist"); // Redirect to home page after successful creation
    //     } catch (error) {
    //         console.error("Error Occuring:", error);
    //     }
    // };
    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.post(
                "https://65f3479f105614e654a04979.mockapi.io/api/Details",
                values
            );
            console.log(response.data);
            // Update createData state with the new values
            setCreateData(values);
            // Reset the form after successful submission
            resetForm();
            navigate("/"); // Redirect to home page after successful creation
        } catch (error) {
            console.error("Error Occuring:", error);
        }
    };

    const validationSchema = Yup.object().shape({
        book: Yup.string().required("Please Enter Book Name"),
        author: Yup.string().required("Author Name is required"),
        dates: Yup.string().required("Dob is required"),
        description: Yup.string().required("Description is Required"),
    });

    return (
        //Form with all the necessary fields for adding a new user
        <Formik initialValues={createData} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <div className="back">
                <Form
                    className="container text-center userWidth"


                >
                    <div className="row mb-5">
                        <label
                            htmlFor="author"
                            className="col-sm-12 bookname col-form-label mt-5 p-3"
                        >
                            Author Name:
                        </label>
                        <div className="col-sm-12">
                            <Field
                                type="text"
                                className="form-control"
                                id="new"
                                name="author"

                            />
                            <ErrorMessage name="author" component="h6" className="redText" />
                        </div>
                        <label htmlFor="date" className="col-sm-12 col-form-label">
                            Date of Birth:
                        </label>
                        <div className="col-sm-12">
                            <Field
                                type="date"
                                className="form-control"
                                id="date"
                                name="date"

                            />
                            <ErrorMessage name="date" component="h6" className="redText" />
                        </div>
                        <label htmlFor="book" className="col-sm-12 col-form-label">
                            Book Name:
                        </label>
                        <div className="col-sm-12">
                            <Field
                                type="text"
                                className="form-control"
                                id="book"
                                name="book"

                            />
                            <ErrorMessage name="book" component="h6" className="redText" />
                        </div>
                        <label htmlFor="description" className="col-sm-12 col-form-label">
                            Description :
                        </label>
                        <div className="col-sm-12">
                            <Field
                                as="textarea"
                                className="form-control"
                                id="desc"
                                name="description"

                            />
                            <ErrorMessage name="description" component="h6" className="redText" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Add Author
                    </button>
                </Form>
            </div>
        </Formik>
    );
};

export default Author;
