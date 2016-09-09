goog.provide('savour.component.TemplateGalleryWithInstagram');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.DingMasonry');
goog.require('savour.component.InstagramDataItem');
goog.require('savour.component.InstagramDataContainer');

goog.require('savour.component.TemplateGallery');


/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The jQuery element connected to class
 * @constructor
 * @extends {savour.component.TemplateGallery}
 */
savour.component.TemplateGalleryWithInstagram = function(options, element) {

  savour.component.TemplateGallery.call(this, options, element);
  this.options = $.extend(this.options, savour.component.TemplateGallery.DEFAULT, options);
  

  this.data_array = [];


  this.instagram_caption_element = this.element.find('#page-template-banner-instagram-copy');



  this.gallery_item_template = [
    '<div class="page-template-banner-gallery-item" ',
      'data-id="{gallery_id}">',
      '<div id="page-template-banner-image">',
        '<div class="manic-image-container" data-scale-mode="best_fit">',
          '<img src="" data-image="{thumbnail_url}">',
        '</div>',
      '</div>',
    '</div>'
  ].join('');



  this.gallery_thumbnail_template = [
    '<div class="page-template-banner-thumbnail-item" data-id="{gallery_id}">',
      '<div class="manic-image-container">',
        '<img src="" data-image="{thumbnail_url}">',
      '</div>',
    '</div>'
  ].join('');


  this.is_instagram_data_loaded = false;


  /**
   * @type {savour.component.InstagramDataContainer}
   */
  this.instagram_data_container = new savour.component.InstagramDataContainer({}, this.element.find('#instagram-data-item-container'));
  goog.events.listen(this.instagram_data_container, savour.component.InstagramDataContainer.ON_LOAD_COMPLETE, this.on_instagram_data_load_complete.bind(this));



  console.log('savour.component.TemplateGalleryWithInstagram: init');
};
goog.inherits(savour.component.TemplateGalleryWithInstagram, savour.component.TemplateGallery);


/**
 * like jQuery options
 * @const {object}
 */
savour.component.TemplateGalleryWithInstagram.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.TemplateGalleryWithInstagram.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
savour.component.TemplateGalleryWithInstagram.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


/**
 * @override
 * @inheritDoc
 */
savour.component.TemplateGalleryWithInstagram.prototype.init = function() {
  // do nothing
};
savour.component.TemplateGalleryWithInstagram.prototype.create_html = function() {

  /**
   * @type {savour.component.InstagramDataItem}
   */
  var data_item = null;

  var fragment = $(document.createDocumentFragment());
  var item_str = '';
  var item = null;

  // GALLERY ITEM
  for (var i = 0, l=this.data_array.length; i < l; i++) {
    data_item = this.data_array[i];


    item_str = nano(this.gallery_item_template, data_item.gallery_data_object);
    item = $(item_str)

    fragment.append(item);
  }

  this.gallery_item_container_element.append(fragment);



  // GALLERY THUMBNAIL
  
  fragment = $(document.createDocumentFragment());

  for (var i = 0, l=this.data_array.length; i < l; i++) {

    data_item = this.data_array[i];

    item_str = nano(this.gallery_thumbnail_template, data_item.gallery_data_object);
    item = $(item_str)

    fragment.append(item);
  }
  this.thumbnail_container_element.append(fragment);


};
savour.component.TemplateGalleryWithInstagram.prototype.create_image_container = function() {
  /**
   * @type {manic.ui.ImageContainer}
   */
  var image_container = null;
  var arr = this.element.find('.manic-image-container');
  var item = null;

  for (var i = 0, l=arr.length; i < l; i++) {
    item = $(arr[i]);
    image_container = new manic.ui.ImageContainer({}, item);
  }

};


savour.component.TemplateGalleryWithInstagram.prototype.private_method_04 = function() {};
savour.component.TemplateGalleryWithInstagram.prototype.private_method_05 = function() {};
savour.component.TemplateGalleryWithInstagram.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



/**
 * @override
 * @inheritDoc
 */
savour.component.TemplateGalleryWithInstagram.prototype.update_gallery_text = function(number_param) {

  // don't use old version
  // savour.component.TemplateGalleryWithInstagram.superClass_.update_gallery_text.call(this, number_param);
  
  /**
   * @type {savour.component.InstagramDataItem}
   */
  var data_item = null;

  if (this.is_instagram_data_loaded == true && goog.isDefAndNotNull(this.data_array[number_param]) == true) {
    data_item = this.data_array[number_param];

    this.instagram_caption_element.find('h3').html(data_item.data_object['author_name']);
    this.instagram_caption_element.find('.instagram-detail-location h4').html(data_item.data_object['location']);
    this.instagram_caption_element.find('.cta-container a').attr('href', data_item.data_object['link_url'])
    this.instagram_caption_element.find('p').html(data_item.data_object['title'])


  }
};
savour.component.TemplateGalleryWithInstagram.prototype.public_method_02 = function() {};
savour.component.TemplateGalleryWithInstagram.prototype.public_method_03 = function() {};
savour.component.TemplateGalleryWithInstagram.prototype.public_method_04 = function() {};
savour.component.TemplateGalleryWithInstagram.prototype.public_method_05 = function() {};
savour.component.TemplateGalleryWithInstagram.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * @param {object} event
 */
savour.component.TemplateGalleryWithInstagram.prototype.on_event_handler_01 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.TemplateGalleryWithInstagram.prototype.on_event_handler_02 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.TemplateGalleryWithInstagram.prototype.on_event_handler_03 = function(event) {
};

/**
 * @param {object} event
 */
savour.component.TemplateGalleryWithInstagram.prototype.on_instagram_data_load_complete = function(event) {

  this.is_instagram_data_loaded = true;

  this.data_array = this.instagram_data_container.data_array;

  this.create_html();
  this.create_slick();
  this.create_image_container();

  this.update_gallery_text(0);      // set the first text


};






savour.component.TemplateGalleryWithInstagram.prototype.sample_method_calls = function() {

  // sample override
  savour.component.TemplateGalleryWithInstagram.superClass_.method_02.call(this);

  // sample event
  this.dispatchEvent(new goog.events.Event(savour.component.TemplateGalleryWithInstagram.EVENT_01));
};