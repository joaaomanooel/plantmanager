import { connect } from 'react-redux';
import * as plantsActions from '@/redux/plants';
import * as environmentsActions from '@/redux/environments';
import { selectors as fetchSelector } from '@/redux/fetch';
import { IServicesGet } from '@/interfaces';
import { actions as actionsTypes } from '@/constants';

import PlantSelect from './PlantSelect';

const mapStateToProps = state => ({
  loadingEnvironments: fetchSelector.getFetching(actionsTypes.getEnvironments(), state),
  errorEnvironments: fetchSelector.getError(actionsTypes.getEnvironments(), state),
  loadingPlants: fetchSelector.getFetching(actionsTypes.getPlants(), state),
  errorPlants: fetchSelector.getError(actionsTypes.getPlants(), state),
  isConnected: state.network.isConnected,
  environments: state.environments.list,
  plants: state.plants.list,
});

const mapDispatchToProps = dispatch => ({
  getPlants: (params: IServicesGet) => dispatch(plantsActions.getPlantsRequest(params)),
  getEnvironments: (params: IServicesGet) =>
    dispatch(environmentsActions.getEnvironmentsRequest(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantSelect);
