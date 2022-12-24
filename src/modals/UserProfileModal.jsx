import { useFormik } from "formik";
import React from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { USER_STORE_CONSTANTS } from "../store/helpers/store.constants";
import { selectUser } from "../store/user/user.selector";
import validateUserData from "../validators/userFormValidator";

const UserProfileModal = ({ showModal, setShowModal }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
    },
    validate: validateUserData,
  });
  const handleEditUser = () => {
    dispatch({
      type: USER_STORE_CONSTANTS.EDIT_USER,
      payload: formik.values,
    });
    setShowModal(!showModal);
  };
  return (
    <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
      <Modal.Header closeButton>
        <Modal.Title>Basic Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex m-3" id="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            className="ms-3"
            id="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            isValid={formik.isValid}
            isInvalid={formik.errors.name}
            onInvalidFeedback={formik.errors.name}
            validFeedback="Looks good!"
            isTouched={formik.touched.name}
            onChange={formik.handleChange}
          />
        </Form>
        {formik.errors.name ? (
          <div className="ms-4 mx-2">
            <span className="ms-5 mx-2 text-danger">{formik.errors.name}</span>
          </div>
        ) : null}

        <Form className="d-flex m-3" id="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            className="ms-4"
            id="email"
            onBlur={formik.handleBlur}
            isValid={formik.isValid}
            isInvalid={formik.errors.email}
            value={formik.values.email}
            isTouched={formik.touched.email}
            onChange={formik.handleChange}
            validFeedback="Looks good!"
          />
        </Form>
        {formik.errors.email ? (
          <div className="ms-4 mx-2">
            <span className="ms-5 mx-2 text-danger">{formik.errors.email}</span>
          </div>
        ) : null}
        <FormGroup className="d-flex m-3" id="phone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            type="text"
            className="ms-3"
            value={formik.values.phone}
            isValid={formik.isValid}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.phone}
            isInvalid={formik.errors.phone}
            id="phone"
            onChange={formik.handleChange}
            validFeedback="Looks good!"
          />
        </FormGroup>
        {formik.errors.phone ? (
          <div className="ms-4 mx-2">
            <span className="ms-5 mx-2 text-danger">{formik.errors.phone}</span>
          </div>
        ) : null}
        <Form className="d-flex m-3" id="website">
          <Form.Label>Website:</Form.Label>
          <Form.Control
            type="text"
            className="ms-1"
            onBlur={formik.handleBlur}
            isValid={formik.isValid}
            invalidFeedback={formik.errors.website}
            isTouched={formik.touched.website}
            id="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            validFeedback="Looks good!"
          />
        </Form>
        {formik.errors.website ? (
          <div className="ms-4 mx-2">
            <span className="ms-5 mx-2 text-danger">{formik.errors.website}</span>
          </div>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={() => setShowModal(!showModal)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => handleEditUser()}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserProfileModal;
