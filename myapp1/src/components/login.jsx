import React from 'react';
import joi from 'joi-browser';

class Login extends React.Component {
  //   userName = React.createRef();

  state = {
    username: '',
    password: '',
    errors: {},
  };

  schema = {
    username: joi.string().required(),
    password: joi.string().required(),
  };



  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) return;
    console.log('ok');
    // console.log(this.userName.current.value);
  };
  handleChange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };
  validate = () => {
     const errors = {};
    // if (this.state.username.trim() === '')
    //   errors.username = 'Username is Required';
    // if (this.state.password.trim() === '')
    //   errors.password = 'Password is Required';
    // this.setState({ errors });
    // return Object.keys(errors).length === 0 ? null : errors;
    const res = joi.validate(this.state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }

    //Set State
    this.setState({ errors });
    return errors;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
            <label htmlFor="username" className="form-label">
              Email address
            </label>
            <input
              //   ref={this.userName}
              name="username"
              id="username"
              type="email"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
