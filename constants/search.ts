export interface SearchPlace {
  id: string;
  name: string;
}

export const RECENT_SEARCHES: SearchPlace[] = [
  { id: '1', name: 'Mall of Asia' },
  { id: '2', name: 'SM Megamall' },
  { id: '3', name: 'Glorietta' },
  { id: '4', name: 'BGC' }
];

export const SEARCH_PLACEHOLDER = 'Search for a place';
export const RECENT_SEARCHES_TITLE = 'Recent Searches'; 