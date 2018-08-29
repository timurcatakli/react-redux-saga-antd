import { IMAGES, STATS } from '../constants';

// IMAGES ACTIONS
const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

// STATS ACTIONS
const loadStats = id => ({
  type: STATS.LOAD,
  id,
});

const setStats = (id, downloads) => ({
  type: STATS.LOAD_SUCCESS,
  id,
  downloads,
});

const setStatsError = id => ({
  type: STATS.LOAD_FAIL,
  id,
});

export {
  loadImages, setImages, setError, loadStats, setStats, setStatsError,
};
