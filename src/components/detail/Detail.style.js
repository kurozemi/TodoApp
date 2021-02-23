import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    main: {
        flex: 1,
    },
    titleContainer: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    title: {
        width: '80%',
        fontSize: 25,
        fontWeight: 'bold'
    },
    card: {
        marginTop: 20,
        marginLeft: 12,
        marginRight: 10,
        paddingLeft: 15,
        borderWidth: 0.3,
        borderRadius: 3,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    desCard: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    text: {
        fontSize: 17,
        color: 'black',
    },
    dateText: {
        color: 'rgba(0,0,0,0.6)'
    },
    cardDate1: {
        paddingTop: 15,
        marginRight: 35,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderColor: 'rgba(0,0,0,0.7)'
    },
    cardDate2: {
        paddingTop: 10,
        paddingBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    cardNote: {
        height: '25%',
    },
})
export default style;