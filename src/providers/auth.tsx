import supabase from '@/supabase';
import { Session, UserCredentials } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type State = 'LOGGED_IN' | 'LOGGED_OUT' | 'CHECKING';
type Props = {
  session: Session | null;
  setSession: Dispatch<SetStateAction<Session | null>>;
  logout: () => Promise<void>;
  signIn: (credentials: UserCredentials | null) => Promise<any>;
  state: State;
};

const initialState: Props = {
  session: null,
  setSession: () => null,
  logout: async () => {},
  signIn: async () => {},
  state: 'CHECKING',
};

const AuthContext = createContext(initialState);

export function AuthProvider({ children }: PropsWithChildren<{}>) {
  const data = useAuthLayer();
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export const useAuth = (): Props => {
  return useContext(AuthContext);
};

export const useAuthLayer = () => {
  const router = useRouter();
  const [state, setState] = useState<State>('CHECKING');
  const [session, setSession] = useState<Session | null>(
    supabase.auth.session()
  );

  const signIn = async (credentials: UserCredentials | null) => {
    await supabase.auth.signIn({
      email: credentials.email,
      password: credentials.password,
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);

      if (session) {
        setState('LOGGED_IN');
      } else {
        setState('LOGGED_OUT');
      }
    });
  }, []);

  useEffect(() => {
    const checkAuthState = async () => {
      const { data: supabaseSession, error } =
        await supabase.auth.getSessionFromUrl({
          storeSession: true,
        });

      const localStorageSession = localStorage.getItem('supabase.auth.token');

      if (supabaseSession || localStorageSession) {
        setState('LOGGED_IN');
      } else {
        setState('LOGGED_OUT');
      }
    };

    checkAuthState();
  }, []);

  return {
    session,
    setSession,
    state,
    signIn,
    logout,
  };
};
