import { connect } from 'react-redux';

import { IPlants } from '@/interfaces';
import { setPlant } from '@/redux/plants';

import PlantSave from './PlantSave';

const mapStateToProps = state => ({
  isConnected: state.network.isConnected,
});

const mapDispatchToProps = dispatch => ({
  setPlant: (plant: IPlants) => dispatch(setPlant(plant)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantSave);
