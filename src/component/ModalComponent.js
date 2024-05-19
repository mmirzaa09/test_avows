import { View, Text, Modal, StyleSheet } from 'react-native'
import React, { forwardRef } from 'react'

const ModalComponent = forwardRef(
    ({
        setModal
    }) => {
        return (
            // <View style={Styles.centeredView}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={setModal}
                >
                    <View>
                        <Text>tes modal</Text>
                    </View>
                </Modal>
            // </View>
        )
    }
);

const Styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      }
})

export default ModalComponent