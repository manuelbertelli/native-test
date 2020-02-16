import React, {
  AppRegistry,
  Component,
} from 'react-native';
import scanBarcode from 'react-native-scan-barcode';
 
class scanBarcodeApp extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      torchMode: 'off',
      cameraType: 'back',
    };
  }
 
  barcodeReceived(e) {
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
  }
 
  render() {
    return (
      <scanBarcode
        onBarCodeRead={this.barcodeReceived}
        style={{ flex: 1 }}
        torchMode={this.state.torchMode}
        cameraType={this.state.cameraType}
      />
    );
  }
}
 
AppRegistry.registerComponent('scanBarcodeApp', () => scanBarcodeApp);