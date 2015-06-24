var protean = require('protean'),
    QuandlRequest = require('./request/quandl'),
    YahooRequest = require('./request/yahoo'),
    // Rx = protean.rx,
    _ = protean._;
/**
 * A class to encapsulate the retrieval of stock quote and fundamental data.
 * @class Quandler
 * @param {Object} opts
 */
function Quandler (opts) {
    opts = this.options = _.extend({}, this.options, opts || {});

    opts.securityProvider =
        opts.securityProvider || new QuandlRequest();

    opts.fundamentalProvider =
        opts.fundamentalProvider || new QuandlRequest();

    opts.quoteProvder =
        opts.quoteProvder || new YahooRequest();

    this.securities =
        opts.securityProvider.securities.bind(opts.securityProvider);

    this.fundamentals =
        opts.fundamentalProvider.fundamentals.bind(opts.fundamentalProvider);

    this.quotes =
        opts.quoteProvder.quotes.bind(opts.quotes);
}

module.exports = protean.classify(Quandler,/** @lends Quandler# */{
    /**
     * Default options
     * @property {Object}
     */
    options: {
        /**
         * Where to fetch security information from
         * @property {QuandlerRequest}
         */
        securityProvider: null,
        /**
         * Where to fetch fundamental data from
         * @property {QuandlerRequest}
         */
        fundamentalProvider: null,
        /**
         * Where to fetch quote data from
         * @property {QuandlerRequest}
         */
        quoteProvider: null
    }
});
