import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Input, VStack } from '@components/base';
import { Heading } from '@components/base/Typography/Heading';
import { Button } from '@components/base/Button';

import * as Yup from "yup";
import UserHTTPService from '@services/infraestructure/service/UserHTTPService';
import { ControlledInput } from '@components/ControlledInput';
import { useToast } from '@hooks/useToast';

const schema = Yup.object().shape({
  user: Yup.string().required("Username é obrigatório"),
  password: Yup.string().required('Senha é obrigatória'),
});

type FormData = Yup.InferType<typeof schema>;

export function SignIn() {
  const { showToast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema)
  })

  async function handleLogin(data: FormData) {
    try {
      const response = await UserHTTPService.login(data);

      console.log("===> LOGIN");
      console.log(response.data)
      console.log("===> LOGIN");
    } catch (error) {
      showToast(error?.response?.data?.message);
    }
  }

  return (
    <Box padding={24} topSafe>
      <Heading textAlign='center'>
        Bem vindo!
      </Heading>

      <VStack spacing={24} marginTop={47}>
        <ControlledInput
          control={control}
          name='user'
          icon='message'
          placeholder='Username'
          error={errors.user?.message}
        />

        <ControlledInput
          control={control}
          name='password'
          icon='lock'
          placeholder='Senha'
          error={errors.password?.message}
          secureTextEntry
        />

        <Button
          onPress={handleSubmit(handleLogin)}
          isLoading={isSubmitting}
        >
          Sign in
        </Button>
      </VStack>
    </Box>
  );
}