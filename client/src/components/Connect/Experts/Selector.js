import React, { Component }from 'react';
import _ from 'lodash';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


// style:
const styles = theme => ({
  
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

// Component:
class Selector extends Component {

  renderMenuItems(){
    return (
      this.props.options.map((option) => {
      return <MenuItem key={option} value={option}>{_.capitalize(option)}</MenuItem>;
    })
    )
  }
  
  render() {
    const { classes } = this.props;
    return (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">{_.capitalize(this.props.appName)}</InputLabel>
          <Select
            value={this.props.value}
            onChange={(event) => {this.props.handleChange(event)}}
            name={this.props.appName}
          > 
            <MenuItem key="all" value="all">All</MenuItem>
            {this.renderMenuItems()}
          </Select>
        </FormControl>
    );
  }
}

Selector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Selector);