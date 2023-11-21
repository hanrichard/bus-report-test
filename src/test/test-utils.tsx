import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, RenderOptions } from '@testing-library/react';

import '@testing-library/jest-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const customRender: any = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return {
    queryClient,
    ...render(ui, { wrapper, ...options })
  };
};

export { customRender as render };
