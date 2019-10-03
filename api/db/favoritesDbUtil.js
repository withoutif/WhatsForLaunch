import { Datastore } from "nedb-async-await";

let favorites = new Datastore({ filename: './db/favorites.db', autoload: true });

favorites.ensureIndex({ fieldName: 'flightNumber', unique: true });

export async function insertFavorite(data) {
    try {
        return await favorites.insert(data);
    } catch (e) {
        console.log(e)
    }
}

export async function getFavoriteByUserId(userId) {
    try {
        const faves = await favorites.find({"userId": userId}, {userId: 0, _id: 0});
        //we only need the favorite values
        const valOnly = faves.map(f => Object.values(f));
        return valOnly;
    } catch (e) {
        console.log(e)
    }

}

export async function removeFavoriteByUserId(userId, flightNumber) {
    try {
        const ret = await favorites.remove({userId: userId, flightNumber: flightNumber});
        console.log(ret);
        return ret;
    } catch (e) {
        console.log(e)
    }
}