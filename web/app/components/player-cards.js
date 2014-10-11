import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
	grabCard:function(card){
	    console.log(card);
	}
    }
});
