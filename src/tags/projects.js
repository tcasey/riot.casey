riot.tag2('sample', '<div class="container center-align"> <h1 class="test">page 1</h1> <a href="#sample2" class="btn btn-large teal lighten-2">page 2</a> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>', 'sample .test,[data-is="sample"] .test{ color:red; }', '', function(opts) {
    this.on('mount', function(){
      var $node = $(this.root);
      $node.find('h1').hide().fadeIn(1500);
    });
});
