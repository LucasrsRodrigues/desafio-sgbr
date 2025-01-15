import React, { useCallback, useState } from 'react';
import { Dimensions, FlatList, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { BrandCard } from '@components/BrandCard';
import { useToast } from '@hooks/useToast';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import BrandsHttpService from '@services/infraestructure/service/BrandsHTTPService';
import { Heading, HStack, Text, VStack } from '@components/base';
import { Shimmer } from '@components/Shimmer';
import { ModelOption } from '@screens/Model/components/ModelOption';
import { set } from 'react-hook-form';

interface IModels {
  modelos: Array<{
    codigo: string;
    nome: string;
  }>;
  anos: Array<{
    codigo: string;
    nome: string;
  }>
}

const width = Dimensions.get('window').width;

export function ModelsList() {
  const { showToast } = useToast();
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const [models, setModels] = useState({} as IModels);
  const [isLoading, setIsLoading] = useState(false);

  const [viewOptions, setViewOptions] = useState("model");

  const { navigate } = useNavigation();
  const { params } = useRoute();

  const fetchBrands = async () => {
    try {

      setIsLoading(true);

      const response = await BrandsHttpService.getCars(params.brand.codigo);

      console.log("====> response")
      console.log(response.data)
      console.log("====> response")

      setModels(response.data);
    } catch (error) {
      console.log(error)
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

  const renderItem = useCallback(({ item }: { item: ICarProps }) => (
    <BrandCard
      item={item}
      viewableItems={viewableItems}
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
    <VStack marginTop={24}>
      <HStack alignItems="center" justifyContent="center" spacing={20}>
        <ModelOption
          title='Modelos'
          isActive={viewOptions === "model"}
          onPress={() => setViewOptions("model")}
        />

        <ModelOption
          title='Anos'
          isActive={viewOptions === "year"}
          onPress={() => setViewOptions("year")}
        />
      </HStack>

      <FlatList
        data={viewOptions === "model" ? models?.modelos : models?.anos}
        renderItem={renderItem}
        keyExtractor={item => item.codigo}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </VStack>
  );
}