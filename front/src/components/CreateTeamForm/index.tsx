import { TextInput, Button, Group,Space, Textarea } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { CreateTeamFormValues } from '@mind/data/Types/CreateTeamFormValues';
import { useState } from 'react';

interface Props { form: UseFormReturnType<CreateTeamFormValues>; }

const CreateTeamForm = (props: Props) => {
  const { form } = props;
  const [isLoading, setIsLoading] = useState(false);
  const createTeam = (values: CreateTeamFormValues) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    },2000)
    console.log(values);
  };
  return (

    <form onSubmit={form.onSubmit((values) => createTeam(values))} style={{paddingBottom:100}}>
     
      <TextInput
          withAsterisk
          label="Name"
          {...form.getInputProps('name')}
          disabled={isLoading}
        />
      <Space h={10}/>
      <Textarea
          label="Description"
          {...form.getInputProps('description')}
          disabled={isLoading}
        />
      <Space h={10}/>
      <Group position="right" mt="md">
        <Button type="submit" loading={isLoading}>Create</Button>
      </Group>
    </form>

  );
};

export default CreateTeamForm;
