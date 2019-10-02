import express from 'express';
import { addFavorite, getFavorites, removeFavorites} from '../controllers/favoritesController';

const favorites = express.Router();

favorites.post('/add', addFavorite);
favorites.post('/remove', removeFavorites);
favorites.get('/view/:userId?', getFavorites);

export default favorites;