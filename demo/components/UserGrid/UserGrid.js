import { Table, Image } from 'semantic-ui-react';
import { italic } from 'basscss/css/basscss-important.css';
import styles from './UserGrid.css';


const existingUsers = [
  {
    id: 1,
    username: 'mdavis',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    first: 'Matt',
    last: 'Davis',
    role: 'Super admin',
    added: 'Apr 20, 2015',
  },
  {
    id: 2,
    username: 'elliot',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    first: 'Elliot',
    last: 'Fu',
    role: 'Admin',
    added: 'Apr 21, 2015',
  },
  {
    id: 3,
    username: 'jhess',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    first: 'Jenny',
    last: 'Hess',
    role: 'Super admin',
    added: 'Nov 20, 2015',
  },
  {
    id: 4,
    username: 'jhenderson',
    avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
    first: 'Joe',
    last: 'Henderson',
    role: 'Brand rep',
    added: 'Apr 21, 2015',
  },
  {
    id: 5,
    username: 'rsmith',
    avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
    first: 'Rachel',
    last: 'Smith',
    role: 'Agent',
    added: 'Jun 29, 2015',
  },
  {
    id: 6,
    username: 'lindsay',
    avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    first: 'Lindsay',
    last: 'Cox',
    role: 'Content author',
    added: 'Nov 17, 2015',
  },
];

const UserGrid = () => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>First</Table.HeaderCell>
        <Table.HeaderCell>Last</Table.HeaderCell>
        <Table.HeaderCell>Roles</Table.HeaderCell>
        <Table.HeaderCell>Added</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {existingUsers.map(user => (
        <Table.Row key={user.id}>
          <Table.Cell>
            <Image src={user.avatar} avatar />
            { user.username }
          </Table.Cell>
          <Table.Cell>{ user.first }</Table.Cell>
          <Table.Cell>{ user.last }</Table.Cell>
          <Table.Cell className={italic}>{ user.role }</Table.Cell>
          <Table.Cell>{ user.added }</Table.Cell>
          <Table.Cell>
            <span className={styles.actionButton}>
              Edit
            </span>
            <span className={styles.actionButton}>
              Roles
            </span>
            <span className={styles.actionButton}>
              Remove
            </span>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default UserGrid;