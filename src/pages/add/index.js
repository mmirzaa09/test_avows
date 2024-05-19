import { View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from '../../component/TextInputComponent';
import Button from '../../component/Button';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import images from '../../resources/images';
import ModalComponent from '../../component/ModalComponent';

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const AddContact = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [selectedImage, setSelectedImage] = useState(null);
    const [onModal, setOnModal] = useState(false);

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
    
        launchImageLibrary(options, handleResponse);
    }

    const handleCameraLaunch = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
    
        launchCamera(options, handleResponse);
    };

    const handleResponse = (response) => {
        console.log(response)
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('Image picker error: ', response.error);
        } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            console.log(imageUri)
            setSelectedImage(imageUri);
        }
    };

    return (
        <View style={Styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => setOnModal(!onModal)}>
                    { selectedImage ?
                        (<Image
                            source={{ uri: selectedImage }}
                            style={Styles.imageStyle}
                            resizeMode="contain"
                        />)
                    : (
                        <View style={Styles.imageEmpty}>
                            <Image source={images.iconPlus} style={Styles.iconStyle}/>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            <SafeAreaView>
                <TextInputComponent
                    label='Nama Depan'
                    placeholder='Masukan Nama Depan'
                    onChange={(param) => setFirstName(param)}
                />
                <TextInputComponent
                    label='Nama Belakang'
                    placeholder='Masukan Nama Belakang'
                    onChange={(param) => setLastName(param)}
                />
                <View style={{ width: '40%' }}>
                    <TextInputComponent
                        label='Umur'
                        placeholder='Masukan Umur'
                        onChange={(param) => setLastName(param)}
                    />
                </View>
                <Button
                    label='Simpan'
                />
            </SafeAreaView>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center'
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        margin: 10
    },
    imageEmpty: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        margin: 10
    },
    iconStyle: {
        width: 70,
        height: 70,
        tintColor: '#ffff',
        marginTop: 5
    }
});

export default AddContact