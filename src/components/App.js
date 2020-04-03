import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import actions from "../redux/tasks/tasksActions";
import { CSSTransition } from "react-transition-group";
import Filter from "./filter/Filter";
import Alert from './alert/Alert'
import slide from "../transitions/slide.module.css";
import styles from "./App.module.css";

class App extends Component {
  state = {
    inUp: false
  };

  getFilteredContacts = () => {
    return this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter)
    );
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <CSSTransition in={this.state.inUp} timeout={500} classNames={slide}>
          <h1 className={styles.logo}>Phonebook</h1>
        </CSSTransition>
        <ContactForm submitContact={this.props.submitContact} />
        <Filter
          flag={this.props.contacts.length > 2 ? true : false}
          nameFilter={this.props.nameFilter}
        />
        <ContactList
          contacts={
            this.props.filter === ""
              ? this.props.contacts
              : this.getFilteredContacts()
          }
          deleteContact={this.props.deleteContact}
        />
        <Alert active={this.state.alert ? true : false} submitContact={this.submitContact}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { contacts: state.tasks.contacts, filter: state.tasks.filter };
};

export default connect(mapStateToProps, { ...actions })(App);
