import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import UiIcons from './UiIcons';


describe('UiIcon test', () => {

  it('should render icon by iconName', () => {
    render(<UiIcons iconName="like" />);
    const useElement = screen.getByTestId('like')
    expect(useElement).toBeInTheDocument()
  })
})