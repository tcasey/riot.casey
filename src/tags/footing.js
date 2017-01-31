riot.tag2('footing', '<div class="container-fluid"> <div class="row"> <footer class="footer-wrapper"> <section class="social-media-container"> <virtual each="{social_link in social_media_items}"> <a class="social_media_link" target="_blank" href="{social_link.url}"> <img class="tooltipped" data-position="top" data-delay="30" data-tooltip="{social_link.title}" riot-src="{social_link.src}" alt="{social_link.title}"> </a> <img src="" alt=""> </virtual> </section> </footer> </div> </div>', 'footing .footer-wrapper,[data-is="footing"] .footer-wrapper{ background-color:#282828; width:100%; height:55px; position:fixed; bottom:0px; left:0px; z-index:1002; } footing .social-media-container,[data-is="footing"] .social-media-container{ padding: 1em; display: flex; justify-content: space-around; width: 100%; height:100%; } footing .social_media_link img,[data-is="footing"] .social_media_link img{ height:100%; padding:5%; }', '', function(opts) {

    this.on('mount', function() {
      var $node = $(this.root);
      $node.find('.tooltipped').tooltip({delay: 50});
    })

    this.social_media_items = [

    {title:'Twitter', src: 'public/images/footer_assets/twitter.svg', url: 'https://twitter.com/_tcasey_'},
    {title:'LinkedIn', src: 'public/images/footer_assets/linkedin.svg', url: 'https://www.linkedin.com/in/trevorkc'},

    ];
});
