 jest.mock('react-router-dom', () => ({
  Link: ({ children }) => children,
  // Add other react-router components you use
}));