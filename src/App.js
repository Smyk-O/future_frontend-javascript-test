import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }


  loadingList = async (listSize) => {

    if (listSize === "litle") {
      const list_url = await
        fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
      const list_data = await list_url.json();

      this.setState({
        items: list_data
      });
    }

    else {
      const list_url = await
        fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
      const list_data = await list_url.json();

      this.setState({
        items: list_data
      });
    }

  }

  getItem() {
    if (this.state.items.length > 0) {
      return this.state.items.map((item) => {
        return (
          <div className="item_table" key={item.id}>
            <div className="table_id">{item.id}</div>
            <div className="table_firstName">{item.firstName}</div>
            <div className="table_lastName">{item.lastName}</div>
            <div className="table_email">{item.email}</div>
            <div className="table_phone">{item.phone}</div>
          </div >
        )
      });
    } if (!this.state.items) {
      return (<div className="loading">loading...</div>)
    } else {return(<div className="choose">choose a list</div>)}
  }


  render() {
    console.log(this.state.item)
    return (
      <Container className="app">
        <div className="button-group">
          <Button outline color="secondary" onClick={(() => {this.loadingList("litle"); this.setState({items: false })})}>little list</Button>
          <Button outline color="secondary" onClick={(() => {this.loadingList("large"); this.setState({items: false })})}>large list</Button>
        </div>

        <div>
          <div className="item_table item_table_title">
            <div className="table_id">id</div>
            <div className="table_firstName">firstName</div>
            <div className="table_lastName">lastName</div>
            <div className="table_email">email</div>
            <div className="table_phone">phone</div>
          </div >
          {this.getItem()}
        </div>

      </Container>
    );
  }
}

export default App;
