let React = require('react');
let ReactDOMServer = require('react-dom/server');
let CollectionControls = require('./CollectionControls.react');
let TweetList = require('./TweetList.react');
let Header = require('./Header.react');

let Collection = React.createClass({
  createHtmlMarkupStringOfTweetList(){
    let htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.props.tweets} />
    );
    let htmlMarkup = {
      html: htmlString
    };
    return JSON.stringify(htmlMarkup);
  },

  getListOfTweetIds(){
    return Object.keys(this.props.tweets);
  },

  getNumberOfTweetsInCollection(){
    return this.getListOfTweetIds().length;
  },

  render(){
    let numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
    if (numberOfTweetsInCollection > 0) {
      let tweets = this.props.tweets;
      let htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      let removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
      let handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
            onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />
          <TweetList
            tweets={tweets}
            onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
        </div>
      );
    }

    return <Header text="Your collection is empty" />;
  }
});

module.exports = Collection;