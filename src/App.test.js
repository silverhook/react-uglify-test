/*!
 * SPDX-SnippetBegin
 * SPDX-SnippetCopyrightText: Copyright 1970 Testie McTest
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//! SPDX—SnippetEnd
