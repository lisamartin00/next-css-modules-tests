import { Card, Image } from 'semantic-ui-react';
import styles from './UserCard.css';

const UserCard = () => (
  <Card className={styles.card}>
    <Card.Content>
      <Card.Header>
        <Image src="https://randomuser.me/api/portraits/women/40.jpg" avatar />
        Mallory Reid
      </Card.Header>
      <Card.Meta>
        <span className="date">
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Mallory is an artist living in Austin.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        22 Friends
      </a>
    </Card.Content>
    <div className={styles.scrim}></div>
  </Card>
);

export default UserCard;