import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(Header);
