import { IMAGES, STATS, APP } from '../constants';

// IMAGES ACTIONS
const loadImagesAction = () => ({
  type: IMAGES.LOAD,
});

const setImagesAction = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setErrorAction = error => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

// STATS ACTIONS
const loadStatsAction = id => ({
  type: STATS.LOAD,
  id,
});

const setStatsAction = (id, downloads) => ({
  type: STATS.LOAD_SUCCESS,
  id,
  downloads,
});

const setStatsErrorAction = id => ({
  type: STATS.LOAD_FAIL,
  id,
});

// APP ACTIONS
const toggleSidebar = () => ({
  type: APP.TOGGLE_SIDEBAR,
});

export {
  loadImagesAction,
  setImagesAction,
  setErrorAction,
  loadStatsAction,
  setStatsAction,
  setStatsErrorAction,
  toggleSidebar,
};
