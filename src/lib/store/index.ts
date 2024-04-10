import { writable } from "svelte/store";

export const categories=writable([])
export const tags=writable([])
export const posts=writable([])
export const menu=writable<any[]>([])