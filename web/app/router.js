import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('application');
    this.route('lobby');
  this.route('game');
  this.route('about');
  this.route('contact');
});

export default Router;
