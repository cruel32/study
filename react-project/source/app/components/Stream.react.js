let React = require('react');
let SnapkiteStreamClient = require('snapkite-stream-client');
let StreamTweet = require('./StreamTweet.react');
let Header = require('./header.react');

let Stream = React.createClass({
    getInitialState(){
        return {
            tweet : null
        }
    },
    componentDidMount(){
        SnapkiteStreamClient.initializeStream(this.handleNewTweet);
    },
    componentWillUnmount(){
        SnapkiteStreamClient.destroyStream();
    },
    handleNewTweet(tweet){
        this.setState({
            tweet
        })
    },
    render(){
        let tweet = this.state.tweet;
        if(tweet) {
            return (
                <StreamTweet
                tweet={tweet}
                onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }
        return (
            <header text="Waiting for publick photos from twiiter..." />
        )
    }
})

module.exports = Stream;
