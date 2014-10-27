import Ember from 'ember';

export default Ember.Component.extend({
    tagName:"tr",
    game:null,
    
    actions:{
	join:function(){
	    console.log(this.game);
	}
    }
});
