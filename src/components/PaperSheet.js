import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import ImageAvatar from './ImageAvatar'
import IconGrid from './IconGrid'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  }),
});

function PaperSheet(props) {
  const { classes } = props
  return (
    <div className="container">
      <Paper className={classes.root} elevation={4}>
        <ImageAvatar />
        <IconGrid />
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet)