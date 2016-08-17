goog.provide('savour.page.Home');
goog.require('savour.page.Default');


/**
 * The MICE constructor
 * @inheritDoc
 * @constructor
 * @extends {savour.page.Default}
 */
savour.page.Home = function(options, element) {
  savour.page.Default.call(this, options, element);
  this.options = $.extend(this.options, savour.page.Home.DEFAULT, options);


};
goog.inherits(savour.page.Home, savour.page.Default);



// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MICE
 * @const {object}
 */
savour.page.Home.DEFAULT = {

};



/**
 * @override
 * @inheritDoc
 */
savour.page.Home.prototype.init = function() {

  savour.page.Home.superClass_.init.call(this);




  $('.food-carousel').slick({
      dots: true,
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      // autoplay: true,
      // autoplaySpeed: 3000,
  });

  $('#ads-container-mobile ul').slick({
      dots: true,
      infinite: false,
      speed: 500,
      // fade: true,
      cssEase: 'linear',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
  });


  $('#page-home-content-banner-mobile ul').slick({
      dots: false,
      infinite: false,
      speed: 500,
      // fade: true,
      cssEase: 'linear',
      arrows: true,

      autoplay: true,
      autoplaySpeed: 3000,
  });




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
savour.page.Home.prototype.update_page_layout = function() {

  savour.page.Home.superClass_.update_page_layout.call(this);


  



};


/**
 * @override
 * @inheritDoc
 */
savour.page.Home.prototype.scroll_to_target = function(str_param, str_param_2, str_param_3) {
  savour.page.Home.superClass_.scroll_to_target.call(this, str_param);

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
savour.page.Home.prototype.on_scroll_to_no_target = function(){

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


goog.exportSymbol('savour.page.Home', savour.page.Home);