import { connect } from 'react-redux';
import LeftSideNav from './LeftSideNav';
import { toggleSidebar } from '../../actions';

const mapStateToProps = state => {
  const { app } = state;
  return { app };
};

export default connect(
  mapStateToProps,
  { toggleSidebar },
)(LeftSideNav);
