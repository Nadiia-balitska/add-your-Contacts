import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactFormSchema } from "../schemas/validatorUser";
import { useId } from "react";
import s from ".//ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";

export const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, action) => {
    const contactWithId = { id: nanoid(), ...values };
    dispatch(addContact(contactWithId));
    action.resetForm();
  };

  return (
    <div className="formik_wrap">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema(contacts)}
      >
        <Form className={s.form}>
          <div className={s.wrap_inp}>
            <label className={s.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div>
            <label className={s.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={s.input}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage name="number" component="span" className={s.error} />
          </div>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
