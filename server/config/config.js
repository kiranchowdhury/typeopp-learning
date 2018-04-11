var path = require("path");
var rootPath = path.normalize(__dirname+'/../../');
module.exports = {
    tl_dev: {
      rootPath: rootPath,
      apiUrl: '<dev url for back end micro service>',
      certPath: '<cert path for the back end micro service>',
      secret: '46443c94-16f3-400d-98cb-b46547193155'
    },
    tl_prod: {
      rootPath: rootPath,
      apiUrl: '<prod url for back end micro service>',
      certPath: '<cert path for the back end micro service>',
      secret: 'de2dfc11-769a-4a06-a1eb-6393e4836838'
    }
};
