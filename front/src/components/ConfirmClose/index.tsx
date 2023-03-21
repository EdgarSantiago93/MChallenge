import { Button,Text, Flex, useMantineTheme } from '@mantine/core';

interface Props {
  topText: string;
  bottomText?: string;
  cancelFn: () => void;
  confirmFn: () => void;
}

const ConfirmClose = (props: Props) => {
  const { bottomText, topText ,cancelFn,confirmFn} = props;
  const theme = useMantineTheme();
  return (
    <>
      <Text fw={600} color={theme.colors.gray[7]} align={'center'} mt={50}>
        {topText}
      </Text>


      {bottomText!.length > 0 && (
        <Text fw={600} color={theme.colors.gray[7]} align={'center'}>
          {bottomText}
        </Text>
      )}
      <Flex justify={'center'} gap={10} mt={30}>
        <Button onClick={cancelFn} size="xs" >Cancel</Button>
        <Button onClick={confirmFn} size="xs" variant="subtle">Yes, close</Button>
      </Flex>


    </>
  );
};

export default ConfirmClose;
