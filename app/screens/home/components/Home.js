import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions,
    TextInput,
    TouchableOpacity,

} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({ images, handleChange, keyword, getImagesByKeyword, infiniteScroll }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: .1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flex: .2 }} />
                <View style={styles.searchInput}>
                    <Icon
                        name='search'
                        size={22}
                        style={styles.searchIcon}
                        color='#bbb'
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder={'I\'m looking for...'}
                        placeholderTextColor={'#999'}
                        underlineColorAndroid={'#fff'}
                        autoCorrect={false}
                        value={keyword}
                        onChangeText={text => handleChange('keyword', text)}
                    />
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginLeft: 20
                }}>
                    <Icon
                        name='check'
                        size={22}
                        style={styles.menu}
                        color='#bbb'
                        onPress={getImagesByKeyword}
                    />
                </View>
            </View>

            <ScrollView style={{ flex: .99 }} onScrollEndDrag={event => infiniteScroll(event.nativeEvent)}>
                <View style={{ flex: 1, flexDirection: 'row', padding: 2, flexWrap: 'wrap' }}>
                    {images.map((data, index) => {
                        return <View key={index} style={{ margin: 2, width: width / 2 - 6, height: 200, backgroundColor: 'red' }}>
                            <Image resizeMode="cover" source={{ uri: data.assets.huge_thumb.url }} style={{ width: width / 2 - 6, height: 200 }} />
                        </View>
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchInput: {
        flex: 8.7,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45
    },
    searchIcon: {
        flex: 1,
        paddingLeft: 10
    },
    inputText: {
        flex: 9,
        fontSize: 15,
        color: '#999',
        paddingLeft: 20
    },
    menu: {
        flex: 1.5,
        color: 'blue'
    }
});


export default Home