import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import "../components/styles/register.css";
import {
  CircularProgress,
  Container,
  FormControl,
  FormLabel,
} from "@mui/material";
import SubmitOTP from "../components/submit-otp/SubmitOTP";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetchPost from "../hooks/useFetchPost";
import { useEffect, useRef, useState } from "react";

function Copyright(props) {
  return (
    <Typography
      fontSize={"14px"}
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Social Media App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function Register() {
  const [isChecked, setIsChecked] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const { isLoading, data, error, fetchData } = useFetchPost();
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidate = handleFormValidation();

    if (isValidate) {
      toast.info("Please fill in all required fields!");
    } else {
      const data = new FormData(event.currentTarget);
      const userData = {
        email: data.get("email"),
      };
      const url = `${process.env.REACT_APP_BASE_URL}/register/`;
      fetchData(url, userData);
      console.log(data);

      setIsChecked(false);
      formRef.current.reset();
    }
  };

  const handleFormValidation = () => {
    const email = formRef.current.email.value.trim();

    return !email;
  };

  useEffect(() => {
    if (data === "Invalid recipients email id!") {
      return toast.error(data);
    }

    if (data?.msg === "User Verification OTP sent successfully.") {
      toast.success(data?.msg);
      setIsOtpSent(true);
    }
  }, [data]);

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container className="register" component="main" maxWidth="xs">
        {!isLoading ? (
          isOtpSent ? (
            <Box className="inner-register">
              <Typography
                component="h1"
                variant="h4"
                color={"#0e0e0e"}
                fontWeight={"300"}
                textAlign={"center"}
              >
                Create Your Account
              </Typography>

              <Typography
                m={"10px 0px 20px 0px"}
                textAlign={"center"}
                fontSize={"14px"}
              >
                Already have an account? <Link to={"/login"}>Log In</Link>
              </Typography>

              <Box
                ref={formRef}
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl>
                      <FormLabel
                        style={{
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Checkbox
                          value="allowExtraEmails"
                          size="small"
                          color="primary"
                          checked={isChecked} // Set the checked state of the Checkbox
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        Yes, I would like Dell to send me email communications.
                      </FormLabel>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 1, padding: "12px" }}
                >
                  Send OTP
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2, padding: "12px" }}
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
              </Box>
            </Box>
          ) : (
            <Box className="otp-div">
              <Typography
                component="h1"
                variant="h4"
                color={"#0e0e0e"}
                fontWeight={"300"}
                textAlign={"center"}
              >
                Create and Verify Your Account
              </Typography>

              <Typography
                m={"10px 0px 20px 0px"}
                textAlign={"center"}
                fontSize={"14px"}
              >
                Already have an account? <Link to={"/login"}>Log In</Link>
              </Typography>

              <Box ref={formRef} component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="bio"
                      required
                      fullWidth
                      id="bio"
                      label="Bio"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="profile"
                      required
                      fullWidth
                      id="profile"
                      label="Profile Picture"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Box className="otp">
                  <SubmitOTP
                    userData={data?.userDetails}
                    setIsOtpSent={setIsOtpSent}
                  />
                </Box>
              </Box>
            </Box>
          )
        ) : (
          <Box className="progress-bar">
            <CircularProgress />
          </Box>
        )}
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register;
