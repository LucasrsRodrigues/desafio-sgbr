import React, { useCallback, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSharedValue } from 'react-native-reanimated';

import { Box, Heading, HStack, Icon } from '@components/base';
import { useToast } from '@hooks/useToast';
import { useAuth } from '@hooks/auth';
import BrandsHttpService from '@services/infraestructure/service/BrandsHTTPService';
import { BrandCard } from '@components/BrandCard';

interface Brand {
  codigo: string;
  nome: string;
}

export function Home() {
  const { showToast } = useToast();
  const { user } = useAuth();
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const renderItem = useCallback(({ item }) => (
    <BrandCard
      item={item}
      viewableItems={viewableItems}
    />
  ), [viewableItems]);

  return (
    <Box padding={24} topSafe>
      <HStack justifyContent="space-between">
        <Heading variant="heading4">
          Bem vindo, {user?.name}!
        </Heading>

        <Icon name="logout" size={24} />
      </HStack>

      <FlatList
        data={brands}
        renderItem={renderItem}
        keyExtractor={item => item.codigo}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </Box>
  );
}