import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import images from '../../resources/images';
import { useDispatch, useSelector } from 'react-redux';
import { getListContact } from '../../store/actions/actionContact';
import axios from 'axios';

const List = () => {
    const [listData, setListData] = useState([]);
    const dispatch = useDispatch();
    const { listContact } = useSelector(state => state.contact)

    useEffect(() => {
        dispatch(getListContact())
        setListData(listContact);
    }, [dispatch]);

    const renderComponent = () => {
        if(!listData) {
            return (<Text>test</Text>)
        }

        return listData.map((data) => (
                <View style={styles.contentContainer}>
                    <View style={styles.contentBody}>
                        <Image style={styles.imageStyle} source={{ uri: `${data.photo}` } || images.example}/>
                        <View style={styles.containerName}>
                            <Text style={styles.nameStyle}>{data?.firsName} {data?.lastName}</Text>
                            <Text style={styles.umurStyle}>{data?.age}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image style={styles.iconEdit} source={images.edit}/>
                    </TouchableOpacity>
                </View>
            )
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {listContact && renderComponent()}
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
        borderRadius: 10,
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
        width: 20,
        height: 20,
        marginRight: 20
    }
});

export default List