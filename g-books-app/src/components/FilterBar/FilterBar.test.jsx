import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('FilterBar', () => {
    it('Should render', () => {
        render(<FilterBar />);
        const radio = screen.getByType('radio');
        // console.log(radio);
        expect(radio).toBeInTheDocument();
      });
});
