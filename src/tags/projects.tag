<projects>

  <div class="container center-align">
    <h1 class="test">projects</h1>
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
  </div>

  <style>
    .container {
      font-family: 'Quicksand', sans-serif;
    }
    .test{
      color: #8fb9ff;
    }
  </style>

  <script>
    this.on('mount', function(){
      var $node = $(this.root);
      $node.find('span').hide().fadeIn(500);
    });
  </script>

</projects>
