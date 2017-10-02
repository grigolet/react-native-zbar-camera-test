import React from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent, Text, View } from 'react-native'

class Barcode extends React.Component {
    constructor(props) {
        super(props)
        this._onChange = this._onChange.bind(this)
    }
    _onChange(event) {
        if (!this.props.onBarcodeRead) {
            return
        }
        this.props.onBarcodeRead(event.nativeEvent)
    }

    render() {
        return (
            <ZBarCamera 
                {...this.props} 
                style={{width: 100, height: 100}} 
                onChange={this._onChange} 
            />
        )
    }
}

Barcode.propTypes = {
    onBarcodeRead: PropTypes.func,
    ...View.propTypes
}

const ZBarCamera = requireNativeComponent('ZBarCamera', Barcode, {
    nativeOnly: {
        onChange: true
    }
})

export default Barcode