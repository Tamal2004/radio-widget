import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// this is the component we are going to be testing
import { IconButton } from './IconButton';
import BackIcon from '../../assets/back-arrow.png';

// this is an event handler function that we will mock
const clickHandler = jest.fn();

test('render the checkbox and click on it', () => {
    const altText = 'Icon - Back Arrow';
    const buttonName = 'back';

    const { asFragment } = render(
        <IconButton
            src={BackIcon}
            alt={altText}
            onClick={clickHandler}
            aria-label={buttonName}
        />
    );

    // This is an inline snapshot.
    expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <button
            aria-label="back"
            class="button"
            role="button"
          >
            <img
              alt="Icon - Back Arrow"
              class="icon"
              src="back-arrow.png"
            />
          </button>
        </DocumentFragment>
    `);

    // React testing library encourages you to get elements the way
    // a real user would-- in this case, by the role & accessible name.
    const iconButton = screen.getByRole('button', { name: buttonName });

    // Our fire off a click event
    fireEvent.click(iconButton);
    expect(clickHandler).toHaveBeenCalled();
});
