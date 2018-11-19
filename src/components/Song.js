import React, { Component } from 'react';



class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
  }

  handleOnMouseEnter() {
    this.setState({ hovering: true})
  }

  handleOnMouseLeave() {
    this.setState({ hovering: false })
  }

  render() {
    return(
      <tr className="song"
        key={this.props.index}
        onClick={() => this.handleSongClick(this.props.song)}
        onMouseEnter={() => this.handleOnMouseEnter()}
      >
        <td>
        {this.props.index+1}
          <ion-icon name="arrow-dropright-circle"></ion-icon>
        </td>

        <td>{this.props.song.title}</td>
        <td>{this.props.song.duration}</td>
      </tr>
    );
  }
}

export default Song;
