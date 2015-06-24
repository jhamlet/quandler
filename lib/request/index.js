var protean = require('protean'),
    Rx = protean.rx,
    _ = protean._;

/**
 * @class QuandlerRequest
 * @param {Object} opts
 */
function QuandlerRequest (opts) {
    opts = this.options = _.extend({}, this.options, opts || {});
}

module.exports = protean.classify(QuandlerRequest,
    /** @lends QuandlerRequest# */{
    options: {
        /**
         * Milliseconds to throttle requests
         * @property {Integer}
         * @default 1800
         */
        rateLimit: 60 * 60 * 1000 / 2000
    },
    /**
     * @returns {external:Rx.Observable<Object>}
     */
    securities: function () {
        return Rx.Observable.empty();
    },
    /**
     * @param {String|String[]}
     * @param {Object} [opts]
     * @returns {external:Rx.Observable}
     */
    fundamentals: function (ticker, opts) {
        return Rx.Observable.empty();
    },
    /**
     * @param {String|String[]}
     * @param {Object} [opts]
     * @returns {external:Rx.Observable}
     */
    quotes: function (ticker, opts) {
        return Rx.Observable.empty();
    }
});
