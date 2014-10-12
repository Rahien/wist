import Ember from 'ember';

export default Ember.Component.extend({
    classNames:"field",
    // TODO this is odd, possibly an ember bug?
    playCard:"playCard",
    didInsertElement:function(){
	var self = this;
	this._super();
	this.$().droppable({
	    scope: "cards",
	    drop: function( event, ui ) {
		self.sendAction("playCard",  ui.draggable[0].dragged);
		ui.draggable.removeClass("over");
	    },
	    over: function( event, ui) {
		if(!ui.draggable.hasClass("over")){
		    ui.draggable.addClass("over");
		}
	    },
	    out: function( event, ui){
		ui.draggable.removeClass("over");
	    }
	});
    }
});
