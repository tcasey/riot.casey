var riot = require('riot');
var route = require('riot-route');

riot.mount('*');
route(function(scene){
  switch(scene){

    case 'skills':
    riot.mount('#main-viewport', 'skills');
    break;

    case 'bio':
    riot.mount('#main-viewport', 'bio');
    break;

    case 'projects':
    riot.mount('#main-viewport', 'projects');
    break;

    case 'home':
    riot.mount('#main-viewport', 'home');
    break;

    default:
    // root of website
     riot.mount('#main-viewport', 'home');
    break;
  }
});

route.base('#');
route.start(true);
