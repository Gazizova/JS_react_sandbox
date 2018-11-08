import React, { Component } from 'react';
// import './Form.css';
import Button from '../components/back_to'
import FormErrors from './FormErrors'


export default class extends Component {
    constructor (props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        note: '',
        formErrors: {email: '', password: '', note:''},
        emailValid: false,
        passwordValid: false,
        formValid: false,
        noteValid: false
      }
    }
    handleChange(event) {
      // this.setState({value: event.target.value})
      // let symb = /[^0-9]/g
      // console.log(value);
      // let newval = value.replace(symb, '-')
      // console.log(newval);
      // this.setState({value: newval})
      // console.log(this.state.value)
    };

    handleUserInput (e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
               () => { this.validateField(name, value) });
        // console.log(e.target.value)
    }


    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
      let noteValid = this.state.noteValid;
      let symb = /[^0-9]/g
      let newval;
      // let symb = /^[^\u0009\u000A\u000D\u007E\u00A0-\u00A5\u00A7\u00A8\u00AF\u00B4\u00B6\u00B7\u00C0-\u00DD\u00DF-\u00FE]/i;

          switch(fieldName) {
            case 'email':
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              fieldValidationErrors.email = emailValid ? '' : ' is invalid';
              break;
            case 'password':
              passwordValid = value.length >= 6;
              fieldValidationErrors.password = passwordValid ? '': ' is too short';
              break;
            case 'note':
              noteValid = value.match(symb);
              // let a = 'wer3456'
              // let b = /\d/gi;
              // let newstr = a.replace(symb, '-')
              // // console.log(newstr)
              console.log(value);
              newval = value.replace(symb, '-')
              console.log(newval);
              this.setState({value: newval})
              fieldValidationErrors.note = noteValid ? '': ' is not match regex';
              break;  
            default:
              break;
          }

      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid,
                      noteValid: noteValid,
                      note: newval
                    }, this.validateForm);
    }

    // validateForm() {
    //   this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    // }


    render () {
        return (
            <form className="form-inline">
                <h2>Sign up</h2>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control"
                    name="email" value={this.state.email} />
                </div>
                <div className="form-group">
                     <label htmlFor="password">Password</label>
                    <input type="password" className="form-control"
                       name="password" value={this.state.password} onChange={(event) => this.handleUserInput(event)}/>
                </div>
                <button type="submit" className="btn btn-primary" >
                Sign up
                </button>
                <Button to = '/' title='Back'/>
                    <div className="panel panel-default">
                     <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">With textarea</span>
                    </div>
                    <textarea name="note" className="form-control" aria-label="With textarea" 
                    value={this.state.note} 
                    onChange={(event) => this.handleUserInput(event)}></textarea>
                </div>
            </form>
        )
        }
}

// export default Form;
