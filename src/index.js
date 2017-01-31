require('expose?$!expose?jQuery!jquery');
require("materialize-css/dist/css/materialize.min.css");
require("materialize-css/dist/js/materialize.min.js");

// require all your necessary elements
require('./tags/main.tag');
require('./tags/navbar.tag');
require('./tags/footing.tag');
require('./tags/projects.tag');
require('./tags/skills.tag');
require('./tags/bio.tag');

// route file
require('./routes.js');
