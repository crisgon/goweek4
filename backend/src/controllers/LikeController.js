const Tweet = require('../models/Tweet');

module.exports = {
  async store(req, res) {
    const tweet = await Tweet.findById(req.params.id);

    tweet.set({ likes: tweet.likes + 1 });

    req.io.emit('like', tweet);

    await tweet.save();

    return res.json(tweet);
  }
};
