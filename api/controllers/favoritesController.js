import { insertFavorite, getFavoriteByUserId, removeFavoriteByUserId } from '../db/favoritesDbUtil';

export const addFavorite = async (req, res) => {
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
    const result = await insertFavorite(favorite);
    if (result) {
        res.send({
            success: 'true',
            message: 'favorite added',
            favorite
        });
    }
    else {
        res.send({
            success: 'false',
            message: 'favorite could not be added'
        });
    }
};

export const removeFavorites = async (req, res) => {
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
    const result = await removeFavoriteByUserId(req.body.userId, req.body.flightnumber);
    if(result) {
        res.send({
            success: 'true',
            message: 'favorite removed',
        });
    } else {
        res.send({
            success: 'false',
            message: 'favorite could not be removed'
        });
    }
}

export const getFavorites = async (req, res) => {
    const userId = req.params.userId;
    if (!userId){
        res.json('No userId was supplied');
    }
    const favorites = await getFavoriteByUserId(userId);
    res.json(favorites);
};