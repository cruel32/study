let AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet(tweet){
    let action = {
        type : 'receive_tweet',
        tweet : tweet
    }
    AppDispatcher.dispatch(action);
}

module.exports = {
    receiveTweet : receiveTweet
}
