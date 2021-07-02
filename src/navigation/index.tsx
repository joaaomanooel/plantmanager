import { connect } from 'react-redux';
import StackNavigation from './StackNavigation';

const mapStateToProps = state => ({ isConnected: state.network.isConnected });
export default connect(mapStateToProps)(StackNavigation);
