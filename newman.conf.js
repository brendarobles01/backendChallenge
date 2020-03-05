const newman = require('newman'); 

newman.run({
    collection: require('../BrendaR_GraphqlWorkshop/BrendaRobles_GraphqlWorkshop.postman_collection.json'),
    exportEnvironment: require('../BrendaR_GraphqlWorkshop/url.postman_environment.json'),
    reporters: 'html',
    reporter: {
        html: {
            export: './htmlResults.html', 
            template: './customTemplate.hbs'
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});