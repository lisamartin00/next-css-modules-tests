import basscss from 'basscss/css/basscss.min.css'
import style from '../style.css';

const Index = () => (
  <div>
    <p className={`${basscss.caps} ${basscss.bold} ${style.foo}`}>Hello Next.js</p>
  </div>
)

export default Index