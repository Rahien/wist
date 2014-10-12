import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
	grabCard:function(card){
	    console.log(card);
	}
    },
    isCurrentPlayer:function(){
	return this.get("player").position === "bottomplayer";
    }.property("player")
});
