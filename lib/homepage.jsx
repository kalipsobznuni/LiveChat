'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


class Clicker extends React.Component {
  render() {
      const styles = {color: 'red', width:'100vw', height:'150vh'};
      return (
        <div>
          Yayyyyy!
        </div>
      );
    }



  }

ReactDOM.render(<Clicker />,
		document.getElementById('react-container'));
