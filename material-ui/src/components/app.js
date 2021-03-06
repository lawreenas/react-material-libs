import React, { Component } from 'react';

// Material ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { open: false, count: 0 };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    console.log('click');
    this.setState({ open: !this.state.open });
  }

  onAddToCart(e) {
    console.log('add to cart', this.state.count);
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open} docked={false}
                onRequestChange={(open) => this.setState({open})}>
          <AppBar
            iconElementLeft={<IconButton iconClassName="fa fa-bars" onClick={this.handleToggle}></IconButton> }
            />
        </Drawer>
        
        <AppBar
          iconElementLeft={<IconButton iconClassName="fa fa-bars" onClick={this.handleToggle}></IconButton> }
          title="Bee"
          style={{boxShadow: 0}}
          iconElementRight={
              <Badge
                  badgeContent={this.state.count}
                  primary={true}
                  badgeStyle={{}}
                  style={{padding: 0, margin: 0}}>
                  <IconButton iconClassName="fa fa-shopping-cart" style={{margin: 0, padding: 0}}/>
                </Badge>
              }
              />

        
        <div style={{height: '200px', backgroundColor: '#EEE',  textAlign: 'center'}}>
           <TextField 
                         hintText="Start typing..."
                         floatingLabelText="Enter person's identification number"
                         />
          </div>

        
        <div className="container" style={{ textAlign: 'center' }}>
          
          <Paper style={{  height: '300px', padding: '90px 30px', marginTop: '30px' }} zDepth={1}
                 className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div>
              <TextField style={{ width: '100%',  }}
                         hintText="Start typing..."
                         floatingLabelText="Enter person's identification number"
                         />
            </div>
            <div>
              <RaisedButton className="pull-xs-center" label="Continue" primary={true} style={{marginRight: 10}}/>
              
              <RaisedButton className="pull-xs-center" label="Clear" secondary={true} icon={<FontIcon className="glyphicon glyphicon-remove" />} style={{marginRight: 10}}/>
              <RaisedButton className="pull-xs-center"
                            label="Add to Cart"
                            onClick={this.onAddToCart.bind(this)}
                            />
            </div>


          </Paper>
        </div>
      </div>
    );
  }
}
