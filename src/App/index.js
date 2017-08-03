import React, { Component } from 'react';
import Background from '../Background';

import './style.scss';

class App extends Component {
  render() {
    return (
      <a
        href="http://apps.thatawe.com"
      >
        <main>
          <Background />
          <section>
            <h1>
              thatawe
            </h1>
            <h2>
              a place for apps <span>that awe</span>
            </h2>
            <h4>
              click anywhere to <span>checkout the apps</span>
            </h4>
          </section>
        </main>
      </a>
    );
  }
}

export default App;
