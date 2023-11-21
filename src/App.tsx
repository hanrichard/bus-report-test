import { QueryClient, QueryClientProvider } from 'react-query';

import { Home } from '../src/features/Home'
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
      <Footer />
    </QueryClientProvider>
  )
}

export default App
