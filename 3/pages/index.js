import basscss from 'basscss/css/basscss.min.css'
import { Container } from 'semantic-ui-react';
import styles from '../styles.css';
import '../semantic.css';

const Index = () => (
  <Container>
    <p className={`${basscss.caps} ${basscss.bold} ${styles.foo}`}>
      Caps and Bold CSS come from basscss.  
      Red comes from local CSS Modules css.
    </p>
    <p className="bar">Blue?</p>
    <a href="/otherPage">Other Page</a>
  </Container>
)

export default Index