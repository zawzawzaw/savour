goog.provide('savour.component.InstagramSection');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.DingMasonry');
goog.require('savour.component.InstagramDataItem');





/**
 * The CLASSNAME constructor
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
  this.data_array_load_counter = 0;
  this.data_array_length = 0;


  this.instagram_data_item_container = this.element.find('#instagram-data-item-container');
  this.instagram_item_container = this.element.find('#instagram-item-container');


  this.create_and_load_instagram_data();


  


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
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.InstagramSection.ON_CREATE_COMPLETE = 'on_create_complete';

/**
 * CLASSNAME Event Constant
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


savour.component.InstagramSection.prototype.create_and_load_instagram_data = function() {

  var arr = this.instagram_data_item_container.find('.instagram-data-item');
  var item = null;

  /**
   * @type {savour.component.InstagramDataItem}
   */
  var data_item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);

    
    data_item = new savour.component.InstagramDataItem({}, item);

    this.data_array[i] = data_item;

    goog.events.listen(data_item, savour.component.InstagramDataItem.ON_AJAX_DATA_LOAD_COMPLETE, this.on_data_item_load_complete.bind(this));
    

  }

  this.data_array_length = this.data_array.length;

};
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

    data_item_desktop_element = $(data_item.instagram_desktop_item_str)

    fragment.append(data_item_desktop_element);
  }


  this.instagram_item_container.append(fragment);



  /**
   * @type {manic.ui.DingMasonry}
   */
  this.ding_masonry = new manic.ui.DingMasonry({
    'selector': '.instagram-item',
    'column_divider': 350,
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


savour.component.InstagramSection.prototype.private_method_03 = function() {};
savour.component.InstagramSection.prototype.private_method_04 = function() {};
savour.component.InstagramSection.prototype.private_method_05 = function() {};
savour.component.InstagramSection.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


savour.component.InstagramSection.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {goog.events.Event} event
 */
savour.component.InstagramSection.prototype.on_data_item_load_complete = function(event) {
  this.data_array_load_counter++;

  if (this.data_array_load_counter == (this.data_array_length - 1)) {

    this.create_masonry();
    this.dispatchEvent(new goog.events.Event(savour.component.InstagramSection.ON_CREATE_COMPLETE));

  }
  
};

/**
 * @param {object} event
 */
savour.component.InstagramSection.prototype.on_event_handler_02 = function(event) {
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



