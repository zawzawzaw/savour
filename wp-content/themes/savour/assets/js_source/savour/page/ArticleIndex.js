// notes from audrey
// will have an auto load more, as you scroll down the pages
// can swipe the content banner (in the middle of the page)
// when you click on the title, it goes to an article
// title = a tag, on hover changes to 'yellow' depending on the type of the article
// 






goog.provide('savour.page.ArticleIndex');
goog.require('savour.page.Default');


/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {savour.page.Default}
 */
savour.page.ArticleIndex = function(options, element) {
  savour.page.Default.call(this, options, element);
  this.options = $.extend(this.options, savour.page.ArticleIndex.DEFAULT, options);

  this.is_loading = false;

  this.scroll_position = 0;

  // this.max_scroll_padding = 10;
  this.max_scroll_padding = 30;
  this.max_scroll = 100;

  this.page_number = 0;


  this.article_thumbnail_container = $('#page-article-index-related-article-thumbnail-container');

  this.next_thumbnail_url = this.article_thumbnail_container.attr('data-url');

  if (goog.isDefAndNotNull(this.next_thumbnail_url) == false) {
    console.log('ERROR: savour.page.ArticleIndex: Missing attr data-url');
  }

};
goog.inherits(savour.page.ArticleIndex, savour.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
savour.page.ArticleIndex.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
savour.page.ArticleIndex.prototype.init = function() {

  savour.page.ArticleIndex.superClass_.init.call(this);



  

  // create large carousel


  /*
  $('#page-article-index-large-carousel-item-container').slick({
    'speed': 350,
    'dots': false,
    'arrows': false,
    'infinite': false,
    'slidesToShow': 3,
    'slidesToScroll': 1
    //'pauseOnHover': false,
    //'autoplay': true,
    //'autoplaySpeed': 4000 * 2
  });


  $('#page-article-index-large-carousel-item-container').on('beforeChange', function(event,slick, currentSlide, nextSlide){
    console.log('nextSlide: ' + nextSlide);

    $('#page-article-index-large-carousel-item-container .page-article-index-large-carousel-item').removeClass('transparent-version');

    var previous_slide = $('#page-article-index-large-carousel-item-container .page-article-index-large-carousel-item[data-slick-index="' + (nextSlide) + '"]').addClass('transparent-version');
    var next_slide = $('#page-article-index-large-carousel-item-container .page-article-index-large-carousel-item[data-slick-index="' + (nextSlide + 2) + '"]').addClass('transparent-version');

    
  }.bind(this));
  */




  // create auto load on scroll
  

  this.create_slick();
  this.create_auto_scroll();



  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//


savour.page.ArticleIndex.prototype.create_slick = function(){
  // create banner
  
  $('#page-article-index-banner-image-item-container').slick({
    'speed': 350,
    'dots': true,
    'arrows': false,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': false,
    'fade': true,
    'autoplay': true,
    'autoplaySpeed': 3000
  });


  // create mobile banner
  
  $('#page-article-index-banner-image-item-mobile-container').slick({
    'speed': 350,
    'dots': true,
    'arrows': false,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': false,
    'fade': false,
    'autoplay': true,
    'autoplaySpeed': 3000
  });

  // create carousel
    
  
  $('#page-article-index-carousel-item-container').slick({
    'speed': 350,
    'dots': false,
    'arrows': true,
    'infinite': false,
    'slidesToShow': 4,
    'slidesToScroll': 1
    //'pauseOnHover': false,
    //'autoplay': true,
    //'autoplaySpeed': 4000
  });


  $('#page-article-index-ad-item-mobile-container').slick({
    'speed': 350,
    'dots': true,
    'arrows': false,
    'infinite': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'pauseOnHover': false,
    'autoplay': true,
    'autoplaySpeed': 4000
  });


};


savour.page.ArticleIndex.prototype.create_auto_scroll = function(){

  /*
  var loading_div_str = [
    '<div class="page-article-index-loading-container">',
      '<p>loading</p>',
    '</div>'
  ].join('');


  // http://jscroll.com/
  // https://github.com/pklauzinski/jscroll

  // $('#page-article-index-related-article-thumbnail-container').jscroll({
  $('#page-article-index-related-article-thumbnail-container').jscroll({
    'debug': true,

    'nextSelector': 'a.page-article-index-related-article-next-link:last-child',
    // 'loadingHtml': '<small>Loading...</small>'
    'loadingHtml': loading_div_str,
    'padding': -200,
    // 'contentSelector': '#page-article-index-related-article-thumbnail-container'
  });
  */
 

 this.window.scroll(this.on_article_index_window_scroll.bind(this));
  

};


/**
 * @param  {object} event
 */
savour.page.ArticleIndex.prototype.on_article_index_window_scroll = function(event){
  this.scroll_position = this.window.scrollTop();

  // console.log('this.scroll_position: ' + this.scroll_position);
  // console.log('this.max_scroll: ' + this.max_scroll);

  if(this.scroll_position >= (this.max_scroll - this.max_scroll_padding)) {
    this.load_next_page();
  }
  
  
};


/**
 * @override
 * @inheritDoc
 */
savour.page.ArticleIndex.prototype.on_window_resize = function(event) {
  savour.page.ArticleIndex.superClass_.on_window_resize.call(this, event);

  this.max_scroll = $(document).height() - $(window).height();

}


savour.page.ArticleIndex.prototype.load_next_page = function(){
  
  if(this.is_loading == false) {
    this.is_loading = true;

    this.page_number++;

    console.log('load_next_page');

    $.ajax({
      type: 'GET',
      data: {page:this.page_number},
      url: this.next_thumbnail_url,
      complete: this.load_next_page_complete.bind(this)
    });
    


  }
};




savour.page.ArticleIndex.prototype.load_next_page_complete = function(event) {


  // simulated delay
  // setTimeout(function(){

    this.article_thumbnail_container.append(event.responseText);

    // create .manic-image-container again
    this.create_image_container();              // from manic.page.Page

    this.on_window_resize(null);

    this.is_loading = false;
    
  // }.bind(this), 2000);

};




//    __  __  ___  ____ ___ _     _____
//   |  \/  |/ _ \| __ )_ _| |   | ____|
//   | |\/| | | | |  _ \| || |   |  _|
//   | |  | | |_| | |_) | || |___| |___
//   |_|  |_|\___/|____/___|_____|_____|
//



//     _____     _______ ____  ____  ___ ____  _____
//    / _ \ \   / / ____|  _ \|  _ \|_ _|  _ \| ____|
//   | | | \ \ / /|  _| | |_) | |_) || || | | |  _|
//   | |_| |\ V / | |___|  _ <|  _ < | || |_| | |___
//    \___/  \_/  |_____|_| \_\_| \_\___|____/|_____|
//




/**
 * @override
 * @inheritDoc
 */
savour.page.ArticleIndex.prototype.update_page_layout = function() {

  savour.page.ArticleIndex.superClass_.update_page_layout.call(this);


  



};


/**
 * @override
 * @inheritDoc
 */
savour.page.ArticleIndex.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  savour.page.ArticleIndex.superClass_.scroll_to_target.call(this, str_param);

  /*
  // Mice venue landing - on hash change
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){

    // console.log('str_param: ' + str_param);
    if (str_param == "indoor-venue") {
      this.mice_landing_mobile_indoor_open();

    } else if (str_param == "outdoor-venue") {
      this.mice_landing_mobile_outdoor_open();

    } else if (str_param == "ballrooms-venue") {
      this.mice_landing_mobile_ballrooms_open();
    }

  }
  */

};
/**
 * @override
 * @inheritDoc
 */
savour.page.ArticleIndex.prototype.on_scroll_to_no_target = function(){

  // Mice venue landing
  /*
  if(manic.IS_MOBILE == true && this.is_mice_venue_landing == true){
    // console.log('go home!!');
    this.mice_landing_mobile_both_close();
  }
  */

};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//



//    _   _ _____ ___ _
//   | | | |_   _|_ _| |
//   | | | | | |  | || |
//   | |_| | | |  | || |___
//    \___/  |_| |___|_____|
//


goog.exportSymbol('savour.page.ArticleIndex', savour.page.ArticleIndex);