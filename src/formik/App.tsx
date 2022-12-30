import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikProps } from 'formik/dist/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FormProps {
  name: string;
  username: string;
  email: string;
  datepicker: Date | undefined;
  password: string;
}

const initialValues: FormProps = {
  name: '',
  username: '',
  email: '',
  datepicker: undefined,
  password: '',
};

const App = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {props => {
          const handleDateChange = (
            date: (Date | null) | React.SyntheticEvent | undefined
          ) => {
            props.setFieldValue('datepicker', date, true);
          };

          return (
            <form
              style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              onSubmit={props.handleSubmit}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Name</label>
                <input
                  type={'text'}
                  name="name"
                  placeholder="John"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Username</label>
                <input
                  type={'text'}
                  name="username"
                  placeholder="bigDick99"
                  value={props.values.username}
                  onChange={props.handleChange}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Email</label>
                <input
                  type={'email'}
                  name="email"
                  placeholder="example@blabla.com"
                  value={props.values.email}
                  onChange={props.handleChange}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Date of Birthd</label>
                <DatePicker
                  name="datepicker"
                  onChange={handleDateChange}
                  placeholderText="Pick your born date"
                  value={props.values.datepicker?.toLocaleDateString()}
                  selected={props.values.datepicker}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Password</label>
                <input
                  type={'password'}
                  name="password"
                  placeholder="porn@actor2081"
                  value={props.values.password}
                  onChange={props.handleChange}
                />
              </div>

              <button>Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
