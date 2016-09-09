<div id="page-template-short-form-container">
  <div class="container">
    <div class="row">



      <div class="col-md-9 col-sm-12 col-xs-12">

        <div id="page-template-content">
          <article id="page-template-title-section">
            <h3>Food</h3>
            <h1>All You Need To Know About Hosting An English Afternoon Tea</h1>
          </article>


          <?php 
            $banner_version = 'regular';
            if (isset($_GET["version"])) {
              $banner_version = $_GET["version"];
            }
          ?>

          <?php if($banner_version == 'video'): ?>

            <article id="page-template-banner-section">
              <div id="page-template-banner-image" class="embed-video-version short-form-version">

                <div class="manic-video-container" data-video="images_cms/template_video/sample_video.mp4">
                  <video class="video-js vjs-default-skin" preload="auto" data-setup='{"controls": false}'>
                    <source src=""  type='video/mp4' />
                  </video>
                </div>

                <div class="play-btn"></div>
              </div>

              <div class="row">
                <div class="col-md-10">

                  <div id="page-template-banner-copy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>

                </div>
              </div>

              <div id="page-template-social-button-container" class="hidden-sm hidden-xs">
                <ul>
                  <li><a href="javascript:void(0)" class="fa fa-facebook"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-twitter"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-pinterest"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-envelope"></a></li>
                </ul>
              </div>
            </article>



          <?php elseif($banner_version == 'youtube'): ?>

            <article id="page-template-banner-section">
              <div id="page-template-banner-image" class="youtube-video-version short-form-version">
                <!-- AUTOPLAY VERSION
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/d40VYULwXgM?autoplay=1&wmode=opaque&enablejsapi=1&showinfo=0&loop=1&playlist=d40VYULwXgM" frameborder="0" allowfullscreen></iframe> 
                -->
                <iframe width="560" height="315" src="https://www.youtube.com/embed/d40VYULwXgM?wmode=opaque&enablejsapi=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
              </div>

              <div class="row">
                <div class="col-md-10">

                  <div id="page-template-banner-copy">
                    <p>Savour Singapore's 2012 TV commercial featuring two chefs, an expert sommelier and barista!</p>
                  </div>

                </div>
              </div>

              <div id="page-template-social-button-container" class="hidden-sm hidden-xs">
                <ul>
                  <li><a href="javascript:void(0)" class="fa fa-facebook"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-twitter"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-pinterest"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-envelope"></a></li>
                </ul>
              </div>

            </article>

          <?php else: ?>
            <!-- regular version -->
            <article id="page-template-banner-section">
              <div id="page-template-banner-image">
                <div class="manic-image-container">
                  <img src="" 
                    data-image-mobile="images_cms/template_short_form/banner.jpg"
                    data-image-desktop="images_cms/template_short_form/banner.jpg">
                </div>
              </div>

              <div class="row">
                <div class="col-md-10">

                  <div id="page-template-banner-copy">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>

                </div>
              </div>

              <div id="page-template-social-button-container" class="hidden-sm hidden-xs">
                <ul>
                  <li><a href="javascript:void(0)" class="fa fa-facebook"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-twitter"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-pinterest"></a></li>
                  <li><a href="javascript:void(0)" class="fa fa-envelope"></a></li>
                </ul>
              </div>

            </article>

          <?php endif; ?>



          <article id="page-template-introduction-section">
            <div class="row">
              <div class="col-md-10">

                <div class="default-copy food-version">
                  <p><span class="letter">T</span>he afternoon tea – a quintessential English social phenomenon that is thought to be a chichi gathering for the upper class. To the uninitiated, there is a whole science behind the delicate nature of tea making. From doilies to loose leaves, here’s all you need to know about hosting an English afternoon tea. But first, stop sticking your pinky out. </p>
                </div>

              </div>
            </div>
          </article>

          <!--
              ____ ___  _   _ _____ _____ _   _ _____
             / ___/ _ \| \ | |_   _| ____| \ | |_   _|
            | |  | | | |  \| | | | |  _| |  \| | | |
            | |__| |_| | |\  | | | | |___| |\  | | |
             \____\___/|_| \_| |_| |_____|_| \_| |_|

          -->


          <article id="page-template-content-section">
            <div class="default-copy food-version">



              <!-- wordpress input start -->

              <section>
                <div class="row">
                  <div class="col-md-7">

                    <h2>History</h2>
                    <p>Story goes that Anna Russell, the Duchess of Bedford and lifelong friend of Queen Victoria, was the creator of the English “Afternoon Tea”. She wanted a light meal to curb her hunger between lunch and dinner. Soon after, she began inviting her companions to socialise over tea and pastries. And thus, the Afternoon tea tradition caught on and stayed close to the hearts of the English people.</p>
                    <div class="space"></div>
                    <h2>High Tea, Low Tea?</h2>
                    <p>In today’s terms, high tea and afternoon tea is frequently used interchangeably. In actuality, high tea refers to a heavier meal, more specifically, dinner. Despite so, many restaurants and upscale cafes still label it as  “High Tea”. Afternoon Tea is also called “Low Tea” mostly because it takes place in sitting rooms with low tables.</p>
                    <div class="space visible-xs visible-sm"></div>

                  </div>
                  <div class="col-md-5">

                    <!-- this will be a shortcode -->
                    <div class="manic-image-container has-full-width">
                      <img src="" 
                        data-image-mobile="images_cms/template_short_form/vertical.jpg"
                        data-image-desktop="images_cms/template_short_form/vertical.jpg">
                    </div>

                  </div>
                </div>
              </section>



              <section>
                <h2>The Wares</h2>
                <p>The tea wares are the backbone to Afternoon Tea. These wares are intricately designed with some fetching upward of $50,000 to a few Mils. When planning to host an afternoon tea, it’s important to make sure that the following are in the inventory.</p>
                <div class="small-space"></div>

                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-6">

                    <ul>
                      <li>
                        Teapot, cup and saucer: <br>
                        <i>A formal tea would use matching teapots and cups while an eclectic mix for an informal tea would do just fine.</i>
                      </li>
                      <li>
                        Milk jug: <br>
                        <i>Milk before or after the pouring of tea is debatable, but entirely to one’s preference.</i>
                      </li>
                      <li>
                        Sugar bowl and tongs: <br>
                        <i>Use cubes for a more refined tea session.</i>
                      </li>
                      <li>
                        Hot water pitcher: <br>
                        <i>Used for weakening a strong brew.</i>
                      </li>
                      <li>
                        Tea strainer: <br>
                        <i>To catch loose leaves</i>
                      </li>
                    </ul>

                  </div>
                  <div class="col-md-5">

                    <ul>
                      <li>
                        Napkins: <br>
                        <i>For spills, clean ups and signalling the end of the tea session.</i>
                      </li>
                      <li>
                        SIlver Tray: <br>
                        <i>Serving tray that is reserved for the most formal afternoon tea.</i>
                      </li>
                      <li>
                        Tiered cake stand: <br>
                        <i>An essential in formal and informal tea sessions. </i>
                      </li>
                      <li>
                        Plate: <br>
                        <i>To place lemon slices or food. </i>
                      </li>
                    </ul>

                  </div>
                </div>
              </section>

              <!-- image carousel will be a shortcode -->
              <section>
                <div class="page-template-slider">
                  <div class="page-template-slider-item">
                    <div class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/template_short_form/slider-01.jpg"
                        data-image-desktop="images_cms/template_short_form/slider-01.jpg">
                    </div>
                  </div>
                  <div class="page-template-slider-item">
                    <div class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/template_short_form/slider-02.jpg"
                        data-image-desktop="images_cms/template_short_form/slider-02.jpg">
                    </div>
                  </div>
                  <div class="page-template-slider-item">
                    <div class="manic-image-container">
                      <img src=""
                        data-image-mobile="images_cms/template_short_form/slider-03.jpg"
                        data-image-desktop="images_cms/template_short_form/slider-03.jpg">
                    </div>
                  </div>
                </div>
              </section>


              <section>
                <h2>The Fares</h2>
                <p>Teas served are often less robust than the morning brews. Black tea like darjeeling and Lapsang Souchong or blends like Earl Grey. <br><br>Traditionally bite-sized nibbles on the menu consists of 3 courses: scones, savory sandwiches and sweet pastries or cakes. These snacks are served on tiered stands in this particular order: top layer for scones, middle for savory and the bottom for sweets.</p>

              </section>

              <!-- wordpress input end -->


            </div> <!-- default-copy -->

          </article> <!-- #page-template-content-section -->



          <!--
             _____ ___   ___ _____ _____ ____    ___ _   _ _____ ___
            |  ___/ _ \ / _ \_   _| ____|  _ \  |_ _| \ | |  ___/ _ \
            | |_ | | | | | | || | |  _| | |_) |  | ||  \| | |_ | | | |
            |  _|| |_| | |_| || | | |___|  _ <   | || |\  |  _|| |_| |
            |_|   \___/ \___/ |_| |_____|_| \_\ |___|_| \_|_|   \___/

          -->

          <article id="page-template-footer-info-section" class="hidden-sm hidden-xs">


            <div id="page-template-featured-in-container" class="food-version">

              <div class="circle-container">
                <span></span><span></span><span></span><span></span>
              </div>

              <i>As featured in</i>
              <a href="javascript:void(0)">SAVOUR GOURMET 2016</a>
            </div>

            <div id="page-template-tag-container" food-version>
              <p>Tags:</p>
              <a href="javascript:void(0)">Chef</a>
              <a href="javascript:void(0)">Alvinleung</a>
              <a href="javascript:void(0)">Michelin</a>
              <a href="javascript:void(0)">Canada</a>
              <a href="javascript:void(0)">Restaurant</a>
              <a href="javascript:void(0)">Food</a>
              <a href="javascript:void(0)">Alvinleung</a>
              <a href="javascript:void(0)">Michelin</a>
              <a href="javascript:void(0)">Canada</a>
              <a href="javascript:void(0)">Restaurant</a>
              <a href="javascript:void(0)">Food</a>
              <a href="javascript:void(0)">Michelin</a>
            </div>

            <hr>
          </article> <!-- page-template-footer-info-section -->



          <article id="page-template-footer-info-section-mobile" class="visible-sm visible-xs">

            <div class="circle-container">
              <span></span><span></span><span></span><span></span>
            </div>

            <div class="manic-expand-container">
              <div class="scroll-target" data-value="mobile-footer-info"></div>
              <div class="manic-expand-container-title">
                <p>As featured in</p>
                <span class="manic-expand-container-btn"></span>
              </div>
              <div class="manic-expand-container-content">
                <div class="default-copy">
                  <p>Savour Gourmet 2016 <br>Lorem Ipsum Dolor Sit Amet 2014 </p>
                </div>
              </div>
            </div>

          </article> <!-- page-template-footer-info-section-mobile -->



          <?php include('inc/related-articles.php') ?>




        </div> <!-- #page-template-content -->
      </div>

      <div class="col-md-1"></div>
      <div class="col-md-2">

        <?php include('inc/sidebar.php'); ?>
        
      </div>

    </div> <!-- row -->
  </div> <!-- container -->
</div> <!-- #page-template-short-form-container -->



