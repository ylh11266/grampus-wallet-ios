import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Modal, Button, Provider } from '@ant-design/react-native';
import { AppBaseColor, AppFontSize } from '../../Config';
export default class DefaultPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  render() {
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') },
    ];
    return (
      <Provider>
        <Modal
          title="Title"
          transparent
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
          closable
          footer={footerButtons}
        >
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ textAlign: 'center' }}>Content...</Text>
            <Text style={{ textAlign: 'center' }}>Content...</Text>
          </View>
          <Button type="primary" onPress={this.onClose}>
            close modal
        </Button>
        </Modal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 10
  }
});