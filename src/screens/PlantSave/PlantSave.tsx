import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';

import { images, navigations } from '@/constants';
import { Button } from '@/components';
import { IConfirmationParams, IPlantSaveParams, IPlants } from '@/interfaces';

import {
  AlertLabel,
  Container,
  ControllersWapper,
  DateTimePickerText,
  DateTimePickerButton,
  PlantAbout,
  PlantImage,
  PlantName,
  TipsContainer,
  TipsImage,
  TipText,
  PantInfoWapper,
  Scroll,
} from './styles';

export default ({ savePlant }) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(Platform.OS === 'ios');

  const { navigate } = useNavigation();
  const route = useRoute();
  const { plant } = (route.params as IPlantSaveParams) || {};

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') setShowDatePicker(false);

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰');
    }

    setSelectedDateTime(dateTime || selectedDateTime);
  };

  const handleOpenDateTimePickerForAndroid = () => {
    setShowDatePicker(true);
  };

  const handleSavePlant = () => {
    try {
      savePlant({ ...plant, dateTimeNotification: selectedDateTime } as IPlants);

      navigate(navigations.Confirmation, {
        subtitle:
          'Fique tranquilo que sempre vamos\n lembrar você de cuidar da sua plantinha\n com bastante amor.',
        nextScreen: navigations.MyPlants,
        buttonText: 'Muito obrigado :D',
        title: 'Tudo certo',
        icon: 'hug',
      } as IConfirmationParams);
    } catch (error) {
      Alert.alert('Não foi possivel salvar. 😢');
    }
  };

  return (
    <Scroll>
      <Container>
        <PantInfoWapper>
          <PlantImage uri={plant.photo} />

          <PlantName>{plant.name}</PlantName>
          <PlantAbout>{plant.about}</PlantAbout>
        </PantInfoWapper>
        <ControllersWapper>
          <TipsContainer>
            <TipsImage source={images.waterdrop} />
            <TipText>{plant.water_tips}</TipText>
          </TipsContainer>

          <AlertLabel>Escoha o melhor horário para ser lembrado:</AlertLabel>

          {showDatePicker && (
            <DateTimePicker
              onChange={handleChangeTime}
              value={selectedDateTime}
              display="spinner"
              mode="time"
              is24Hour
            />
          )}

          {Platform.OS === 'android' && (
            <DateTimePickerButton onPress={handleOpenDateTimePickerForAndroid}>
              <DateTimePickerText>{`Mudar ${format(
                selectedDateTime,
                'HH:mm'
              )}`}</DateTimePickerText>
            </DateTimePickerButton>
          )}

          <Button text="Cadastrar Planta" onPress={handleSavePlant} />
        </ControllersWapper>
      </Container>
    </Scroll>
  );
};
