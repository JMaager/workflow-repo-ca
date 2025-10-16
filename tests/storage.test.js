import { describe, it, expect, beforeEach } from 'vitest';
import { saveUser, getUsername, clearStorage } from '../js/utils/storage.js';

describe('getUsername', () => {
  beforeEach(() => {
    clearStorage();
  });

  it('returns the name from the user object in storage', () => {
    saveUser({ name: 'Ada Lovelace', id: 1 });
    expect(getUsername()).toBe('Ada Lovelace');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
