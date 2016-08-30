define([
  'jquery',
  'underscore',
  'backbone',
  './UIView',
  './UIButton'
], function($, _, Backbone,
            UIView,
            UIButton
) {
  // UIAccordionState
  return UIView.extend({
    className: 'ui-view ui-accordion-state',
    index: 0,
    item: false,
    opened: false,
    $button: null,
    buttonHeight: 40,
    render: function() {
      var button = new UIButton({
        label: this.item.title,
        align: 'justify',
        iconOrder: 1,
        action: function() {
          // console.log(this.superview.index);
          this.superview.toggle();
        }
      });
      this.addSubview(button);
      this.$button = button.$el;
      this.addSubview(this.item);
      setTimeout(this.layout, 0);
      return this;
    },
    layout: function() {
      this.buttonHeight = this.$button.outerHeight(true);
      if (!this.opened) {
        this.close();
      } else {
        this.open();
      }
    },
    open: function() {
      this.$el.removeAttr('style').addClass('state-opened');
    },
    close: function() {
      this.$el.attr('style', 'height: ' + this.buttonHeight + 'px;').removeClass('state-opened');
    },
    toggle: function() {
      if (this.opened) {
        // close
        this.opened = false;
        this.close();
      } else {
        // open
        this.opened = true;
        this.open();
      }
    }
  });
});
