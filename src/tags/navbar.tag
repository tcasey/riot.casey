<navbar>

  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#bio">bio</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#skills">skills</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="#bio">bio</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#skills">skills</a></li>
      </ul>
    </div>
  </nav>

  <style>
    nav {
      background-color: rgba(0,0,0,.75);
    }
    .brand-logo {
      margin-left: 1em;
    }
  </style>

  <script>
    this.on('mount', function(){
      // gain access to tag HTML elements after they have been mounted
      var $node = $(this.root);
      $node.find(".button-collapse").sideNav();
    });
  </script>

</navbar>
