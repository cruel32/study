let React = require('react');
let ReactDOM = require('react-dom');
let Header = require('./Header.react.js');
let Tweet = require('./Tweet.react.js');

let StreamTweet = React.createClass({
    render(){
        console.log('[Snapterest] StreamTweet : Running render()');
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection}
                />
            </section>
        );
    }
});

module.exports = {};