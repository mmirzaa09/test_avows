import { View, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import images from '../../resources/images';
import TextInputComponent from '../../component/TextInputComponent';
import Button from '../../component/Button';
import { Modal } from 'react-native';
import { putDataContact } from '../../store/actions/actionContact';
import { useDispatch } from 'react-redux';

const EditContact = ({route}) => {
    const { param } = route.params
    console.log(param)
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState()
    const [selectedImage, setSelectedImage] = useState(param.photo);
    const [onModal, setOnModal] = useState(false);
    const dispatch = useDispatch();

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        setOnModal(false);
        launchImageLibrary(options, handleResponse);
    }

    const handleCameraLaunch = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
        setOnModal(false);
        launchCamera(options, handleResponse);
    };

    const handleResponse = (response) => {
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

    const onSaveContact = () => {
        const data = {
            'firstName': firstName,
            'lastName': lastName,
            'age': age,
            'photo': selectedImage
        }
        dispatch(putDataContact(param.id, data))
        .then(() => {
            resetState();
        }).catch(() => {
            resetState();
        });
    };

    const resetState = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setSelectedImage('');
    }
    
    return (
        <KeyboardAvoidingView style={Styles.container}>
            <ScrollView>
                <View>
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
                            onChange={(data) => setFirstName(data)}
                            value={param.firstName}
                        />
                        <TextInputComponent
                            label='Nama Belakang'
                            placeholder='Masukan Nama Belakang'
                            onChange={(data) => setLastName(data)}
                            value={param.lastName}
                        />
                        <View style={{ width: '40%' }}>
                            <TextInputComponent
                                label='Umur'
                                placeholder='Masukan Umur'
                                onChange={(data) => setAge(data)}
                                typeKeyboard='numeric'
                                value={param.age}
                            />
                        </View>
                        <Button
                            label='Simpan'
                            onPress={() => onSaveContact()}
                        />
                    </SafeAreaView>

                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={onModal}
                    >
                        <View style={Styles.centeredView}>
                            <View style={Styles.modalView}>
                                <Button
                                    label='File'
                                    onPress={() => openImagePicker()}
                                />
                                <Button
                                    label='Camera'
                                    onPress={() => handleCameraLaunch()}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    modalView: {
        backgroundColor: 'white',
        width: 200,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
});

export default EditContact