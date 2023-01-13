//===============================importing from modules===============================
import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Grid, Box, CircularProgress, Button, Typography, ButtonGroup } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

//===============================importing from modules===============================
import { useGetActorDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';
import useStyles from './styles';
// use useParams to get the actor id
// make a new call using redux toolkit query-> get actor details call
// use useGetActorHook to get actor's info

const Actors = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const { data, error, isFetching } = useGetActorDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });
  console.log(data);
  // A parent grid
  // A grid containing the actor image
  // A grid containing the actor information (name, birthday, overview)
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
          Go back
        </Button>
      </Box>
    );
  }

  return (
    <Grid container spacing={3} className={classes.containerSpaceAround}>
      {/**Grid containing the actor profile image */}
      <Grid item container sm={12} md={5} lg={5} xl={4}>
        <img className={classes.actorImage} src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`} alt={`${data?.name}`} />
      </Grid>
      {/**Grid containing the actor information */}
      <Grid item container md={7} lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant="h2" gutterBottom align="left">
          {data?.name}
        </Typography>
        <Typography variant="h5" gutterBottom align="left">
          Born: {new Date(parseInt(data?.birthday)).toDateString()}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data?.biography || 'Sorry, no biography for this actor yet...'}
        </Typography>
        <Grid item container>
          <ButtonGroup size="small" aria-label="small button group" className={classes.buttonsContainer}>
            <Button variant="contained" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} variant="outlined" style={{ textDecoration: 'none' }} onClick={() => history.goBack()}>
              Back
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      {/**Recommended Movies */}
      <Box margin="2rem 0" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} totalPages={movies?.total_pages} setPage={setPage} />
      </Box>
    </Grid>
  );
};

export default Actors;
