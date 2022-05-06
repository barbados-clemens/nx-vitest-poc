import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { MyReactLib } from './my-react-lib';

describe('MyReactLib', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should render', () => {
    const cmp = renderer.create(<MyReactLib />);
    let tree = cmp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should throw error', () => {
    expect(() => {
      throw new Error('blah');
    }).toThrowError('blah');
  });
});
