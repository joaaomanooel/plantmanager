import { connect } from 'react-redux';
import StackNavigation from './StackNavigation';

const mapStateToProps = state => ({
  isConnected: state.network.isConnected,
  user: state.user.data,
});
export default connect(mapStateToProps)(StackNavigation);
