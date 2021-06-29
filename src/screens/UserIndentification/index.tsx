import { connect } from 'react-redux';
import * as userActions from '@/redux/user';
import { IUser } from '@/interfaces';

import UserIndentification from './UserIndentification';

const mapStateToProps = state => ({
  isConnected: state.network.isConnected,
  user: state.user.data,
});

const mapDispatchToProps = dispatch => ({
  setUser: (params: IUser) => dispatch(userActions.setUser(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndentification);
