import React, { Component } from 'react';
import { Button, Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './App.css';

const list_little_url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const list_large_url = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      list_page_active: false,
      number_of_pages: false,
      item_target: false
    };
  }

  loadingList = async (listSize) => {
    this.setState({ items: false, number_of_pages: false, item_target: false });

    if (listSize === "little") {
      const list_url = await
        fetch(list_little_url);
      const list_data = await list_url.json();
      const list_page_size = Math.ceil(list_data.length / 30);
      this.setState({
        items: list_data,
        list_page_active: 1,
        number_of_pages: list_page_size
      });
    }

    else {
      const list_url = await
        fetch(list_large_url);
      const list_data = await list_url.json();
      const list_page_size = Math.ceil(list_data.length / 30);
      this.setState({
        items: list_data,
        list_page_active: 1,
        number_of_pages: list_page_size
      });
    }

  }

  targetItem() {

    if (this.state.item_target) {
      const item = this.state.item_target;
      return (
        <div className="fullInfo">
          <div>Выбран пользователь <b>{item.firstName + " " + item.lastName}</b></div>
          <div>Описание:</div>
          <textarea placeholder={item.description}></textarea>
          <div>Адрес проживания: <b>{item.address.streetAddress}</b></div>
          <div>Город: <b>{item.address.city}</b></div>
          <div>Провинция/штат: <b>{item.address.state}</b></div>
          <div>Индекс: <b>{item.address.zip}</b></div>
        </div>
      )
    }
    return null
  }

  getItem() {

    if (this.state.items.length > 0) {
      const firstElem = (this.state.list_page_active - 1) * 30;
      const lastElem = firstElem + 29;
      const selectionItems = this.state.items.slice(firstElem, lastElem);

      return selectionItems.map((item) => {
        return (
          <div className="item_table" key={item.id + item.firstName} onClick={(() => this.setState({ item_target: item }))}>
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
    } else { return (<div className="choose">choose a list</div>) }
  }

  getPage() {

    if (this.state.number_of_pages > 1) {
      let page_btn = []
      for (let i = 0; i < this.state.number_of_pages; i++) {
        page_btn.push(
          <PaginationItem key={i + "page"} onClick={(() => this.setState({ list_page_active: i + 1 }))}>
            <PaginationLink>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      }
      return (
        <Pagination aria-label="Page navigation example" >
          <PaginationItem onClick={(() => this.setState({ list_page_active: this.state.list_page_active - 1 }))}>
            <PaginationLink previous />
          </PaginationItem>
          {page_btn}
          <PaginationItem onClick={(() => this.setState({ list_page_active: this.state.list_page_active + 1 }))}>
            <PaginationLink next />
          </PaginationItem>
        </Pagination>
      )

    }

    return null
  }

  render() {
    return (
      <Container className="app">
        <div className="button-group">
          <Button outline color="secondary" onClick={(() => this.loadingList("little"))}>little list</Button>
          <Button outline color="secondary" onClick={(() => this.loadingList("large"))}>large list</Button>
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
        {this.getPage()}
        {this.targetItem()}
      </Container>
    );
  }
}

export default App;
