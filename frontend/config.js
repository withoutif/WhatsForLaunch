module.exports = {
    config: {
        missionApi: {
            uris: {
                missions: "http://localhost:3001/missions",
                count: "http://localhost:3001/count",
                singleLaunch: "http://localhost:3001/missions/singleLaunch"
            }
        },
        baseUri: "http://localhost:3001/"
    }
}