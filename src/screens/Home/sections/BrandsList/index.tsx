import React, { useCallback, useState } from 'react';
import { Dimensions, FlatList, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { BrandCard } from '@components/BrandCard';
import { useToast } from '@hooks/useToast';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import BrandsHttpService from '@services/infraestructure/service/BrandsHTTPService';
import { VStack } from '@components/base';
import { Shimmer } from '@components/Shimmer';

interface Brand {
  codigo: string;
  nome: string;
}

const width = Dimensions.get('window').width;

export function BrandsList() {
  const { showToast } = useToast();
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { navigate } = useNavigation();

  const fetchBrands = async () => {
    try {

      setIsLoading(true);

      const response = await BrandsHttpService.listBrands();
      setBrands(response.data);
    } catch (error) {
      showToast(
        error?.response?.data?.message || 'Erro ao carregar marcas'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onViewableItemsChanged = useCallback(({ viewableItems: vItems }) => {
    viewableItems.value = vItems;
  }, []);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  useFocusEffect(
    useCallback(() => {
      fetchBrands();
    }, [])
  );

  const renderItem = useCallback(({ item }: { item: Brand }) => (
    <BrandCard
      item={item}
      viewableItems={viewableItems}
      onPress={() => navigate("Model", { brand: item })}
    />
  ), [viewableItems]);

  if (isLoading) {
    return (
      <VStack marginTop={20} spacing={20} alignItems="center">
        <Shimmer width={width - (width * 0.2)} height={80} borderRadius={15} />
        <Shimmer width={width - (width * 0.2)} height={80} borderRadius={15} />
        <Shimmer width={width - (width * 0.2)} height={80} borderRadius={15} />
        <Shimmer width={width - (width * 0.2)} height={80} borderRadius={15} />
        <Shimmer width={width - (width * 0.2)} height={80} borderRadius={15} />
        <Shimmer width={width - (width * 0.2)} height={80} borderRadius={15} />
        <Shimmer width={width - (width * 0.2)} height={80} borderRadius={15} />
      </VStack>
    );
  }

  return (
    <FlatList
      data={brands}
      renderItem={renderItem}
      keyExtractor={item => item.codigo}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    />
  );
}