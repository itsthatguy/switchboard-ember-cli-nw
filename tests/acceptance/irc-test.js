import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: IRC', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('smoke', function(assert) {
  assert.ok(true);
});

test('Click button to connect to irc', function(assert) {
  assert.ok(false);
});

test('Get response from server', function(assert) {
  assert.ok(false);
});

test('See response from server in the browser', function(assert) {
  assert.ok(false);
});
