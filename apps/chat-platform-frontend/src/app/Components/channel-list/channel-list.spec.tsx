import { render } from '@testing-library/react';

import ChannelList from './channel-list';

describe('ChannelList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChannelList />);
    expect(baseElement).toBeTruthy();
  });
});
