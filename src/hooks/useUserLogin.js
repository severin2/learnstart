import { useCallback, useState } from 'react';

/**
 * This is where we'd add some persistence if we had any
 * @returns 
 */
export default function useUserLogin() {
  const [ user, setUser ] = useState(null);

  const login = useCallback((loggedInUser) => {
    setUser(loggedInUser);
  }, [])

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return { user, login, logout }
}