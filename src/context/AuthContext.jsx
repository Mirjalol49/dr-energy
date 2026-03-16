import { createContext, useContext, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useStickyState } from '../hooks/useStickyState';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useStickyState(false, 'pdf-viewer-auth');

  const login = useCallback((pin) => {
    // In a real app, verify against a backend.
    // Here we'll just check against a static secure PIN for demonstration.
    if (pin === '1234') { // TODO: Move to env var if preferred
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, [setIsAuthenticated]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, [setIsAuthenticated]);

  const value = useMemo(() => ({
    isAuthenticated,
    login,
    logout
  }), [isAuthenticated, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
