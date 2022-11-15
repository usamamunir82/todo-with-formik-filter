import React, { useEffect, useContext } from "react";
import { useState } from "react";
import "./todoform.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/todoReducer/todoSlice";
import { updateTodo } from "../../redux/reducers/todoReducer/todoSlice";
import updateContext from "../context/updateContext";
import { Link } from "react-router-dom";
import { RiContrastDropLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function TodoForm() {
  const dispatch = useDispatch();
  const { state, setstate } = useContext(updateContext);
  const navigate = useNavigate();
  // const [value, setValue] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  // });
  // console.log(value);


  // const handleChange = (evt) => {
  //   setValue({
  //     ...value,
  //     [evt.target.name]: evt.target.value,
  //   });
  // };

  // useEffect(() => {
  //   setValue({
  //     firstName: state?.firstName,
  //     lastName: state?.lastName,
  //     email: state?.email,
  //   });
  // }, [state]);

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(
  //     addTodo({
  //       firstName: value.firstName,
  //       lastName: value.lastName,
  //       email: value.email,
  //     })
  //   );
  //   // setValue({ firstName: "", lastName: "", email: "" });
  // };

  
  // const handelUpdate = () => {
  //   event.preventDefault();
  //   dispatch(
  //     updateTodo(
  //       {
  //         firstName: values.firstName  ,
  //         lastName: values.lastName,
  //         email: values.email,
  //         id: state?.id,
  //       },
  //       setValue({ firstName: "", lastName: "", email: "" })
  //     )
  //   );
  //   setstate(null);
  // };
  // const SignupSchema = Yup.object().shape({
  //   firstName: Yup.string()

  //     .max(5, "Too Long!")
  //     .required("Required"),
  //   lastName: Yup.string()
  //     .min(5, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   email: Yup.string().email("Invalid email").required("Required"),
  // });

  const formik = useFormik({
    initialValues: {
      firstName: state ? state.firstName : "",
      lastName: state ? state.lastName : "",
      email: state ? state.email : "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(5, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(2, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      
      if (state) {
        dispatch(
          updateTodo({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,

            id: state.id,
          }
          
          )
          );
          setstate(null)
        navigate('/')
      }
    else {
        dispatch(
          addTodo({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
          })
        );
        resetForm();
      }

    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="formContainer">
          <div className="formInput">
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="formInput">
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className="formInput">
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="formButon">
            <Link to="/">
              <button>Cancel</button>
            </Link>
            <button type="submit">{state ? "Update" : "Submit"}</button>
          </div>
        </div>
      </form>

      {/* <form
            onSubmit={(event) =>
              state ? handelUpdate(event) : onSubmit(event)
            }
          >
            <div className="formContainer">
              <div className="formInput">
                <input
                  value={value.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your First Name"
                />
                {
                  <div>{errors.firstName}</div>
               }
              </div>
              <div className="formInput">
                <input
                  value={value.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}

                  // placeholder="Enter your last Name"
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </div>
              <div className="formInput">
                <input
                  value={value.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // placeholder="Enter Your email"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>
              <div className="formButon">
                <Link to="/">
                  <button>Cancel</button>
                </Link>
                <button
                  type="submit"
                  disabled={ isValid }
                >
                  {state ? "Update" : "Submit"}
                </button>
              </div>
            </div>
          </form> */}

      {/* <form onSubmit={(event) => (state ? handelUpdate(event) : onSubmit(event))}>
      <div className="formContainer">
        
          <div>
            <label>Add Your Todo</label>
          </div>
          
          <div className="formInput">
            <input
              value={value.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="Enter Your First Name"
              required
            />
          </div>
          <div className="formInput">
            <input
              value={value.lastName}
              name="lastName"
              onChange={handleChange}
              placeholder="Enter your last Name"
              required
            />
          </div>
          <div className="formInput">
            <input
              value={value.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter Your email"
              required
            />
          </div>
          <div className="formButon">
            <Link to="/">
              <button>Cancel</button>
            </Link>
            <button type="submit" >
              {" "}
              {state ? "Update" : "Submit"}
            </button>
          </div>
        </div>
        </form> */}
    </div>
  );
}

export default TodoForm;
