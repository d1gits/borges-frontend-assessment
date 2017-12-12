import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './Button';

test('<Button> should render correctly', (assert) => {

  const button = shallow(
    <Button value={1} onClick={() => {}}>Label</Button>
  );

  assert.equal(button.prop('type'), 'button', 'Should be of type "button"');
  assert.equal(button.prop('children'), 'Label', 'Should have correct label text');
  assert.end();

});

test('<Button> should call onClick', (assert) => {

  const onClickSpy = sinon.spy();

  const button = shallow(
    <Button value={5} onClick={onClickSpy}>Label</Button>
  );

  button.simulate('click');

  assert.equal(onClickSpy.callCount, 1, 'Should have called onClick');
  assert.equal(onClickSpy.args[0][0], 5, 'Should have called onClick with correct value');
  assert.end();

});
