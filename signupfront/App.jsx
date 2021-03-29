import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class App extends Component {


    constructor() {
        super()
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: ''
        }

        this.changeFullName = this.changeFullName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.chanEmail = this.chanEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onChange = this.onChange(this);
    }
    changeFullName = (e) => {

        this.setState({ fullName: e.target.value });
    }


    changeUserName = (e) => {

        this.setState({ userName: e.target.value });
    }

    chanEmail = (e) => {

        this.setState({ email: e.target.value });
    }

    changePassword = (e) => {

        this.setState({ password: e.target.value });
    }

    onChange(e) {


        const registered = {
            fullName: this.state.fullName,
            username: this.state.userName,
            email: this.state.email,
            passward: this.state.password
        }

        axios.post('http://localhost:3005/app/signup', registered)
            .then(res => console.log(res.data))

        this.setState({

            fullName: '',
            userName: '',
            email: '',
            password: ''

        })
    }






    render() {
        return ( <div>
            <div className = 'container'>
            <div className = 'form-div'>
            <form onSubmit = { this.onChange }>

            <input type = 'text'
            placeholder = 'Full Name'
            onChange = { this.changeFullName }
            value = { this.state.fullName }
            className = 'form-control' />
            <input type = 'text'
            placeholder = 'User Name'
            onChange = { this.changeUserName }
            value = { this.state.userName }
            className = 'form-control' />
            <input type = 'E-mail'
            placeholder = 'Email'
            onChange = { this.chanEmail }
            value = { this.state.email }
            className = 'form-control' />
            <input type = 'password'
            placeholder = 'Password'
            onChange = { this.changePassword }
            value = { this.state.password }
            className = 'form-control' />

            <input type = 'submit'
            className = 'btn btn-danger btn-block'
            value = 'Submit'/>
             </form> 
            </div > 
            </div> 
            </div >
        )
    }
}

export default App;
