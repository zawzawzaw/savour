<?php
  global $is_debug;
?>

<?php if($is_debug): ?>

  <!--
     ____  _______     __      _   ___     ___    ____   ____ ____  ___ ____ _____
    |  _ \| ____\ \   / /     | | / \ \   / / \  / ___| / ___|  _ \|_ _|  _ \_   _|
    | | | |  _|  \ \ / /   _  | |/ _ \ \ / / _ \ \___ \| |   | |_) || || |_) || |
    | |_| | |___  \ V /   | |_| / ___ \ V / ___ \ ___) | |___|  _ < | ||  __/ | |
    |____/|_____|  \_/     \___/_/   \_\_/_/   \_\____/ \____|_| \_\___|_|    |_|

  -->

  <link rel="stylesheet" type="text/css" href="assets/css/style.css">

  <!-- Page Library -->
  <script type="text/javascript" src="assets/libs/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="assets/libs/jquery-mousewheel/jquery.mousewheel.min.js"></script>
  <script type="text/javascript" src="assets/libs/jquery-disablescroll/jquery.disablescroll.min.js"></script>

  <!-- only available in article index -->
  <!-- <script type="text/javascript" src="assets/libs/jquery-jscroll/jquery.jscroll.min.js"></script> -->
  <!-- <script type="text/javascript" src="assets/libs/jquery-jscroll/jquery.jscroll.js"></script> -->

  <script type="text/javascript" src="assets/libs/misc-js/manic-custom-polyfill.js"></script>
  <script type="text/javascript" src="assets/libs/misc-js/mobile-detect.js"></script>
  <script type="text/javascript" src="assets/libs/misc-js/preloadjs-0.4.0.min.js"></script>

  <script type="text/javascript" src="assets/libs/gsap/src/minified/TimelineMax.min.js"></script>
  <script type="text/javascript" src="assets/libs/gsap/src/minified/TweenMax.min.js"></script>
  <script type="text/javascript" src="assets/libs/gsap/src/minified/jquery.gsap.min.js"></script>
  <script type="text/javascript" src="assets/libs/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>

  <script type="text/javascript" src="assets/libs/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
  <script type="text/javascript" src="assets/libs/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
  <script type="text/javascript" src="assets/libs/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"></script>

  <!--<script type="text/javascript" src="assets/libs/video.js/dist/video.min.js"></script> -->
  <script type="text/javascript" src="assets/libs/videojs_old/video.js"></script>
  <script type="text/javascript" src="assets/libs/slick-carousel/slick/slick.min.js"></script>
  <script type="text/javascript" src="assets/libs/imagesloaded/imagesloaded.pkgd.min.js"></script>

  <script type="text/javascript" src="assets/libs/hammer/hammer.min.js"></script>


  <!-- Google Closure -->
  <script src="assets/libs/google-closure/closure-library/closure/goog/base.js"></script>
  <script src="assets/js_source/google-closure-dependency-list.js"></script>
  <script type="text/javascript">
    goog.require('savour.page.ArticleIndex');
  </script>
  <script type="text/javascript">
    page = new savour.page.ArticleIndex({});
  </script>
  
<?php else: ?>

  <!--
      ___  ____ _____ ___ __  __ ___ __________ ____
     / _ \|  _ \_   _|_ _|  \/  |_ _|__  / ____|  _ \
    | | | | |_) || |  | || |\/| || |  / /|  _| | | | |
    | |_| |  __/ | |  | || |  | || | / /_| |___| |_| |
     \___/|_|    |_| |___|_|  |_|___/____|_____|____/

  -->

  <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js"></script>
  <script type="text/javascript">
    var PAGE_LIBRARY        = "assets/js/page-libraries.min.js";
    var PAGE_JS             = "assets/js/page-article-index.min.js";

    // prevent variable override
    window.headjs = head;

    window.headjs.load("assets/css/style.css");
    window.headjs.load(PAGE_LIBRARY, function(){
      window.headjs.load(PAGE_JS, function() {
        page = new savour.page.ArticleIndex({});
      });
    });

  </script>
  
<?php endif; ?>