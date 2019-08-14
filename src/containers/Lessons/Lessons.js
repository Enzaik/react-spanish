import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from '../../axios-instance';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default class Lessons extends Component {

  state= {messages: null}

componentDidMount(){
  axios.get('students.json')
  .then(res=>{
    
    this.setState({...this.state, messages: res.data})
    console.log(this.state);
  })
}


  render(){

let states = <LinearProgress />;

if(this.state.messages !== null){
  states = (
    this.state.messages.map(state =>{
      return (<ListItem button>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary={state.name} />
      </ListItem>)
    })
  )
}



    return (
      <Container >
        <List component="nav" aria-label="main mailbox folders">
          {states}
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
        {/* <ListItem button>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem> */}
        </List>
      </Container>
    );
  }
 
}