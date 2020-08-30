import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import * as serviceWorker from './serviceWorker';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    var title = document.getElementById("Title");
    title.innerHTML = '';

    if(this.state.email < 1 || this.state.password.lenght < 1){
      title.innerHTML = "Bitte E-Mail Adresse und Passwort eingeben! 😬";
      return;
    }

    if((this.state.email === "mustafa@sulzer.de") && (this.state.password === "Password1!")){
      title.innerHTML = "Login erfolgreich: Mustafa Masetic! 🤙";
    }else{
      title.innerHTML = "Falsche E-mail Adresse oder Passwort! 😲";
    }
  }

  render() {
    return (
      <div className="divControls">
    <h3 id="Title">Willkommen auf unsere Seite!</h3>
    <form onSubmit={this.handleSubmit}>

      <label>
          E-Mail:
          <input className="inputControl" id="email" type="email" placeholder="E-Mail" value={this.state.email} onChange={this.handleEmailChange} /><br></br>
      </label>

      <label>
          Passwort:
          <input className="inputControl" id="password" type="password" placeholder="Passwort" value={this.state.password} onChange={this.handlePasswordChange}/><br></br>
      </label>

      <input className="button" data-test-id="login_button" type="submit" value="Anmelden" />
    </form>
  </div>
    );
  }
}


ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
