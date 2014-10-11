import Ember from 'ember';

export default Ember.ObjectController.extend({
    // obsolete, will be done on server, kept for logic
    playerorder:function(playerpos,firstplayer) {
	var order = ["topplayer","rightplayer","bottomplayer","leftplayer"];
	var orderNames = ["first","second","third","fourth"];
	var playersindex= Ember.$.inArray(firstplayer,order);
	
	while (playersindex >0){
	    order.push(order.shift());
	    playersindex--;
	}

	return orderNames[Ember.$.inArray(playerpos,order)];
    },
    // transform the object with players into an array for easy eaching
    cardplayers:function(){
	var cardplayers = [];
	var players = this.get("players");
	for (var playerpos in players) {
	    var player = players[playerpos];
	    player.position = playerpos;
	    cardplayers.push(player);
	}
	return cardplayers;
    }.property("players")
});
