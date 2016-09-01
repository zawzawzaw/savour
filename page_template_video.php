<div id="page-template-short-form-container">
  <div class="container">
    <div class="row">



      <div class="col-md-12 col-sm-12 col-xs-12">

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

            <?php if($banner_version == 'youtube'): ?>

              <article id="page-template-banner-section">

                <div id="page-template-banner-image-full-width-container" class="youtube-video-version">
                  <div id="page-template-banner-image" class="youtube-video-version">
                    <!-- AUTOPLAY VERSION
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/d40VYULwXgM?autoplay=1&wmode=opaque&enablejsapi=1&showinfo=0&loop=1&playlist=d40VYULwXgM" frameborder="0" allowfullscreen></iframe> 
                    -->
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/d40VYULwXgM?wmode=opaque&enablejsapi=1&showinfo=0" frameborder="0" allowfullscreen></iframe>
                  </div>
                </div>


                <div class="row">
                  <div class="col-md-10">

                    <div id="page-template-banner-copy">
                      <p>Savour Singapore's 2012 TV commercial featuring two chefs, an expert sommelier and barista!</p>
                    </div>

                  </div>
                </div>
              </article>

            <?php else: ?>


              <!-- default version -->
              <article id="page-template-banner-section">

                <div id="page-template-banner-image-full-width-container">

                  <div id="page-template-banner-image" class="embed-video-version">
                    <div class="manic-video-container" data-video="images_cms/template_video/sample_video.mp4" data-scale-mode="show_all">
                      <video class="video-js vjs-default-skin" preload="auto" data-setup='{"controls": false}'>
                        <source src=""  type='video/mp4' />
                      </video>

                    </div>
                    <div class="play-btn"></div>
                  </div>

                </div> <!-- #page-template-banner-image-full-width-container -->



                <div class="row">
                  <div class="col-md-10">
                    <div id="page-template-banner-copy">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>

              </article>


            <?php endif; ?>



                
          

          <!--
             _____ ___   ___ _____ _____ ____    ___ _   _ _____ ___
            |  ___/ _ \ / _ \_   _| ____|  _ \  |_ _| \ | |  ___/ _ \
            | |_ | | | | | | || | |  _| | |_) |  | ||  \| | |_ | | | |
            |  _|| |_| | |_| || | | |___|  _ <   | || |\  |  _|| |_| |
            |_|   \___/ \___/ |_| |_____|_| \_\ |___|_| \_|_|   \___/

          -->

          <article id="page-template-footer-info-section" class="hidden-sm hidden-xs">

            <div class="row">
              <div class="col-md-8">

                <div id="page-template-featured-in-container" class="food-version">

                  <div class="circle-container">
                    <span></span><span></span><span></span><span></span>
                  </div>

                  <i>As featured in</i>
                  <a href="javascript:void(0)">SAVOUR GOURMET 2016</a>
                </div>

              </div>
              <div class="col-md-4">

                <div id="page-template-social-button-container" class="horizontal-version hidden-sm hidden-xs">
                  <ul>
                    <li><a href="javascript:void(0)" class="fa fa-facebook"></a></li>
                    <li><a href="javascript:void(0)" class="fa fa-twitter"></a></li>
                    <li><a href="javascript:void(0)" class="fa fa-pinterest"></a></li>
                    <li><a href="javascript:void(0)" class="fa fa-envelope"></a></li>
                  </ul>
                </div>

              </div>
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
              <a href="javascript:void(0)">Chef</a>
              <a href="javascript:void(0)">Alvinleung</a>
              <a href="javascript:void(0)">Michelin</a>
              <a href="javascript:void(0)">Canada</a>
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



          <!--
             ____  _____ _        _  _____ _____ ____
            |  _ \| ____| |      / \|_   _| ____|  _ \
            | |_) |  _| | |     / _ \ | | |  _| | | | |
            |  _ <| |___| |___ / ___ \| | | |___| |_| |
            |_| \_\_____|_____/_/   \_\_| |_____|____/

          -->

          <article id="page-template-related-articles-section" class="hidden-sm hidden-xs">

            <div id="page-template-related-articles-title">
              <h2>What to read next</h2>
            </div>
            

            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-12">

                <a href="javascript:void(0)" class="related-article-item travel-version">
                  <div class="row">
                    <div class="col-xs-6 col-sm-12 col-md-12">
                      <div class="related-article-item-image">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-mobile="images_cms/template_short_form/article-related-01.png"
                            data-image-desktop="images_cms/template_short_form/article-related-01.png">
                        </div>
                        <span class="tag">Travel</span>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-12 col-md-12">
                      <div class="related-article-item-text">
                        <p>Hong Kong: How The Best Char Siew Buns Are Made</p>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">

                <a href="javascript:void(0)" class="related-article-item food-version">
                  <div class="row">
                    <div class="col-xs-6 col-sm-12 col-md-12">
                      <div class="related-article-item-image">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-mobile="images_cms/template_short_form/article-related-02.png"
                            data-image-desktop="images_cms/template_short_form/article-related-02.png">
                        </div>
                        <div class="play-icon"></div>
                        <span class="tag">Food</span>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-12 col-md-12">
                      <div class="related-article-item-text">
                        <p>Fruit Sorbet Recipe: Practice What You Peach</p>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">

                <a href="javascript:void(0)" class="related-article-item people-version">
                  <div class="row">
                    <div class="col-xs-6 col-sm-12 col-md-12">
                      <div class="related-article-item-image">
                        <div class="manic-image-container">
                          <img src="" 
                            data-image-mobile="images_cms/template_short_form/article-related-03.png"
                            data-image-desktop="images_cms/template_short_form/article-related-03.png">
                        </div>
                        <span class="tag">People</span>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-12 col-md-12">
                      <div class="related-article-item-text">
                        <p>60 Seconds with: Chris Naylor</p>
                      </div>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </article> <!-- page-template-related-articles-section -->

          
          <!--
             ____  _____ _        _  _____ _____ ____    __  __  ___  ____ ___ _     _____
            |  _ \| ____| |      / \|_   _| ____|  _ \  |  \/  |/ _ \| __ )_ _| |   | ____|
            | |_) |  _| | |     / _ \ | | |  _| | | | | | |\/| | | | |  _ \| || |   |  _|
            |  _ <| |___| |___ / ___ \| | | |___| |_| | | |  | | |_| | |_) | || |___| |___
            |_| \_\_____|_____/_/   \_\_| |_____|____/  |_|  |_|\___/|____/___|_____|_____|

          -->

          <article id="page-template-related-articles-section-mobile" class="visible-sm visible-xs">
            <div class="manic-expand-container last-version">
              <div class="scroll-target" data-value="mobile-related-articles"></div>
              <div class="manic-expand-container-title">
                <p>What to read next</p>
                <span class="manic-expand-container-btn"></span>
              </div>
              <div class="manic-expand-container-content">
                

                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <a href="javascript:void(0)" class="mobile-article travel-version">
                      <div class="row">
                        <div class="col-xs-6">
                          <div class="manic-image-container">
                            <img src="" data-image-mobile="images_cms/template_short_form/article-related-01.png">
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="mobile-article-text">
                            <h3>Travel</h3>
                            <p>Hong Kong: How The Best Char Siew Buns Are Made</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="col-xs-12 col-sm-6">
                    <a href="javascript:void(0)" class="mobile-article food-version">
                      <div class="row">
                        <div class="col-xs-6">
                          <div class="manic-image-container">
                            <img src="" data-image-mobile="images_cms/template_short_form/article-related-02.png">
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="mobile-article-text">
                            <h3>Food</h3>
                            <p>Fruit Sorbet Recipe: Practice What You Peach</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div class="col-xs-12 col-sm-6">
                    <a href="javascript:void(0)" class="mobile-article food-version">
                      <div class="row">
                        <div class="col-xs-6">
                          <div class="manic-image-container">
                            <img src="" data-image-mobile="images_cms/template_short_form/article-related-03.png">
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="mobile-article-text">
                            <h3>People</h3>
                            <p>60 Seconds with: Chris Naylor</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                </div> <!-- row -->  



              </div>
            </div>
          </article> <!-- page-template-related-articles-section-mobile -->




        </div> <!-- #page-template-content -->
      </div>

      










    </div> <!-- row -->
  </div> <!-- container -->
</div> <!-- #page-template-short-form-container -->



