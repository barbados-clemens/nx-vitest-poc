import {it, describe, expect} from 'vitest'
import renderer from 'react-test-renderer';
import {MyReactLib} from './my-react-lib'

describe("MyReactLib", () => {
  it('should work', () => {
    expect(true).toBe(true);
  })

  it('should render', () => {
    const cmp = renderer.create(<MyReactLib/>);
    let tree = cmp.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
