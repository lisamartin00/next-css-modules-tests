import basscss from 'basscss/css/basscss.min.css'
import style from '../style.css';
import { Container } from 'semantic-ui-react';

const Index = () => (
  <Container>
    <p className={`${basscss.caps} ${basscss.bold} ${style.foo}`}>Hello Next.js</p>
    <p className="ui message">Why, oh why?!?</p>
  </Container>
)

export default Index