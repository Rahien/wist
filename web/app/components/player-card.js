import Ember from 'ember';

export default Ember.Component.extend({
    classNames:"card",
    actions:{
	grabCard:function(card){
	    var component = this;
	    var element = this.get("element");
	    var player = this.get("parentView").get("player");
	    if(player.position === "bottomplayer"){
		console.log(element);
	    }
	}
    }
});
