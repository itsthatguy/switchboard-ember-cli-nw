import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('connection-settings', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('Clicking the button will fire connect action', function(assert) {
  assert.ok(false);
});
