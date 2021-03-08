import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//MUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    position: 'relative',
  },
  progress: {
    position: 'absolute',
  },
  buttonWrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: '',
      loading: false,
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('http://localhost:3000/api/login', userData)
      .then(res => {
        this.setState({
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false,
        });
        console.log(this.state.errors);
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const classes = styles;
    const { loading, errors } = this.state;

    return (
      <Container component='main' maxWidth='xs'>
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Log In
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              value={this.state.email}
              onChange={this.handleChange}
              error={errors ? true : false}
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              value={this.state.password}
              onChange={this.handleChange}
              helperText={errors}
              error={errors ? true : false}
              autoComplete='current-password'
            />
            <div className={classes.buttonWrapper}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                disabled={loading}
                className={classes.submit}>
                Log In
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.progress}
                    color='secondary'
                  />
                )}
              </Button>
            </div>
            <Grid container>
              <Grid item>
                <Link to='/signup'>{"Don't have an account? Sign up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Login);
