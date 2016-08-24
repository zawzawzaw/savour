goog.provide('savour.page.Article');
goog.require('savour.page.Default');

goog.require('savour.component.InstagramSection');

goog.require('manic.ui.VideoContainer');


/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {savour.page.Default}
 */
savour.page.Article = function(options, element) {
  savour.page.Default.call(this, options, element);
  this.options = $.extend(this.options, savour.page.Article.DEFAULT, options);


  this.has_banner_image_iframe = false;
  this.banner_image = null;
  this.banner_image_iframe = null;
  this.banner_image_iframe_aspect_ratio = null;




  this.has_banner_image_embed_video = false;
  /**
   * @type {manic.ui.VideoContainer}
   */
  this.banner_image_video_container = null;
  
};
goog.inherits(savour.page.Article, savour.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
savour.page.Article.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
savour.page.Article.prototype.init = function() {

  savour.page.Article.superClass_.init.call(this);

  // create instagram section
  if ($('#page-template-instagram-section').length != 0) {
    this.create_instagram_section();
  }

  // create youtube banner
  if ($('#page-template-banner-image.youtube-video-version').length != 0) {

    this.has_banner_image_iframe = true;

    // create youtube
    this.banner_image = $('#page-template-banner-image.youtube-video-version');
    this.banner_image_iframe = $('#page-template-banner-image.youtube-video-version iframe');

    var w = parseInt(this.banner_image_iframe.attr('width'));
    var h = parseInt(this.banner_image_iframe.attr('height'));
    
    this.banner_image_iframe_aspect_ratio = w/h;
  }


  // create embedded video banner
  if ($('#page-template-banner-image.embed-video-version').length != 0) {

    this.has_banner_image_embed_video = true;
    this.banner_image_video_container = $('#page-template-banner-image.embed-video-version .manic-video-container').data('manic.ui.VideoContainer');

    // console.log('this.banner_image_video_container')
    // console.log(this.banner_image_video_container);

    goog.events.listen(this.banner_image_video_container, manic.ui.VideoContainer.ON_VIDEO_PLAY, function(event){

      console.log('video play..');
      $('#page-template-banner-image.embed-video-version').addClass('video-play-version');
      TweenMax.to($('#page-template-banner-image.embed-video-version .play-btn'), 0.5, {autoAlpha:0});

    }.bind(this));
    
    
    
  }




  this.update_page_layout();    // this is called after the initial create to update the layout

};






//     ____ ____  _____    _  _____ _____
//    / ___|  _ \| ____|  / \|_   _| ____|
//   | |   | |_) |  _|   / _ \ | | |  _|
//   | |___|  _ <| |___ / ___ \| | | |___
//    \____|_| \_\_____/_/   \_\_| |_____|
//


savour.page.Article.prototype.create_instagram_section = function(){

  var arr = $('#page-template-instagram-section');
  var item = null;

  var instagram_section = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

    instagram_section = new savour.component.InstagramSection({},item);
    
  }
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
savour.page.Article.prototype.update_page_layout = function() {

  savour.page.Article.superClass_.update_page_layout.call(this);


  if(this.has_banner_image_iframe == true){

    var target_width = this.banner_image.width();
    var target_height = target_width / this.banner_image_iframe_aspect_ratio;

    this.banner_image_iframe.css({
      'width': target_width + 'px',
      'height': target_height + 'px'
    });
  }



};


/**
 * @override
 * @inheritDoc
 */
savour.page.Article.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  savour.page.Article.superClass_.scroll_to_target.call(this, str_param);

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
savour.page.Article.prototype.on_scroll_to_no_target = function(){

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


goog.exportSymbol('savour.page.Article', savour.page.Article);