import { connect } from 'react-redux';
import { selectors as fetchSelector } from '@/redux/fetch';
import MyPlants from './MyPlants';

import { IPlants } from '@/interfaces';
import { removePlantRequest } from '@/redux/plants';

const mapStateToProps = state => ({
  isConnected: state.network.isConnected,
  plantsStoraged: state.plants.storage,
});

const mapDispatchToProps = dispatch => ({
  removePlant: (plant: IPlants) => dispatch(removePlantRequest(plant)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPlants);
