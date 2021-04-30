import { useCallback, useState } from 'react';

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