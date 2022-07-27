var Twitter = function() {
    this.userMap = new Map(); // map to store user tweets
    this.followerMap = new Map();  // map to store user/following sets
    this.ts = 0; // timestamp var
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.ts++; // increment timestamp
    if (!this.userMap.has(userId)) this.userMap.set(userId, []); // if first tweet, create new entry in user Map
    this.userMap.get(userId).push([tweetId, this.ts]); // add new tweet
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let res = this.userMap.get(userId) || [];
    let usersFollowing = this.followerMap.get(userId) || new Set(); // store users & tweets of followee's
    for (let user of usersFollowing) res = res.concat(this.userMap.get(user) || []); //
    res.sort((x, y) => y[1] - x[1]); // sort based on most recent timestamp
    return res.slice(0, 10).map(x => x[0]); // return only 10 most recent tweets 
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.followerMap.has(followerId)) // check if user has followers set already
        this.followerMap.set(followerId, new Set()); 
    this.followerMap.get(followerId).add(followeeId); // add followee to follower set
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.followerMap.has(followerId)) // ensure followerId exists in followMap
        this.followerMap.get(followerId).delete(followeeId); // delete followee from followerId set
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */