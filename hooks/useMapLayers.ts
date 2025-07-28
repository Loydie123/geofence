import { useState } from 'react';
import { MapType, MAP_LAYERS } from '../constants/maps';

interface UseMapLayersReturn {
  selectedLayer: MapType;
  isLayersModalVisible: boolean;
  showLayersModal: () => void;
  hideLayersModal: () => void;
  handleSelectLayer: (type: MapType) => void;
}

export function useMapLayers(initialLayer: MapType = 'standard'): UseMapLayersReturn {
  const [selectedLayer, setSelectedLayer] = useState<MapType>(initialLayer);
  const [isLayersModalVisible, setIsLayersModalVisible] = useState(false);

  const showLayersModal = () => setIsLayersModalVisible(true);
  const hideLayersModal = () => setIsLayersModalVisible(false);

  const handleSelectLayer = (type: MapType) => {
    setSelectedLayer(type);
    hideLayersModal();
  };

  return {
    selectedLayer,
    isLayersModalVisible,
    showLayersModal,
    hideLayersModal,
    handleSelectLayer,
  };
} 