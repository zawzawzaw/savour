<?php 
ob_start();
?>
<?php 
  global $is_debug;
  global $body_class;

  // $is_debug = false;
  $is_debug = true;

  $body_class = "page-thank-you no-pin-page";
  $output_file = "thank-you.html";
?>
<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="no-js"><!--<![endif]-->
  <head>
    <?php include('inc/head.php'); ?>
  </head>


  <body class="<?php echo $body_class; ?>">

    <div id="page-preloader">
    </div>


    <!-- mobile header is outside the page wrapper -->
    <?php include('inc/header_mobile.php'); ?>
    
    <div id="page-wrapper">
      <div id="page-wrapper-content">

        <?php include('inc/header.php'); ?>

        <!--
           ____ _____  _    ____ _____
          / ___|_   _|/ \  |  _ \_   _|
          \___ \ | | / _ \ | |_) || |
           ___) || |/ ___ \|  _ < | |
          |____/ |_/_/   \_\_| \_\|_|

        -->




        <div class="page-thank-you-content">
          <article id="page-thank-you-banner-section">
            <div class="manic-image-container">
              <img src="" 
                data-image-mobile="images_cms/thank_you/thank-you-banner.jpg"
                data-image-desktop="images_cms/thank_you/thank-you-banner-mobile.jpg">
            </div>
          </article>

          <article id="page-thank-you-copy-section">
            <div class="container">
              <div class="col-md-3"></div>
              <div class="col-md-6">

                <div id="page-thank-you-copy">
                  <h1>YAY!</h1>
                  <h3>Thanks for subscribing to our newsletter! </h3>
                  <p>A confirmation email has been sent to your email address. <br>
                    We promise to send you only interesting foodie things (yum). <br><br>

                    Sincerely, <br>
                    Team Savour
                  </p>
                </div> <!-- #page-thank-you-copy -->

              </div>
            </div>
          </article>
        </div>





        <!--
           _____ _   _ ____
          | ____| \ | |  _ \
          |  _| |  \| | | | |
          | |___| |\  | |_| |
          |_____|_| \_|____/

        -->
        
        
        <?php include('inc/footer.php'); ?>

      </div> <!-- #page-wrapper-content -->
    </div> <!-- #page-wrapper -->


    
    <?php include('inc/js_home.php'); ?>
    <?php include('inc/fonts.php'); ?>

  </body>
</html>
<?php
// saving captured output to file
file_put_contents($output_file, ob_get_contents());
// end buffering and displaying page
ob_end_flush();
?>