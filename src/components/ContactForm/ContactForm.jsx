import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactFormSchema } from "../schemas/validatorUser";
import { useId } from "react";
import s from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/contactsOps";

const initialValues = {
  name: "",
  number: "",
};
export const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, action) => {
    // dispatch(addContactThunk(values));
    const contact = addContactThunk({
      name: values.name,
      number: values.number,
    });
    dispatch(contact);

    action.resetForm();
  };

  return (
    <div className="formik_wrap">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        <Form className={s.form}>
          <div className={s.wrap_inp}>
            <label
              className={s.label}
              // className="input input-bordered flex items-center gap-2"
              htmlFor={nameFieldId}
            ></label>
            <Field
              // className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
              // className="grow"
              placeholder="Name"
              className="input mb-3 w-96 input-bordered flex items-center gap-2"
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div>
            <label
              className={s.label}
              // className="input input-bordered input-accent w-full max-w-xs flex items-center gap-2"
              htmlFor={numberFieldId}
            ></label>
            <Field
              // className={s.input}
              className="input mb-3 max-w-96 input-bordered flex items-center gap-2"
              type="text"
              name="number"
              placeholder="Number"
              id={numberFieldId}
            />
            <ErrorMessage name="number" component="span" className={s.error} />
          </div>
          <button className="btn btn-outline btn-accent" type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
