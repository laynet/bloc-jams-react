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

  getIcon() {
      // if this song is the current song
    // ...and if this song is playing
      // ...return JSX representing the pause icon.
    // otherwise...
      // ...return JSX representing the play icon.
  // otherwise...
    // if this song is hovered...
      // ...return JSX representing the play icon
    // otherwise...
      // ...return JSX representing the song number
      //It can use `this.props.song`, `this.props.currentSong`, `this.props.isPlaying`, and `this.state.isHovering` to figure out which JSX to return to the `render` function. Does that make sense?
  }

  render() {
    return(
      <tr className="song"
        key={this.props.index}
        onClick={() => this.props.handleSongClick(this.props.song)}
        handleOnMouseEnter={() => this.handleOnMouseEnter()}
        handleOnMouseLeave={() => this.handleOnMouseLeave()}

      >

        <td>
          {this.getIcon()}
        </td>

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
