import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Heading,
  Stack,
  Button,
} from '@chakra-ui/react'

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data) => {
    console.log('alert', data);
  }

  return (
    <>
      <Heading fontSize={'4xl'}>Retrolink admin</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='email'>email</FormLabel>
              <Input
                id='email'
                type='email'
                placeholder='email'
                {...register('email', {
                  required: 'This is required',
                  minLength: { value: 4, message: 'Minimum length should be 4' },
                })}
              />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='password'>password</FormLabel>
            <Input
              id='password'
              type='password'
              placeholder='password'
              {...register('password', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </>
  )
}