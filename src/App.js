import React,{Component} from 'react';
import {
List,
Loader,
Grid,
Dimmer,
Placeholder,
Icon,
Button,
Divider,
Header,
Search,
Segment,
Image
} from "semantic-ui-react";

class App extends Component{
  render(){
    return(
      <div >
      <Segment placeholder style={{marginTop :'25px'}}>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign ='middle'>
              <Grid.Column >
                    <Header icon>
                      <Icon name ='search' size='massive'/>
                      Carai Document
                    </Header>
                    <Search placeholder ='Seacrh Document' />
                  </Grid.Column>
                <Grid.Column  >
                <Header icon>
                  <Icon name='pdf file outline' />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
           <Dimmer active>
             <Loader size ='big'>Loading</Loader>
           </Dimmer>

           <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
         </Segment>

         <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
        <h3> Website yang Terkait</h3>
          <List>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Google.com'>Google</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Facebook.com'>Facebook</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.semantic-ui.com'>Semantic UI</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.niomic.com'>Niomic</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.react-bootstrap.netlify.app'>React</a>
              </List.Content>
            </List.Item>
         </List>
         </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App;
