App.Game = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  year: DS.attr(),
  console: DS.attr(),
  company: DS.attr(),
  inProgress: DS.attr()
});