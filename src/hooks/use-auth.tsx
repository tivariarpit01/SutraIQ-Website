
'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User,
} from 'firebase/auth';
import { firebaseApp } from '@/lib/firebase'; // This will be created next

// NOTE: This is a simplified auth hook for demonstration.
// In a real application, you would handle errors and edge cases more robustly.

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Stand-in for the real User object for testing purposes
const mockUser = {
  uid: 'test-user',
  email: 'admin@example.com',
  displayName: 'Admin User',
  // Add other user properties as needed, matching the User type
} as User;


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  const auth = getAuth(firebaseApp);
  const isFirebaseConfigured = process.env.NEXT_PUBLIC_FIREBASE_API_KEY && process.env.NEXT_PUBLIC_FIREBASE_API_KEY !== "YOUR_API_KEY";

  useEffect(() => {
    // If firebase is not configured, we just use the mock user for testing
    if (!isFirebaseConfigured) {
      setLoading(false);
      // You can uncomment the line below to be logged in by default for testing
      // setUser(mockUser);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, isFirebaseConfigured]);

  const signIn = (email: string, password: string) => {
    // If firebase isn't set up, use a mock login for testing
    if (!isFirebaseConfigured) {
      return new Promise((resolve, reject) => {
        if (email === 'admin@example.com' && password === 'password') {
          setUser(mockUser);
          setLoading(false);
          resolve(true);
        } else {
           reject(new Error('auth/invalid-credential'));
        }
      });
    }
    // Otherwise, use real Firebase auth
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
     if (!isFirebaseConfigured) {
        return new Promise((resolve) => {
            setUser(null);
            resolve();
        });
     }
    return firebaseSignOut(auth);
  };

  const value = { user, loading, signIn, signOut };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
