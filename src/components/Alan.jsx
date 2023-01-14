import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';
import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key: '35a448a8f58cc535c79affd0d049cb592e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase());
          if (foundGenre) {
            history.push('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory;
            history.push('/');
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === 'search') {
          dispatch(searchMovie(query));
        } else if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          // localStorage contains sessionId, accountId and request_token
          // empty the local storage to remove sessionId, accountId and request_token
          localStorage.clear();
          // re-load the page
          history.push('/');
        }
      },
    });
  }, []);
};

export default useAlan;
