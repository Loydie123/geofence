import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SettingsModal from '../modals/SettingsModal';
import ShareModal from '../modals/ShareModal';
import LayersModal from '../modals/LayersModal';
import SearchModal from '../modals/SearchModal';
import { useMapLayers } from '../../hooks/useMapLayers';
import { MapType } from '../../constants/maps';

interface MapButtonsProps {
  onMapTypeChange?: (mapType: MapType) => void;
}

export default function MapButtons({ onMapTypeChange }: MapButtonsProps) {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const {
    selectedLayer,
    isLayersModalVisible,
    showLayersModal,
    hideLayersModal,
    handleSelectLayer
  } = useMapLayers();

  const handleLayerChange = (type: MapType) => {
    handleSelectLayer(type);
    onMapTypeChange?.(type);
  };

  const buttonStyle = {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  return (
    <View style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'box-none'
    }}>
      <TouchableOpacity
        style={{
          ...buttonStyle,
          position: 'absolute',
          top: 35,
          left: 20,
        }}
        onPress={() => setIsSettingsVisible(true)}
      >
        <Ionicons name="settings" size={20} color="#90EE90" />
      </TouchableOpacity>

      <SettingsModal 
        visible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
      />

      <TouchableOpacity
        style={{
          ...buttonStyle,
          position: 'absolute',
          top: '50%',
          right: 20,
          transform: [{ translateY: -20 }],
        }}
        onPress={() => {}}
      >
        <MaterialCommunityIcons name="crosshairs-gps" size={22} color="#90EE90" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...buttonStyle,
          position: 'absolute',
          top: '50%',
          right: 20,
          transform: [{ translateY: 40 }],
        }}
        onPress={showLayersModal}
      >
        <MaterialCommunityIcons name="layers-triple" size={22} color="#90EE90" />
      </TouchableOpacity>

      <LayersModal 
        visible={isLayersModalVisible}
        onClose={hideLayersModal}
        selectedLayer={selectedLayer}
        onSelectLayer={handleLayerChange}
      />

      <TouchableOpacity
        style={{
          ...buttonStyle,
          position: 'absolute',
          top: '50%',
          right: 20,
          transform: [{ translateY: 100 }],
        }}
        onPress={() => setIsShareVisible(true)}
      >
        <MaterialCommunityIcons name="share-variant" size={22} color="#90EE90" />
      </TouchableOpacity>

      <ShareModal 
        visible={isShareVisible}
        onClose={() => setIsShareVisible(false)}
      />

      <TouchableOpacity
        style={{
          ...buttonStyle,
          position: 'absolute',
          top: '50%',
          right: 20,
          transform: [{ translateY: 160 }],
        }}
        onPress={() => setIsSearchVisible(true)}
      >
        <MaterialCommunityIcons name="magnify" size={22} color="#90EE90" />
      </TouchableOpacity>

      <SearchModal 
        visible={isSearchVisible}
        onClose={() => setIsSearchVisible(false)}
      />
    </View>
  );
} 