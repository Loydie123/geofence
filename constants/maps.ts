export type MapType = 'standard' | 'satellite' | 'hybrid' | 'terrain';

export interface Layer {
  id: MapType;
  name: string;
}

export const MAP_LAYERS: Layer[] = [
  { id: 'standard', name: 'Standard' },
  { id: 'satellite', name: 'Satellite' },
  { id: 'hybrid', name: 'Hybrid' },
  { id: 'terrain', name: 'Terrain' }
];

export const PREVIEW_REGION = {
  latitude: 14.5995,
  longitude: 120.9842,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
}; 