import { render } from '@testing-library/react';

import MessageList from './message-list';

describe('MessageList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MessageList />);
    expect(baseElement).toBeTruthy();
  });
});
