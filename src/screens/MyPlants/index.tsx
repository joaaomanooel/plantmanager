import { connect } from 'react-redux';
import { selectors as fetchSelector } from '@/redux/fetch';
import MyPlants from './MyPlants';

const mapStateToProps = state => ({
  isConnected: state.network.isConnected,
  plantsStoraged: state.plants.storage,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyPlants);
