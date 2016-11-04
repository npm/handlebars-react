var React = require('react')
var hbs = require('handlebars')

var Handlebars = React.createClass({

    render: function() {
        return React.createElement(`${this.props.element}`, { dangerouslySetInnerHTML: {
            __html: this.getHtml(this.props.template)
        } });
    },

    getHtml: function (template) {

        if (typeof hbs.partials[template] != 'function') {
            hbs.partials[template] = hbs.compile(hbs.partials[template]);
        }

        return new hbs.SafeString(hbs.partials[template](this.props));

    }
});

module.exports = Handlebars;