const newman = require('newman'); 

newman.run({
    collection: require('../BrendaR_GraphqlWorkshop/postmanJson/BrendaRobles_GraphqlWorkshop.postman_collection.json'),
    exportEnvironment: require('../BrendaR_GraphqlWorkshop/postmanJson/url.postman_environment.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
