import { insertFavorite, getFavoriteByUserId, removeFavoriteByUserId } from '../db/favoritesDbUtil';

export const addFavorite = (req, res) => {
    if(!req.body.flightnumber) {
        console.log(req.body);
        return res.status(400).send({
            success: 'false',
            message: 'flight number is required'
        });
    }
    if(!req.body.userId) {
        return res.status(400).send({
            success: 'false',
            message: 'user is required'
        });
    }
    const favorite = {
        userId: req.body.userId,
        flightNumber: req.body.flightnumber
    };
    insertFavorite(favorite);
    res.send({
        success: 'true',
        message: 'favorite added',
        favorite
    });
};

export const removeFavorites = (req, res) => {
    if(!req.body.flightnumber) {
        console.log(req.body);
        return res.status(400).send({
            success: 'false',
            message: 'flight number is required'
        });
    }
    if(!req.body.userId) {
        return res.status(400).send({
            success: 'false',
            message: 'user is required'
        });
    };
    removeFavoriteByUserId(req.body.userId, req.body.flightnumber);
    res.send({
        success: 'true',
        message: 'favorite removed',
    });
}

export const getFavorites = async (req, res) => {
    const userId = req.params.userId;
    if (!userId){
        res.json('No userId was supplied');
    }
    const favorites = await getFavoriteByUserId(userId);
    res.json(favorites);
};