define([
    'jquery',
    'mage/translate',
    'mage/mage'
], function ($, $t) {
    'use strict';

    return function (widget) {
        $.widget('mage.deleteConfirmation', widget, {
            _create: function () {
                this._super();
                this.options.dialogClass = 'delete-confirm';
                this.options.title = $t('Delete Item');
            },

            /**
             * Confirm action.
             *
             * @param {String} message
             * @param {Function} onOk
             */
            confirm: function (message, onOk) {
                onOk();
            }
        });

        return $.mage.deleteConfirmation;
    };
});
