import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICommunityCollection } from '/imports/api/db/communities/community.collection';

interface CommunityListItem {
  community: ICommunityCollection;
}

const useStyles = makeStyles((theme) => ({
  communityWrapper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 3),
    display: 'flex',
    flexDirection: 'column',
    height: '150px',
    width: '25%',
    justifyContent: 'space-around',
    margin: '35px',
  },
}));

function CommunityListItem({ community }: CommunityListItem): JSX.Element {
  const classes = useStyles();

  return (
    <Paper className={classes.communityWrapper}>
      <Link
        to={`/communities/${community._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <label>Name:</label>
        <p>{community.name}</p>
        <label>Description:</label>
        <p>{community.description}</p>
      </Link>
    </Paper>
  );
}

export { CommunityListItem };
