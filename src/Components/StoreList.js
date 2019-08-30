import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getStore} from '../Publics/Redux/Actions/storeList';

class Store extends Component {
  state = {
    dataStore: [],
  };
  componentDidMount = async () => {
    //fetching => butuh waktu => (undefined => obj)
    //setState => undefined, jika pakai promise, then+catch, diambil obj
    await this.props.dispatch (getStore ());
    this.setState ({
      dataStore: this.props.data.storeList,
    });
  };
  render () {
    // console.log ('data store = ', this.state.dataStore);
    const {dataStore} = this.state;
    return (
      <div>
        {dataStore.length === 0
          ? <p style={{fontSize: 40}}>
              Welcome
            </p>
          : <ul style={{listStyle: 'none'}}>
              {dataStore.data.map ((product, index) => {
                return (
                  <li key={index}>
                    <p style={{fontSize: 30, fontWeight: 'bold'}}>
                      {product.item.name}
                    </p>
                    <img src={product.item.images.information} alt="product" />
                  </li>
                );
              })}
            </ul>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.storeList,
  };
};

export default connect (mapStateToProps) (Store);
