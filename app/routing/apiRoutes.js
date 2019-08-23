let friendList = require('../data/friends.js');
let newFriendsList = friendList

module.exports = function(app){
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    let newFriendScores = req.body.scores;
    let scoresArray = [];
    let bestMatch = 0;


    for(let i=0; i<friendList.length; i++){
      let scoresDiff = 0;
      for(let j=0; j<newFriendScores.length; j++) {
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }
      scoresArray.push(scoresDiff);
    }

  
    for(let i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

  
    let bff = friendList[bestMatch];
    res.json(bff);

    newFriendsList.push(req.body);
  });
};