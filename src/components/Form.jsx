import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './assets/monochrome-logo.png';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="white" href="https://www.ucdupes.org/">
        UCDUPES
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    borderRadius: "12px",
    spaging: "3",
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'main' ? theme.palette.white[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.5',
    borderRadius: "12px"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color:"#fff",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
 
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input:{
    color:'white',
    borderColor:'white',
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} spacing={10}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}className={classes.image} style={{gridGap:"50px" }}>
      <div className={classes.paper}>
        <img src={logo} alt="logo" style={{width:"7rem"}} xs={12}/>
        <h1 style={{fontSize:"38px"}}>Hello</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{borderRadius: "12px",backgroundColor:"#23262A"}}>
        <div className={classes.paper} style={{marginleft: "5rem", color:"#fff"}}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              InputLabelProps={{
                className:classes.input,
              }}
              InputProps={{
                className:classes.input,
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              InputLabelProps={{
                className:classes.input,
              }}
              InputProps={{
                className:classes.input,
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="branch"
              label="Branch"
              name="branch"
              InputLabelProps={{
                className:classes.input,
              }}
              InputProps={{
                className:classes.input,
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="sap"
              label="sap id"
              type="number"
              id="sap"
              autoComplete="number"
              InputLabelProps={{
                className:classes.input,
              }}
              InputProps={{
                className:classes.input,
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="number"
              label="whatsapp no"
              type="number"
              id="number"
              autoComplete="number"
              InputLabelProps={{
                className:classes.input,
              }}
              InputProps={{
                className:classes.input,
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}