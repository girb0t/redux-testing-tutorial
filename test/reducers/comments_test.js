// Tip: always test defaut case of each reducer
// Tip: test each and every action that the reducer cares about

import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    // eql vs. equal
    // when comparing arrays:
    //   `eql` checks that both are arrays with the same elements
    //   `equal` checks that the array is the identical object
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
