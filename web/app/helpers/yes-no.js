import Ember from 'ember';

function yesNo(value) {
  return value?"yes":"no";
}

export {
  yesNo
};

export default Ember.Handlebars.makeBoundHelper(yesNo);
