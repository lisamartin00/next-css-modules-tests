import { mt4 } from 'basscss/css/basscss-important.css';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../semantic.css';

const Layout = props => (
  <Container className={mt4}>
    {props.children}
  </Container>
)

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
