import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) =>(({
  root: {
    width: '100%',
    margin: theme.spacing(4),
    marginLeft: 0

  },
})))

export default function ProgressBar() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
        timer === 80 ? setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10)) : setProgress(80)
    }, 300);
    return () => {
      clearInterval(timer)
    };
  }, []);

  return (
    <div className={classes.root}>
    <Typography variant='h6'> Goal Progress</Typography>
    <Typography>Unscheduled treatments</Typography>
    <LinearProgressWithLabel value={progress} />
    <Typography>Follow-ups Scheduled </Typography>
    <LinearProgressWithLabel value={progress - 10} />
    <Typography>Diagnosed Patients </Typography>
    <LinearProgressWithLabel value={progress + 10} />
    </div>
  );
}