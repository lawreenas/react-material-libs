import React, { Component } from 'react';

// Material ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    console.log('click');
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open} docked={false} width={100}>
          <AppBar></AppBar>
        </Drawer>
        <AppBar
          iconElementLeft={
              <IconButton onClick={this.handleToggle}>
                </IconButton>
              }
              title="LET'SPLAY"
              />
        <div className="container" style={{ textAlign: 'center' }}>
          <Paper style={{  height: '300px', padding: '90px 30px', marginTop: '30px' }} zDepth={2}
                 className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div>
              <TextField style={{ width: '100%',  }}
                         hintText="Start typing..."
                         floatingLabelText="Enter person's identification number"
                         />
            </div>
            <div>
              <RaisedButton className="pull-xs-center" label="Continue" primary={true} />
              <FontIcon className="glyphicon glyphicon-remove" />
              <RaisedButton className="pull-xs-center" secondary={true} icon={<FontIcon className="glyphicon glyphicon-remove" />} />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
