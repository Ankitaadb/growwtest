import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        zIndex: 99,
        backgroundColor: '#597fab',
        width: '100%',
        overflow: 'hidden',
        paddingBottom: 10,
        paddingTop: 28
    },
    arrowMinimizeContainer: {
        position: 'relative',
        top: -3
    },
    arrowMinimizeIcon: {
        marginLeft: 12,
    },
    searchInput: {
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 3,
        height: 45,
        marginTop: 3,
        marginLeft: 10,
        marginRight: 10,
    },
    locationInput: {
        marginTop: 10,
    },
    searchIcon: {
        position: 'absolute',
        left: 13,
        top: 12,
    },
    inputText: {
        display: 'flex',
        marginTop: 13,
        marginLeft: 43,
        fontSize: 15,
        color: '#999',
    },
});