import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

interface LayersModalProps {
  visible: boolean;
  onClose: () => void;
}

type Layer = {
  id: string;
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export default function LayersModal({ visible, onClose }: LayersModalProps) {
  const [selectedLayer, setSelectedLayer] = useState('standard');

  const layers: Layer[] = [
    { id: 'standard', name: 'Standard', icon: 'map' },
    { id: 'satellite', name: 'Satellite', icon: 'satellite-uplink' },
    { id: 'terrain', name: 'Terrain', icon: 'image-filter-hdr' }
  ];

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
            {layers.map(layer => (
              <TouchableOpacity 
                key={layer.id}
                className={`flex-row items-center p-3 rounded-xl mb-2 ${selectedLayer === layer.id ? 'bg-[#f0fdf4]' : ''}`}
                onPress={() => {
                  setSelectedLayer(layer.id);
                }}
              >
                <View className={`w-10 h-10 rounded-full items-center justify-center ${selectedLayer === layer.id ? 'bg-white' : 'bg-gray-50'}`}>
                  <MaterialCommunityIcons 
                    name={layer.icon} 
                    size={24} 
                    color={selectedLayer === layer.id ? '#90EE90' : '#666'} 
                  />
                </View>
                <Text className={`ml-3 text-base ${selectedLayer === layer.id ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
                  {layer.name}
                </Text>
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