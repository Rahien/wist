import Ember from 'ember';
import Draggable from 'wist/mixins/draggable';

export default Ember.Component.extend(Draggable,{
    classNames:"card",
    dragscope:"cards",
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
