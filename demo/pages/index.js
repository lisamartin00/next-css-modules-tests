import basscss from 'basscss/css/basscss-important.min.css';
import { Header, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import UserGrid from '../components/UserGrid/UserGrid';
import UserCard from '../components/UserCard/UserCard';

const Index = () => (
  <Layout>
    <div className={`${basscss.flex} ${basscss['justify-between']}`}>
      <Header as="h1" className={basscss.caps}>Users</Header>
      <Button primary>Add User</Button>
    </div>
    <UserGrid />
    <UserCard />
  </Layout>
)

export default Index;