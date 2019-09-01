import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import {Table,Menu,Search,Label,Icon,Grid,List,Feed,Image} from "semantic-ui-react"
class App extends Component {
  render() {
    return (
      <div>
      <br /> <br />
          <Grid container columns={1}>
            <Grid.Column>
             <Table called>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell >
                   <Menu floated='right' pagination>

                      <Search placeholder='Search document...' />
                   </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>

           <Table celled>
             <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='center'>nama document</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>jenis file</Table.HeaderCell>

               </Table.Row>
             </Table.Header>

             <Table.Body>
               <Table.Row>
                 <Table.Cell>
                   <Label ribbon>panduan belajar java script</Label>
                 </Table.Cell>
                  <Table.Cell textAlign='center'>pdf</Table.Cell>
              </Table.Row>
            </Table.Body>

             <Table.Body>
               <Table.Row>
                 <Table.Cell>
                  panduan belajar css
                 </Table.Cell>
                   <Table.Cell textAlign='center'>pdf</Table.Cell>
              </Table.Row>
            </Table.Body>

             <Table.Body>
              <Table.Row>
                <Table.Cell>
                 panduan belajar react js
                </Table.Cell>
                  <Table.Cell textAlign='center'>pdf</Table.Cell>
              </Table.Row>
             </Table.Body>

             <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
             </Table.Footer>
           </Table>
         </Grid.Column>
         </Grid>

           <Grid container columns={3}>
             <Grid.Column>
               <Feed>
                  <Feed.Event image='  https://react.semantic-ui.com/images/avatar/small/elliot.jpg'>
                  <Feed.Content>
                     <Feed.Summary>
                       <Feed.User>anton</Feed.User> added you as a friend
                       <Feed.Date>3 Hour Ago</Feed.Date>
                     </Feed.Summary>
                     <Feed.Meta>
                       <Feed.Like>
                         <Icon name='like' />
                         4 Likes
                       </Feed.Like>
                     </Feed.Meta>
                   </Feed.Content>
                  </Feed.Event>

                  < Feed.Event icon='pencil' summary=''>
                    <Feed.Content>
                     <Feed.Summary>
                        you submitted a new post to the page
                        <Feed.Date>3 day Ago</Feed.Date>

                    </Feed.Summary>
                    </Feed.Content>
                 </Feed.Event>


                 < Feed.Event icon='' date='' summary=''>
                   <Feed.Content>
                    <Feed.Summary >
                      <div style={{color :'gray'}}>saya senang belajar bahasa pemograman</div>
                       <Feed.Date>11 like</Feed.Date>

                   </Feed.Summary>
                   </Feed.Content>
                </Feed.Event>




                  <Feed.Event>
                    <Feed.Label image=' https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                    <Feed.Content date='4 days ago' summary='david add new 2 new image' />
                  </Feed.Event>
               </Feed>
               <Feed.Extra images>
                <Image.Group>
                 <Image size='tiny' src=' https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                  <Image size='tiny' src=' https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                </Image.Group>

                <Feed.Like>
                  <Icon name='like' />
                  4 Likes
                </Feed.Like>
               </Feed.Extra>
            </Grid.Column>

             <Grid.Column>
             </Grid.Column>

             <Grid.Column>
              <h5>website terkait</h5>
             <List>
                <List.Item icon='linkify' content={<a href='https://www.google.com/'>geogle</a>} />
                <List.Item icon='linkify' content={<a href='http://www.facebook.com'>facebook</a>} />
                <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
                <List.Item icon='linkify' content={<a href='http://www.react.com'>react</a>} />
             </List>
             </Grid.Column>
           </Grid>
      </div>
    );
  }
}

export default App;
