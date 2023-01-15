import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles.js';
import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const classes = useStyles();
  const startFrom = excludeFirst ? 1 : 0;
  const end = excludeFirst ? numberOfMovies + 1 : numberOfMovies;
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startFrom, end).map((movie, i) => {
        return <Movie key={i} movie={movie} i={i} />;
      })}
    </Grid>
  );
};

export default MovieList;
