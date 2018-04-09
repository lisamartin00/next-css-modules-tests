import { Container, Message } from 'semantic-ui-react';

const otherPage = () => (
  <Container>
    <p className="bar">
      Blue - this is defined as a global class and
      we only had to load it once.
    </p>
    <p className="foo">
      This should not be red.  "foo" is not a global class and
      has not been loaded on this view.
    </p>
    <Message info>
      Now that the css has been loaded, we don't have to keep reloading it.
    </Message>
    <a href="/">Home</a>
  </Container>
)

export default otherPage