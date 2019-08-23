import React, {Component} from 'react';

import Greeting from './Greeting';

import '../App.css';
class Home extends Component {
  state = {
    name: 'Arkademy',
    batch: 11,
    isOnline: false,
  };
  changeName = () => {
    this.setState ({
      name: 'QuikStart',
      batch: 20,
    });
  };
  onlineOffline = () => {
    this.setState ({
      isOnline: !this.state.isOnline,
    });
  };
  nextBatch = () => {
    this.setState ({
      batch: this.state.batch + 1,
    });
  };
  loginLogout = () => {
    if (this.state.name === 'Guest') {
      this.setState ({
        name: 'Arkademy',
      });
    } else {
      this.setState ({
        name: 'Guest',
      });
    }
  };
  render () {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isOnline
            ? <Greeting company={this.state.name} batch={this.state.batch} />
            : <p style={{fontSize: 40}}>Loading...</p>}
          <button onClick={this.changeName} style={{fontSize: 35}}>
            Ganti Nama
          </button>
          <button onClick={this.onlineOffline} style={{fontSize: 35}}>
            Go {this.state.isOnline ? 'Offline' : 'Online'}
          </button>
          <button onClick={this.nextBatch} style={{fontSize: 35}}>
            Next batch
          </button>
          <button onClick={this.loginLogout} style={{fontSize: 35}}>
            {this.state.name === 'Guest' ? 'Login' : 'Logout'}
          </button>
        </header>
      </div>
    );
  }
}

export default Home;
