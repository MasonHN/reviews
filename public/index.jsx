// font-family: "Oswald" san-serif;


import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './components/Reviews.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      uuid: 59, //talk to hunter about how this works
      reviews: [], //find a way to get currentUuid's reviews into state
      pageCount: 0,
      currentPage: 1
    }

    this.pageSelect = this.pageSelect.bind(this);
  }

/* This lifecycle method should make a get request to the databse to gather data for the current UUID.
I will also need to find a way to know which UUID is on screen. */
  componentWillMount() {
    axios.get(`http://ec2-54-173-235-60.compute-1.amazonaws.com/api/reviews/${this.state.uuid}`)
    .then((res) => {
      let pages = Math.ceil(res.data[0].reviews.length / 10);
      this.setState({
        reviews: res.data[0].reviews,
        pageCount: pages
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
    window.addEventListener('updateUuid', (event) => {
      this.setState({uuid: event.detail})
    }, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.uuid !== prevState.uuid) {
      axios.get(`http://ec2-54-173-235-60.compute-1.amazonaws.com/api/reviews/${this.state.uuid}`)
    .then((res) => {
      this.setState({reviews: res.data[0].reviews})
    })
    .catch((err) => {
      console.log(err);
    })
    }
  }

  pageSelect(e) {
    this.setState({
      currentPage: e.target.innerHTML
    })
  }

  render() {
    const range = [...Array(this.state.pageCount).keys()]
    return (
      <>
        <Reviews page = {this.state.currentPage} reviewData={this.state.reviews}/>
      <>
        {range.map((element, index) => {
          return (
            <button onClick={this.pageSelect}>{index + 1}</button>
          )
        })}
      </>
      </>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));

