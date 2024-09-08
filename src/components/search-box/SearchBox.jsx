import { Component } from "react";
import './SearchBox.css'

class SearchBox extends Component {
    render() {
      const { onSearchChangeHandler } = this.props;
      return (
          <input className={`search-box ${this.props.className}`} type="search" placeholder={this.props.placeHolder} onChange={onSearchChangeHandler}/>
      )
    }
}

export default SearchBox;