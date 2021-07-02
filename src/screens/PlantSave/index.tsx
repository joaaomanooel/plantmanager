import { connect } from 'react-redux';

import { IPlants } from '@/interfaces';
import { savePlantRequest } from '@/redux/plants';

import PlantSave from './PlantSave';

const mapStateToProps = state => ({
  isConnected: state.network.isConnected,
});

const mapDispatchToProps = dispatch => ({
  savePlant: (plant: IPlants) => dispatch(savePlantRequest(plant)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantSave);
