import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { MapType, MAP_LAYERS, PREVIEW_REGION } from '../../constants/maps';

interface LayersModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectMapType?: (type: MapType) => void;
}

export default function LayersModal({ visible, onClose, onSelectMapType }: LayersModalProps) {
  const [selectedLayer, setSelectedLayer] = useState<MapType>('standard');

  const handleSelectLayer = (layerId: MapType) => {
    setSelectedLayer(layerId);
    onSelectMapType?.(layerId);
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
    >
      <View className="flex-1 bg-black/50 items-center justify-center">
        <View className="bg-white rounded-2xl w-[320px]">
          <View className="p-4 border-b border-gray-100">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-semibold">Map Style</Text>
              <TouchableOpacity 
                className="w-8 h-8 items-center justify-center rounded-full bg-gray-50"
                onPress={onClose}
              >
                <MaterialCommunityIcons name="close" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="p-4">
            {MAP_LAYERS.map(layer => (
              <TouchableOpacity 
                key={layer.id}
                className={`flex-row items-center p-3 rounded-xl mb-2 ${selectedLayer === layer.id ? 'bg-[#f0fdf4]' : ''}`}
                onPress={() => handleSelectLayer(layer.id)}
              >
                <View className={`w-24 h-24 rounded-lg overflow-hidden ${selectedLayer === layer.id ? 'border-2 border-[#90EE90]' : 'border border-gray-200'}`}>
                  <MapView
                    style={{ width: '100%', height: '100%' }}
                    region={PREVIEW_REGION}
                    mapType={layer.id}
                    zoomEnabled={false}
                    rotateEnabled={false}
                    scrollEnabled={false}
                    pitchEnabled={false}
                  />
                </View>
                <View className="ml-3 flex-1">
                  <Text className={`text-base ${selectedLayer === layer.id ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
                    {layer.name}
                  </Text>
                </View>
                {selectedLayer === layer.id && (
                  <MaterialCommunityIcons 
                    name="check-circle" 
                    size={20} 
                    color="#90EE90" 
                    style={{ marginLeft: 'auto' }}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
} 