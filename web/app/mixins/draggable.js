import Ember from 'ember';

export default Ember.Mixin.create({
    isDraggable:true,
    didInsertElement:function(){
	this._super();
	var dragScope = this.get("dragscope");
	var draggableParams = {
	    revert:"invalid",
	    scroll:true,
	    zIndex: 666,
	    disabled: !this.get("isDraggable")
	};
	if(dragScope){
	    draggableParams.scope = dragScope;
	}
	this.$().draggable(draggableParams);
	this.get("element").dragged = this;

	this.addObserver("isDraggable", this, function(sender,key, value){
	    var disabled = !value;
	    sender.$().draggable(disabled?"disable":"endable");
	});
    }    
});
