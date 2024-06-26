import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import images from '../../resources/images';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getListContact } from '../../store/actions/actionContact';
import axios from 'axios';

const List = ({navigation}) => {
    const dispatch = useDispatch();
    const { listContact, error } = useSelector(state => state.contact)
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        dispatch(getListContact());
    }, [dispatch]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(getListContact())
        .then(() => {
            setRefreshing(false)
        }).catch(() => {
            setRefreshing(false)
        });
    });

    const onDeleteContact = (param) => {
        dispatch(deleteContact(param))
        .then(() => {
            dispatch(getListContact());
        }).catch(() => {
            dispatch(getListContact());
        })
    }

    const renderComponent = () => {
        if(!listContact) {
            return (
                <View>
                    <Text>Data Not Found</Text>
                </View>
            )
        }

        return listContact.map((data) => (
                <View style={styles.contentContainer}>
                    <View style={styles.contentBody}>
                        <Image style={styles.imageStyle} source={data.photo === 'N/A' ? images.example : { uri: `${data.photo}` }}/>
                        <View style={styles.containerName}>
                            <Text style={styles.nameStyle}>{data?.firsName} {data?.lastName}</Text>
                            <Text style={styles.umurStyle}>{data?.age}</Text>
                        </View>
                    </View>
                    <View style={styles.containerRight}>
                        <TouchableOpacity onPress={() => navigation.navigate('Edit', { param: data})}>
                            <Image style={styles.iconEdit} source={images.edit}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {onDeleteContact(data?.id)}}>
                            <Image style={styles.iconEdit} source={images.delete}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        )
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
        >
            <View style={styles.container}>
                {renderComponent()}
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white'
    },
    contentContainer: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contentBody: {
        display: 'flex',
        flexDirection: 'row',
        alignItem: 'center',
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        overflow: "hidden",
        borderWidth: 3,
        marginRight: 10
    },
    containerName: {
        alignItem: 'center', 
        justifyContent: 'center'
    },
    nameStyle: {
        fontWeight: '600',
        fontSize: 18,
        color: '#000'
    },
    umurStyle: {
        fontWeight: '400',
        fontSize: 16,
        color: '#000'
    },
    iconEdit: {
        width: 15,
        height: 15,
        margin: 10
    },
    containerRight: {
        flexDirection: 'row'
    }
});

export default List