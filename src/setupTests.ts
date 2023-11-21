// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// eslint-disable-next-line
import '@testing-library/jest-dom';
import { configure as configureRtl } from '@testing-library/react';
import 'jest-styled-components';
import { setLogger } from 'react-query';
import { setupServer } from 'msw/node';
import { handlers } from './mocks';

export const mswServer = setupServer(...handlers)

configureRtl({ defaultHidden: true });

afterEach(() => mswServer.resetHandlers);
afterAll(() => mswServer.close);

setLogger({
  log: () => void {},
  warn: () => void {},
  error: () => void {}
});

jest.setTimeout(20000);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});