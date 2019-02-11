import React, { Component } from 'react';

class Canvas extends Component {

  render() {
    return (
      <div>
      <canvas ref="canvas" width={200} height={200} />
      </div>
    );
  }

}

export default Canvas;
