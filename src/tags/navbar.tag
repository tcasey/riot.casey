<navbar>

  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo links"><i class="material-icons">fingerprint</i></a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a class="links" href="#/bio">bio</a></li>
        <li><a class="links" href="#/projects">projects</a></li>
        <li><a class="links" href="#/skills">skills</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a class="links" href="#/bio">bio</a></li>
        <li><a class="links" href="#/projects">projects</a></li>
        <li><a class="links" href="#/skills">skills</a></li>
      </ul>
    </div>
  </nav>

  <style>
    nav {
      background-color: #f3f3f3;
      font-family: 'Quicksand', sans-serif;
    }
    .links, .material-icons {
      color: #bdb380;
    }
    .brand-logo {
      /*margin-left: 1em;*/
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
