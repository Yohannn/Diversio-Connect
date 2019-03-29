import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
   
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
    height: 3,
    
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      "Lato",
    ].join(','),
    '&:hover': {
      color: '#5E77FF',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#5E77FF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#5E77FF',
      outline: 'none',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
}

class TopicsTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    
    const Discover = this.props.children[0];
    const Answer = this.props.children[1];

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Discover"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Answer"
          />
        </Tabs>
        {value === 0 && <TabContainer>{Discover}</TabContainer>}
        {value === 1 && <TabContainer>{Answer}</TabContainer>}
      </div>
    );
  }
}

TopicsTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicsTab);