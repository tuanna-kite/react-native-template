import React from "react";
import { StyleSheet } from "react-native";
import { AlertDialog, Button, Center } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeError } from "../store/error.reducer";

const ErrorOverlay = () => {
  const error = useSelector((state: RootState) => state.error.error);
  const dispatch = useDispatch();
  const cancelRef = React.useRef(null);
  const onClose = () => dispatch(removeError());
  return (
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={!!error} onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header color="danger">{error?.title}</AlertDialog.Header>
        <AlertDialog.Body>{error?.message}</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
              Close
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({});
