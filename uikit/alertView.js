define([
  'jquery',
  'underscore',
  'backbone',
  './UIView',
  './UIButton',
  './UILabel'
], function($, _, Backbone,
            UIView,
            UIButton,
            UILabel
) {
  // UIAlertView
  return function(title, message, okButtonLabel) {
    var UIAlertView;
    var alertView;
    var deferred = $.Deferred();

    UIAlertView = UIView.extend({
      className: 'ui-alert-view',
      template: `
        <div class="ui-alert-content"></div>`,
      $content: null,
      title: '',
      message: '',
      okButtonLabel: null,

      render: function() {
        this.$el.empty();
        this.$el.html(this.template);
        this.$content = this.$el.find('.ui-alert-content');

        this.addSubview(new UILabel({
          class: 'alert-title-label',
          text: this.title
        }), this.$content);

        this.addSubview(new UILabel({
          class: 'alert-message-label',
          text: this.message
        }), this.$content);

        this.addSubview(new UIButton({
          class: 'alert-ok-btn',
          label: okButtonLabel ? okButtonLabel : 'OK',
          action: this.resolve
        }), this.$content);

        return this;
      },

      show: function() {
        $('body').append(this.render().el);
      },

      hide: function() {
        this.destroy();
      },

      resolve: function(data) {
        deferred.resolve(data);
        this.hide();
      }
    });

    alertView = new UIAlertView({
      title: title,
      message: message,
      okButtonLabel: okButtonLabel
    });

    alertView.show();

    return deferred.promise();
  };
});
