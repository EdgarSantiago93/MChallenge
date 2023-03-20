import { TextInput, Button, Group, Select,Space,Divider } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { CreateUserFormValues } from '@mind/data/Types/CreateUserFormValues';
import { useState } from 'react';

interface Props { form: UseFormReturnType<CreateUserFormValues>; }

const CreateUserForm = (props: Props) => {
  const { form } = props;


  const [isLoading, setIsLoading] = useState(false);
  const createUser = (values: CreateUserFormValues) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    },2000)
    console.log(values);
  };
  return (

    <form onSubmit={form.onSubmit((values) => createUser(values))} style={{paddingBottom:100}}>

      <Group grow>
        <TextInput
          withAsterisk
          label="Name"
          {...form.getInputProps('name')}
          disabled={isLoading}

        />
        <TextInput
          withAsterisk
          label="Last name"
          {...form.getInputProps('lastName')}
          disabled={isLoading}

        />
      </Group>
      <Space h={10}/>

      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
        disabled={isLoading}

      />
      <Space h={10}/>

      <Select
        withAsterisk
        label="Assign role"
        placeholder="Role"
        data={[
          { value: 'admin', label: 'Admin' },
          { value: 'user', label: 'User' },

        ]}
        disabled={isLoading}

        {...form.getInputProps('role')}
      /> 
      
       <Space h={20}/>
    
<Divider/>
<Space h={15}/>
      <Select
        label="Assign to team"
        placeholder="Team"
        maxDropdownHeight={150}
        data={[
          { value: '001', label: 'Frontend' },
          { value: '002', label: 'Backend' },  
        ]}
        disabled={isLoading}

        {...form.getInputProps('team')}
      />
 <Space h={10}/>
      <Select
        label="Assign to account"
        placeholder="Account"
        maxDropdownHeight={150}
        data={[
          { value: '001', label: 'account 1' },
          { value: '002', label: 'account 2' },
        ]}
        dropdownPosition="bottom"
        disabled={isLoading}
        {...form.getInputProps('account')}
      />


      <Group position="right" mt="md">
        <Button type="submit" loading={isLoading}>Create</Button>
      </Group>
    </form>

  );
};

export default CreateUserForm;
