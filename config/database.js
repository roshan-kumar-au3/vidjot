if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://roshan:9939105936@music-app-db-hexhh.mongodb.net/vidjot-prod?retryWrites=true&w=majority"};
    } else {
        module.exports = {
            mongoURI: 'mongodb://localhost/vidjot-dev'
        };
    }