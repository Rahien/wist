import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
	page: {
	    refreshModel:true
	}
    },
    model:function(){
	console.log("refreshing model");
	return {
	    games: [{name:"Heart Hunters", players:4, scored:true, locked:true, playing:false},
		    {name:"Ace of spades", players:3, scored:false, locked:true, playing:true},
		    {name:"Hercules' clubs", players:2, scored:true, locked:false, playing:false},
		    {name:"Diamonds are a girl's best friend", players:1, scored:false, locked:false, playing:false}],
	    pages: 99
	};
    }
});
