import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import style from './Detail.style'

import Delete from '../../img/delete.svg'
import StartDate from '../../img/start-date.svg'
import EndDate from '../../img/end-date.svg'
import Description from '../../img/description.svg'
const Detail = () => {
    return (
        <View style={style.main}>
            <View style={style.titleContainer}>
                    <TextInput style={style.title}>TaskName</TextInput>
                <TouchableOpacity>
                <Delete style={style.icon} width={30} height={30}></Delete>
                </TouchableOpacity>
            </View>
            <View style={[style.card, style.desCard]}>
                <Description style={style.icon} width={30} height={30}></Description>
                <TextInput
                    style={style.text} placeholder='Add description'
                    multiline={true}
                    autoFocus={false}
                />
            </View>

            <View style={style.card}>
                <TouchableOpacity style={style.cardDate1}>
                    <StartDate style={style.icon} width={30} height={30}></StartDate>
                    <Text
                        style={[style.text, style.dateText]}
                    >Start: </Text>
                    <Text
                        style={[style.text, style.dateText]}
                    >2020-02-01</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.cardDate2}>
                    <EndDate style={style.icon} width={30} height={30}></EndDate>
                    <Text
                        style={[style.text, style.dateText]}
                    >Deadline: </Text>
                    <Text
                        style={[style.text, style.dateText]}
                    >2020-02-01</Text>
                </TouchableOpacity>
            </View>
            <View style={[style.card, style.cardNote]}>
                <TextInput
                    multiline = {true}
                    style={style.text} placeholder='Add a note'
                />
            </View>
        </View>
    )
}
export default Detail;