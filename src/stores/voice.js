import { writable } from 'svelte/store';

export const currentTime = writable(0)

export const voicePlaying = writable(false)

export const end = writable(undefined)
export const start = writable(0)