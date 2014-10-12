import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
	return {
	    players: {
		topplayer:{
		    name: "Foobar",
		    played: {suit:"hearts", value:"queen"},
		    cards: [{suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"}],
		    score: 20,
		    goal: 7,
		    strikes: 3,
		    order: "first"
		},
		rightplayer:{
		    name: "John Doe",
		    played: {suit:"diamonds", value:"three"},
		    cards: [{suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"}],
		    score: 10,
		    goal: 6,
		    strikes: 2,
		    order: "second"
		},
		bottomplayer:{
		    name: "Alice",
		    cards: [{suit:"clubs", value:"ace"},
			    {suit:"clubs", value:"king"},
			    {suit:"diamonds", value:"queen"},
			    {suit:"spades", value:"jack"},
			    {suit:"heats", value:"ten"},
			    {suit:"clubs", value:"nine"},
			    {suit:"diamonds", value:"eight"},
			    {suit:"spades", value:"seven"},
			    {suit:"hearts", value:"six"},
			    {suit:"clubs", value:"five"},
			    {suit:"diamonds", value:"four"},
			    {suit:"spades", value:"three"},
			    {suit:"hearts", value:"two"}],
		    score: 10,
		    goal: 6,
		    strikes: 1,
		    order: "third"
		},
		leftplayer:{
		    name: "example.org",
		    cards: [{suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"},
			    {suit:"unknown", value:"unknown"}],
		    score: -60,
		    goal: 0,
		    strikes: 0,
		    order:"fourth"

		}
	    },
	    game: {first:"bottomplayer"}
	};
    }
});
