import React from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

interface RemoveDialogProps {
  id?: string;
  remove: (id: string) => void;
  cancel: () => void;
}

export default function RemoveDialog(props: RemoveDialogProps) {
  return (
    <Portal>
      <Dialog visible={!!props.id} onDismiss={props.cancel}>
        <Dialog.Content>
          <Text variant="bodyMedium">Estas seguro de eliminar este item?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={props.cancel}>Cancel</Button>
          <Button
            onPress={() => {
              props.remove(props.id!);
              props.cancel();
            }}>
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
