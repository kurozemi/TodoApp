import {StyleSheet,Platform} from 'react-native'

const style = StyleSheet.create({
    main: {
        ...Platform.select({
            android: {
                marginTop: '12%'
            },
            ios: {
                marginTop: '17%'
            }
        })
        ,
        marginBottom: 0,
        marginLeft: 15,
    },
    selectAll: {
        marginRight: 10,
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    section: {
        marginBottom: 12,
        fontSize: 20,
        color: 'rgba(0,0,0,0.7)'
    },
    checkbox: {
        height: '150%',
        width: '12%',
        paddingLeft: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        marginBottom: 15,
        marginRight: 15,
        
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingLeft: 0,
        borderRadius: 10,
    },
    doingCard: {
        backgroundColor: '#d3f5e0',
    },
    notStartCard: {
        backgroundColor: '#fffec9',
    },
    completeCard: {
        backgroundColor: '#edfcf3',
    },
    cardData: {
        paddingLeft: 10,
    },
    completedHeading: {
        textDecorationLine: 'line-through',
        color: '#d0d0d0'
    },
    cardHeading: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    cardDate: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.7)'
    },
    overdue: {
        fontSize: 14,
        color: '#f56969',
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    floatingButton: {
        position: 'absolute',
        flex:1,
        right: 5,
        bottom: 30,
        zIndex: 1,
    },
    newTaskContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingLeft: 15,
        paddingBottom: 10,
        borderTopWidth: 1.5,
        borderColor: '#d1d9e6',
        backgroundColor: '#d3f5e0',
    },
    row: { 
        flexDirection:'row',
        alignItems: 'center',
    },
    confirmNewTask: {
        right: 15,
        position: 'absolute'
    },
    chooseDate: {
        borderRadius: 5,
        padding: 5,
        borderWidth: 1,
    },
    calenderContainer:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    subContainer:{
        marginTop: '40%',
        position: 'relative'
    }, 
    calender: {
        width: '90%',
        borderRadius: 10,
        paddingBottom: 40,
        paddingTop: 20,
        marginLeft:'5%'
    },
    footerCalender: {
        width: '30%',
        justifyContent: 'space-around',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 30,
    }, 
    footerText: {
        fontSize: 15,
    },
});
export default style;