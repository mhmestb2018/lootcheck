import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { Loot } from './Loot';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Loot', () => {
  let props = { balance: 10, bitcoin: {} };
  let loot = shallow(<Loot {...props}/>);

  it('renders properly', () => {
     expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockFetchBitcoin = jest.fn();

    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      loot = mount(<Loot {...props} />);
    });

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
       expect(mockFetchBitcoin).toHaveBeenCalled();
    });

  });
});
