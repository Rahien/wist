import Ember from 'ember';

export default Ember.Route.extend({
    model:function(){
	return {
	    games: [{name:"Heart Hunters", players:4, scored:true, locked:true},
		    {name:"Ace of spades", players:3, scored:false, locked:true},
		    {name:"Hercules' clubs", players:2, scored:true, locked:false},
		    {name:"Diamonds are a girl's best friend", players:1, scored:false, locked:false}],
	    page: 3,
	    pages: 99
	}
    }
});
