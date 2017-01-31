riot.tag2('navbar', '<nav> <div class="nav-wrapper"> <a href="#" class="brand-logo">Logo</a> <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a> <ul class="right hide-on-med-and-down"> <li><a href="#deats">Sass</a></li> <li><a href="#sample2">page 2</a> </li> <li><a href="collapsible.html">Javascript</a></li> <li><a href="mobile.html">Mobile</a></li> </ul> <ul class="side-nav" id="mobile-demo"> <li><a href="#deats">Sass</a></li> <li><a href="#sample2">page 2</a> </li> <li><a href="collapsible.html">Javascript</a></li> <li><a href="mobile.html">Mobile</a></li> </ul> </div> </nav>', 'navbar nav,[data-is="navbar"] nav{ background-color: rgba(0,0,0,.75); }', '', function(opts) {
    this.on('mount', function(){

      var $node = $(this.root);
      $node.find(".button-collapse").sideNav();
    });
});
