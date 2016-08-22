<!--
   _____ ___ _____ _     _____
  |_   _|_ _|_   _| |   | ____|
    | |  | |  | | | |   |  _|
    | |  | |  | | | |___| |___
    |_| |___| |_| |_____|_____|

-->

<article id="page-search-title-section">
  <div class="container">
    <div class="row">
      <div class="col-md-9">

        <div id="page-search-title">
          <?php 
            $search_term = "oysters and chocolate cake";
            if (isset($_GET["s"])) {
              $search_term = $_GET["s"];
            }

            $search_term_next_line = strlen($search_term) > 12;
            

          ?>
          <br>

          <h1>Search results for <?php if($search_term_next_line){ echo '<br>'; } ?>“<?php echo $search_term; ?>”</h1>

          
        </div>
        <div id="page-search-filter-contianer">
          <p>Filter by:</p>
          <a href="javascript:void(0)" class="selected">relevance</a>
          <a href="javascript:void(0)">latest</a>
        </div>

               

      </div>
      <div class="col-md-3">
        <div id="page-search-ad-container-container" class="hidden-sm hidden-xs">
          <div id="page-search-ad-container">

            <div id="page-search-ad-01">
              <div class="manic-image-container has-full-width">
                <img src="" data-image-desktop="images_cms/search/search-ad-1.png">
              </div>
            </div>
            <div id="page-search-ad-02">
              <div class="manic-image-container has-full-width">
                <img src="" data-image-desktop="images_cms/search/search-ad-2.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="page-search-title-hr visible-sm visible-xs">
</article>

<!--
    ____ ___  _   _ _____ _____ _   _ _____
   / ___/ _ \| \ | |_   _| ____| \ | |_   _|
  | |  | | | |  \| | | | |  _| |  \| | | |
  | |__| |_| | |\  | | | | |___| |\  | | |
   \____\___/|_| \_| |_| |_____|_| \_| |_|

-->

<article id="page-search-content-section">
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-tablet-landscape-md-12 col-sm-12 col-xs-12">

        <div id="page-search-content">

          <div class="row">
            <div class="col-md-12 col-sm-6 col-xs-12">

              <div class="search-item people-version">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-6">

                    <a href="javascript:void(0)"  class="search-item-image">
                      <div class="manic-image-container">
                        <img src="" 
                          data-image-mobile="images_cms/search/search-content-1.jpg"
                          data-image-desktop="images_cms/search/search-content-1.jpg">
                      </div>
                    </a>

                  </div>
                  <div class="col-md-8 col-sm-6 col-xs-6">
                    <div class="search-item-text-container">
                      <div class="search-item-text">

                        <div class="search-item-title">
                          <h3>People</h3>

                          <div class="row">
                            <div class="col-md-9">
                              <h4><a href="javascript:void(0)">Leon's Fine Poultry and Oysters</a></h4>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-9"></div>
                            <div class="col-md-3">
                              <div class="date-container">
                                <p>11:14am, 17 Aug 2016</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="search-item-copy hidden-sm hidden-xs">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-12 col-sm-6 col-xs-12">
                
              <div class="search-item food-version">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-6">

                    <a href="javascript:void(0)"  class="search-item-image">
                      <div class="manic-image-container">
                        <img src="" 
                          data-image-mobile="images_cms/search/search-content-2.jpg"
                          data-image-desktop="images_cms/search/search-content-2.jpg">
                      </div>
                    </a>

                  </div>
                  <div class="col-md-8 col-sm-6 col-xs-6">
                    <div class="search-item-text-container">
                      <div class="search-item-text">

                        <div class="search-item-title">
                          <h3>Food</h3>

                          <div class="row">
                            <div class="col-md-9">
                              <h4><a href="javascript:void(0)">We've Got a Fever and the Only Prescription is More Chocolate Cake</a></h4>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-9"></div>
                            <div class="col-md-3">
                              <div class="date-container">
                                <p>9:37am, 17 Aug 2016</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="search-item-copy hidden-sm hidden-xs">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-12 col-sm-6 col-xs-12">

              <div class="search-item travel-version">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-6">

                    <a href="javascript:void(0)"  class="search-item-image">
                      <div class="manic-image-container">
                        <img src="" 
                          data-image-mobile="images_cms/search/search-content-3.jpg"
                          data-image-desktop="images_cms/search/search-content-3.jpg">
                      </div>
                    </a>

                  </div>
                  <div class="col-md-8 col-sm-6 col-xs-6">
                    <div class="search-item-text-container">
                      <div class="search-item-text">

                        <div class="search-item-title">
                          <h3>Travel</h3>

                          <div class="row">
                            <div class="col-md-9">
                              <h4><a href="javascript:void(0)">Oysters, Sand Dunes & Lime Pie: A Road Trip Through the Florida...</a></h4>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-9"></div>
                            <div class="col-md-3">
                              <div class="date-container">
                                <p>2:14pm, 11 Aug 2016</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="search-item-copy hidden-sm hidden-xs">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-md-12 col-sm-6 col-xs-12">

              <div class="search-item events-version">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-6">

                    <a href="javascript:void(0)"  class="search-item-image">
                      <div class="manic-image-container">
                        <img src="" 
                          data-image-mobile="images_cms/search/search-content-4.jpg"
                          data-image-desktop="images_cms/search/search-content-4.jpg">
                      </div>
                    </a>

                  </div>
                  <div class="col-md-8 col-sm-6 col-xs-6">
                    <div class="search-item-text-container">
                      <div class="search-item-text">

                        <div class="search-item-title">
                          <h3>Events</h3>

                          <div class="row">
                            <div class="col-md-9">
                              <h4><a href="javascript:void(0)">Leon's Fine Poultry and Oysters</a></h4>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-9"></div>
                            <div class="col-md-3">
                              <div class="date-container">
                                <p>11:14am, 17 Jul 2016</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="search-item-copy hidden-sm hidden-xs">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-md-12 col-sm-6 col-xs-12">

              <div class="search-item food-version">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-6">

                    <a href="javascript:void(0)"  class="search-item-image">
                      <div class="manic-image-container">
                        <img src="" 
                          data-image-mobile="images_cms/search/search-content-5.jpg"
                          data-image-desktop="images_cms/search/search-content-5.jpg">
                      </div>
                    </a>

                  </div>
                  <div class="col-md-8 col-sm-6 col-xs-6">
                    <div class="search-item-text-container">
                      <div class="search-item-text">

                        <div class="search-item-title">
                          <h3>Food</h3>

                          <div class="row">
                            <div class="col-md-9">
                              <h4><a href="javascript:void(0)">We've Got a Fever and the Only Prescription is More Chocolate Cake</a></h4>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-9"></div>
                            <div class="col-md-3">
                              <div class="date-container">
                                <p>9:37am, 17 Aug 2016</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="search-item-copy hidden-sm hidden-xs">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-md-12 col-sm-6 col-xs-12">

              <div class="search-item people-version">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-6">

                    <a href="javascript:void(0)"  class="search-item-image">
                      <div class="manic-image-container">
                        <img src="" 
                          data-image-mobile="images_cms/search/search-content-6.jpg"
                          data-image-desktop="images_cms/search/search-content-6.jpg">
                      </div>
                    </a>

                  </div>
                  <div class="col-md-8 col-sm-6 col-xs-6">
                    <div class="search-item-text-container">
                      <div class="search-item-text">

                        <div class="search-item-title">
                          <h3>People</h3>

                          <div class="row">
                            <div class="col-md-9">
                              <h4><a href="javascript:void(0)">Leon's Fine Poultry and Oysters</a></h4>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-9"></div>
                            <div class="col-md-3">
                              <div class="date-container">
                                <p>11:14am, 17 Aug 2016</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="search-item-copy hidden-sm hidden-xs">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
            </div>
          </div>

              


              


              


              


              


              


          



        </div> <!-- #page-search-content -->

      </div>
    </div>


    <div class="row">
      <div class="col-md-9 col-tablet-landscape-md-12 col-sm-12 col-xs-12">

        <div id="page-pagination" class="hidden-sm hidden-xs">
          <p>Page</p>
          <!-- <a href="javascript:void(0)" class="prev-btn"></a> -->
          <ul>
            <li class="selected"><a href="javascript:void(0)">1</a></li>
            <li><a href="javascript:void(0)">2</a></li>
            <li><a href="javascript:void(0)">3</a></li>
            <li>…</li>
            <li><a href="javascript:void(0)">9</a></li>
          </ul>
          <a href="javascript:void(0)" class="next-btn"></a>

        </div> <!-- page-pagination -->

        <div class="large-button-cta-container visible-sm visible-xs">
          <a href="javascript:void(0)" class="large-button-cta">load more results</a>
        </div>
        
      </div>
    </div>

  </div>
</article>