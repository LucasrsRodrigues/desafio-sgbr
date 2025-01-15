import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, VStack, Heading, Button } from '@components/base';
import { ControlledInput } from '@components/ControlledInput';

import { useAuth } from '@hooks/auth';
import { loginSchema } from '@global/schemas/login.schema';

export function SignIn() {
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

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
          onPress={handleSubmit(login)}
          isLoading={isSubmitting}
        >
          Sign in
        </Button>
      </VStack>
    </Box>
  );
}