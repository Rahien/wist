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
		    order: "third"
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
		    order: "fourth"
		},
		bottomplayer:{
		    name: "Alice",
		    played: {suit:"hearts", value:"ace"},
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
		    order: "first"
		},
		leftplayer:{
		    name: "example.org",
		    played: {suit:"hearts", value:"ten"},
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
		    order:"second"

		}
	    },
	    game: {first:"bottomplayer"}
	};
    }
});
