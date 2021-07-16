import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Facebook } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    transform: "Rotate(180deg)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [usernameValidate, setUsernameValidate] = useState(true);
  const [emailValidate, setEmailValidate] = useState(true);
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = { email, username, password };
    try {
      const { data } = await axios.post("auth/signup", newUser);
      console.log(data);
      setUsername("");
      setEmail("");
      setPassword("");
      setPasswordValidate("");
      history.push("/");
    } catch (error) {
      console.log(error.response.data);
      setEmailValidate(false);
    }
  };

  useEffect(() => {
    // try to get a user
    axios
      .get(`/users?username=${username}`)
      .then((res) => {
        if (res.data) {
          setUsernameValidate(false);
        } else {
          setUsernameValidate(true);
        }
      })
      .catch((err) => console.log(err));
  }, [username]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Facebook />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignup}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="Username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                autoComplete="username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                error={!usernameValidate}
                helperText={usernameValidate ? "" : "已存在该用户！"}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={({ target }) => {
                  setEmailValidate(true);
                  return setEmail(target.value);
                }}
                error={!emailValidate}
                helperText={emailValidate ? "" : `Email已存在！`}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordValidate"
                label="PasswordValidate"
                type="password"
                id="passwordValidate"
                value={passwordValidate}
                onChange={({ target }) => setPasswordValidate(target.value)}
                error={password !== passwordValidate}
                helperText={
                  password !== passwordValidate ? "密码必须相同!" : ""
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
