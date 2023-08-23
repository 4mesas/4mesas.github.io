import { writable, readable } from "svelte/store";

export const memo = writable({});

export const urls = readable({
  profiles: 'https://docs.google.com/spreadsheets/d/13YrXX0ezK9UGO6duH6UrmANeU2P0COgJbP1XFVDvkgo/export?format=csv&gid=0',
  works: 'https://docs.google.com/spreadsheets/d/13YrXX0ezK9UGO6duH6UrmANeU2P0COgJbP1XFVDvkgo/export?format=csv&gid=1697597837',
  new: 'https://docs.google.com/spreadsheets/d/13YrXX0ezK9UGO6duH6UrmANeU2P0COgJbP1XFVDvkgo/export?format=csv&gid=964019172',
  new_gallery: 'https://docs.google.com/spreadsheets/d/13YrXX0ezK9UGO6duH6UrmANeU2P0COgJbP1XFVDvkgo/export?format=csv&gid=642653722',
  main: 'https://docs.google.com/spreadsheets/d/13YrXX0ezK9UGO6duH6UrmANeU2P0COgJbP1XFVDvkgo/export?format=csv&gid=1413039258',
  main_gallery: 'https://docs.google.com/spreadsheets/d/13YrXX0ezK9UGO6duH6UrmANeU2P0COgJbP1XFVDvkgo/export?format=csv&gid=101122323'
});