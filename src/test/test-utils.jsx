import React from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { FirebaseContext } from '../contexts/FirebaseContext';

const mockFirebase = {
    auth: {
        currentUser: {
            uid: '123',
            displayName: 'Test User',
        },
    },
    sendMessageWith: vi.fn(),
};

const MockFirebaseProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={mockFirebase}>
            {children}
        </FirebaseContext.Provider>
    );
};

export const renderWithMockFirebase = (ui, options = {}) =>
    render(ui, { wrapper: MockFirebaseProvider, ...options });
