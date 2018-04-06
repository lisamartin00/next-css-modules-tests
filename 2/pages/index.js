import basscss from 'basscss/css/basscss.min.css'
import { Container } from 'semantic-ui-react';
import styles from '../styles.css';

const Index = () => (
  <Container>
    <p className={`${basscss.caps} ${basscss.bold} ${styles.foo}`}>Hello Next.js</p>
    <p className="bar">Blue?</p>
  </Container>
)

export default Index