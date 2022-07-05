import React from 'react';

function Tweet() {

  const tweetInfo = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    tweetHandle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago"
  };

  return (
    <article class="tweet">
      <header class="tweet--header">
        <img class="tweet--avatar" src={tweetInfo.avatar} />
        <h2 class="tweet--name">{tweetInfo.firstName} {tweetInfo.lastName}</h2>
        <small class="tweet--handle">{tweetInfo.tweetHandle}</small>
      </header>

      <div class="tweet--body">
        <p>
          {tweetInfo.body}
        </p>
      </div>

      <footer class="tweet--footer">
        <small class="footer--age">
          {tweetInfo.age}
          <small>
            <span class="footer--actions">
              <a href="#">
                <i class="fa fa-flag"></i>
              </a>
              <a href="#">
                <i class="fa fa-retweet"></i>
              </a>
              <a href="#">
                <i class="fa fa-heart"></i>
              </a>
            </span>
          </small>
        </small>
      </footer>
    </article>
  );
};

export default Tweet;