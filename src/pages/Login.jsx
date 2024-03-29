import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Form, Formik } from "formik";
import GoogleIcon from "../assets/GoogleIcon";
import { login, singInGoogle } from "../helpers/firebase";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/\d+/, "Password must have a number")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must have a special chars")
    .required("Please enter an password"),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            login(values.email, values.password, navigate);
            navigate("/");
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {({
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <Form>
              <Box
                sx={{
                  marginTop: 12,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h3" variant="h3" color="primary.light">
                  Sign in
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={values?.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values?.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>

                  <Button
                    onClick={() => singInGoogle(navigate)}
                    type="button"
                    fullWidth
                    variant="outlined"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      px: 10,
                      mb: 2,
                    }}
                  >
                    CONTİNUE WITH GOOGLE
                    <GoogleIcon />
                  </Button>
                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    <Link to="/register">Don't have an account? Sign Up</Link>
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Login;