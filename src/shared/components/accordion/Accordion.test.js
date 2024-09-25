import {fireEvent, render} from '@testing-library/react';
import { Accordion } from './Accordion';

const title = "Title Test"
it('renders the title', () => {
  const {getByText} = render(<Accordion title={title} />);
  expect(getByText('Title Test')).toBeInTheDocument();
});

it('is open by default and closes on click', async() => {
    const {container, getByText } = render(<Accordion title={title} >Test Content</Accordion>);
    expect(container.firstChild.firstChild).toHaveClass('Open')

    await fireEvent.click(container.firstChild.firstChild)

    expect(container.firstChild.firstChild).not.toHaveClass('Open')
    expect(getByText('Test Content')).not.toBeVisible()
})
 