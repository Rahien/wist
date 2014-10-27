import Ember from 'ember';

export default Ember.ObjectController.extend({
    queryParams: ['page'],
    page: 4,

    actions:{
	"next-page":function(){
	    var page = this.get("page");
	    var pages = this.get("pages");
	    if(page<pages){
		this.set("page",page+1);
	    }
	},
	"previous-page":function(){
	    var page = this.get("page");
	    if(page>1){
		this.set("page",page-1);
	    }
	},
	"new-game":function(){
	    console.log("new game");
	}

    },
    pageBunch:4,
    pagelinks:function(){
	var page = this.get("page");
	var pages = this.get("pages");
	var pageBunch = this.pageBunch;

	var current = 1;
	var firstpages = [];

	while(current <= page &&  current<=pageBunch){
	    firstpages.push(current);
	    current++;
	}

	var middlepages = [];
	current = Math.max(current,page-pageBunch+1);
	while(current < page + pageBunch && current < pages){
	    middlepages.push(current);
	    current++;
	}

	var lastpages = [];
	current = Math.max(current,pages-pageBunch);
	while(current <= pages){
	    lastpages.push(current);
	    current++;
	}
	
	var allpages = [];
	allpages.push(firstpages);
	allpages.push(middlepages);
	allpages.push(lastpages);

	allpages = this.reducePagelinks(allpages);

	return allpages;
    }.property("page","pages"),
    reducePagelinks:function(pagelinks){
	var previousPages = pagelinks[0];
	var resultPagelinks = [pagelinks[0]];

	for(var i=1, pages; pages = pagelinks[i]; i++){
	    var last = previousPages[previousPages.length -1];
	    if(pages[0]){
		if(last +1 === pages[0]){
		    // just continuing, join the page lists
		    previousPages = previousPages.concat(pages);
		    resultPagelinks[resultPagelinks.length-1] = previousPages;
		}else{
		    previousPages = pages;
		    resultPagelinks.push(pages);
		}
	    }else{
		// empty, throw away
	    }
	}
	return resultPagelinks;
    },    
    firstpages:function(){
	return this.get("pagelinks")[0];
    }.property("pagelinks"),
    middlepages:function(){
	return this.get("pagelinks")[1];
    }.property("pagelinks"),
    lastpages:function(){
	return this.get("pagelinks")[2];
    }.property("pagelinks")
    
});
