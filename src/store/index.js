import { writable } from 'svelte/store'

export const serverUrl = writable('https://api.lecture.hufs.app')

export const token = writable('')
