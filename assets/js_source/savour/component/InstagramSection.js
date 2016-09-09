goog.provide('savour.component.InstagramSection');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.DingMasonry');
goog.require('savour.component.InstagramDataItem');
goog.require('savour.component.InstagramDataContainer');
goog.require('savour.component.InstagramDetailPopup');



/**
 * The InstagramSection constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
savour.component.InstagramSection = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, savour.component.InstagramSection.DEFAULT, options);
  this.element = element;

  this.data_array = [];

  /**
   * @type {savour.component.InstagramDataContainer}
   */
  this.instagram_data_container = new savour.component.InstagramDataContainer({}, this.element.find('#instagram-data-item-container'));
  goog.events.listen(this.instagram_data_container, savour.component.InstagramDataContainer.ON_LOAD_COMPLETE, this.on_instagram_data_load_complete.bind(this));

  this.instagram_data_item_container = this.element.find('#instagram-data-item-container');
  this.instagram_item_container = this.element.find('#instagram-item-container');

  this.is_mobile_detail_open = false;

  this.detail_data = null;
  this.detail_index = -1;


  this.is_instagram_data_loaded = false;


  /**
   * @type {savour.component.InstagramDetailPopup}
   */
  this.detail_popup = null;

  
  



  this.page_template_content_element = $('#page-template-content');
  this.instagram_detail_element = $('#page-template-instagram-detail');


  this.instagram_detail_image = $('#page-template-instagram-detail-image .manic-image-container').data('manic.ui.ImageContainer');



  this.hammertime = new Hammer($('#page-template-instagram-detail-image .manic-image-container')[0]);
  this.hammertime.on('swipeleft', function(event) {
    console.log('next');

    var target_index = this.detail_index + 1;
    target_index = target_index > this.data_array.length - 1 ? 0 : target_index;
    this.set_detail_index(target_index);

  }.bind(this));
  this.hammertime.on('swiperight', function(event) {
    console.log('prev');

    var target_index = this.detail_index - 1;
    target_index = target_index < 0 ? this.data_array.length - 1 : target_index;
    this.set_detail_index(target_index);

  }.bind(this));


  this.detail_close_btn = this.instagram_detail_element.find('#page-template-instagram-detail-close-btn');
  this.detail_close_btn.click(function(event){
    this.close_mobile_detail();
  }.bind(this))
  this.detail_next_btn = this.instagram_detail_element.find('#page-template-instagram-detail-next-btn');
  this.detail_next_btn.click(function(event){

    var target_index = this.detail_index + 1;
    target_index = target_index > this.data_array.length - 1 ? 0 : target_index;
    this.set_detail_index(target_index);

  }.bind(this))

  this.detail_prev_btn = this.instagram_detail_element.find('#page-template-instagram-detail-prev-btn');
  this.detail_prev_btn.click(function(event){

    var target_index = this.detail_index - 1;
    target_index = target_index < 0 ? this.data_array.length - 1 : target_index;
    this.set_detail_index(target_index);

  }.bind(this))
  
  
  
  
  
  



  console.log('savour.component.InstagramSection: init');
};
goog.inherits(savour.component.InstagramSection, goog.events.EventTarget);


/**
 * like jQuery options
 * @const {object}
 */
savour.component.InstagramSection.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * InstagramSection Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramSection.ON_CREATE_COMPLETE = 'on_create_complete';

/**
 * InstagramSection Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramSection.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


savour.component.InstagramSection.prototype.create_masonry = function() {

  // create the html first
  
  /**
   * @type {savour.component.InstagramDataItem}
   */
  var data_item = null;

  var data_item_desktop_element = null;

  var fragment = $(document.createDocumentFragment());

  for (var i = 0, l=this.data_array.length; i < l; i++) {
    data_item = this.data_array[i];

    data_item_desktop_element = $(data_item.instagram_desktop_item_str);

    data_item_desktop_element.data('url', data_item.data_url);
    data_item_desktop_element.data('index', i);
    

    data_item_desktop_element.click(function(event){

      var target = $(event.currentTarget);
      var index = target.data('index');

      this.detail_popup.open_overlay();
      this.detail_popup.display_overlay_index(index);

    }.bind(this));
      
    

    
    data_item_desktop_element.click(function(event){

      if (manic.IS_MOBILE == true) {
        event.preventDefault();

        var target = $(event.currentTarget);
        var target_url = target.data('url');
        

        this.open_mobile_detail();
        this.set_detail_url(target_url);

        // launch a second state
        

      }

      
    }.bind(this));
    

    fragment.append(data_item_desktop_element);
  }


  this.instagram_item_container.append(fragment);

  // var column_divider_value = 350;
  var column_divider_value = 400;
  
  if (manic.IS_MOBILE == true) {
    column_divider_value = 150;
  }
  


  /**
   * @type {manic.ui.DingMasonry}
   */
  
  
  this.ding_masonry = new manic.ui.DingMasonry({
    'selector': '.instagram-item',
    'column_divider': column_divider_value,
  }, this.instagram_item_container);
  



  // create image container
  
  /**
   * @type {manic.ui.ImageContainer}
   */
  var image_container = null;
  var arr = this.instagram_item_container.find('.manic-image-container');
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    image_container = new manic.ui.ImageContainer({}, item);
  }


  



};


savour.component.InstagramSection.prototype.create_desktop_popup = function(){

  if ($('#instagram-overlay').length != 0) {
    this.detail_popup = new savour.component.InstagramDetailPopup({}, $('#instagram-overlay'));

    this.detail_popup.set_data_array(this.data_array);

  } else {
    console.log('savour.component.InstagramSection: Missing #instagram-overlay');
  }

};


/**
 * @param {String} url_param
 */
savour.component.InstagramSection.prototype.set_detail_url = function(url_param) {


  var target_index = this.get_detail_url_index(url_param);
  if(target_index != -1){
    this.set_detail_index(target_index);
  }
  
};

/**
 * @param {Number} number_param
 */
savour.component.InstagramSection.prototype.set_detail_index = function(number_param){


  if(goog.isDefAndNotNull(this.data_array[number_param]) == true && this.is_instagram_data_loaded == true) {
    this.detail_index = number_param
    this.detail_data = this.data_array[this.detail_index];

    


    this.instagram_detail_element.find('#page-template-instagram-detail-text .instagram-detail-location h4').html(this.detail_data.data_object['location']);
    this.instagram_detail_element.find('#page-template-instagram-detail-text h3').html(this.detail_data.data_object['author_name']);
    this.instagram_detail_element.find('#page-template-instagram-detail-text p').html(this.detail_data.data_object['short_title']);
    
    // this.instagram_detail_element.find('#page-template-instagram-detail-image-link').attr('href', this.detail_data.data_object['link_url']);
    this.instagram_detail_element.find('#page-template-instagram-detail-text .cta-container a').attr('href', this.detail_data.data_object['link_url']);

    this.instagram_detail_image.set_image_src(this.detail_data.data_object['thumbnail_url']);
    this.instagram_detail_image.update_layout();


    

  }
  
  
};


/**
 * @param  {String} str_param
 * @return {Number}
 */
savour.component.InstagramSection.prototype.get_detail_url_index = function(str_param) {

  /**
   * @type {savour.component.InstagramDataItem}
   */
  var data_item = null;

  if (this.is_instagram_data_loaded == true) {
    for (var i = 0, l=this.data_array.length; i < l; i++) {

      data_item = this.data_array[i];
      if (str_param == data_item.data_url) {
        return i;
      }
    }
  }

  return -1;
};
savour.component.InstagramSection.prototype.private_method_05 = function() {};
savour.component.InstagramSection.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.component.InstagramSection.prototype.open_mobile_detail = function() {
  if (this.is_mobile_detail_open == false && this.is_instagram_data_loaded == true) {

    this.is_mobile_detail_open = true;


    this.page_template_content_element.hide(0);
    this.instagram_detail_element.show(0);

    //this.instagram_detail_image.update_layout();
  }
};

savour.component.InstagramSection.prototype.close_mobile_detail = function() {
  if (this.is_mobile_detail_open == true) {

    this.is_mobile_detail_open = false;

    this.page_template_content_element.show(0);
    this.instagram_detail_element.hide(0);

    this.instagram_detail_image.update_layout();
  }
};



//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//


/**
 * @param {object} event
 */
savour.component.InstagramSection.prototype.on_instagram_data_load_complete = function(event) {
  this.is_instagram_data_loaded = true;
  this.data_array = this.instagram_data_container.data_array;

  this.create_masonry();
  this.create_desktop_popup();
};

/**
 * @param {object} event
 */
savour.component.InstagramSection.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.InstagramSection.prototype.on_event_handler_04 = function(event) {
};






savour.component.InstagramSection.prototype.sample_method_calls = function() {

  // sample override
  savour.component.InstagramSection.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(savour.component.InstagramSection.EVENT_01));
};



