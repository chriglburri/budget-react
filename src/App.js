
import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>

      <Header as='h1'>Budget</Header>

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2550.53</Statistic.Value> 
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} defided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{texAlign:"left"}}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>2525</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{texAlign:"left"}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>987987</Statistic.Value>
              </Statistic>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>


      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>321</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' borded></Icon>
              <Icon name='trash' borded></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>something else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>4567</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input 
          icon='tags' width={12} label='Description'
          placeholder='New thing'></Form.Input>
          <Form.Input
          icon='dollar'
          iconPosition='left'
          width = {4} label='Value'
          placeholder="100.00"
          ></Form.Input>
        </Form.Group>
        <Button.Group style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>OK</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
