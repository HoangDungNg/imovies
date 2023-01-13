import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles.js';
import { Movie } from '..';

const MovieList = ({ movies, numberOfMovies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => {
        return <Movie key={i} movie={movie} i={i} />;
      })}
    </Grid>
  );
};

export default MovieList;
