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
  



  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//




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