import React from 'react'
import { View, StyleSheet } from 'react-native'
import Checked from '../../../img/check.svg'

const Checkbox = (props) => {
    return (
            props.isCheck
            ? <Checked height={25} width={25}></Checked>
            : <View style = {style.circle} ></View>
    )
}

const style = StyleSheet.create({
    circle: {
        borderRadius: 30,
        borderWidth: 1,
        height: 22,
        width: 22,
    },

})
export default Checkbox;