import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions:{
	playCard:function(card){
	    var topPlayedCard = this.get("model.players.topplayer.played");
	    var rightPlayedCard = this.get("model.players.rightplayer.played");
	    var bottomPlayedCard = this.get("model.players.bottomplayer.played");
	    if(!topPlayedCard || !rightPlayedCard){
		this.revertCard(card,"It's not your turn yet, please wait to play your card!");		
	    }else if(bottomPlayedCard){
		this.revertCard(card,"You have already played a card this turn, please wait for the next turn to play your card!");
	    }else{
		this.tryPlayCard(card);
	    }
	}
    },

    tryPlayCard:function(card){
	// TODO call server!
	this.set("model.players.bottomplayer.played", card.get("card")); 
	card.destroy();
    },

    revertCard:function(card,reason){
	this.message(reason);
	card.$().animate({top:0,left:0});
    },    

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
    }.property("players"),


    message:function(text){
	var message = Ember.$("<div class='message'></div>").html(text);
	Ember.$(".field").append(message);
	var removeMessage = function(){
	    message.removeClass("show");
	    setTimeout(function(){
		message.remove();
	    },500);
	};
	setTimeout(function(){ 
	    message.addClass("show");
	},0);
	setTimeout(removeMessage, 3000);
	message.click(removeMessage);
    }
});
