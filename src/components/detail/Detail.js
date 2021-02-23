import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import style from './Detail.style'

import Delete from '../../img/delete.svg'
import StartDate from '../../img/start-date.svg'
import EndDate from '../../img/end-date.svg'
import Description from '../../img/description.svg'

const Detail = ({route}) => {

    const STATUS = route.params.status;
    const INDEX = route.params.index;

    const [tasks, setTasks] = useState(route.params.tasks);
    const [item, setItem] = useState(route.params.item);
    
    console.log('STATUS: ', STATUS);
    console.log('INDEX: ', INDEX);
    console.log('tasks: ', tasks);
    console.log('item: ', item);
    return (
        <View style={style.main}>
            <View style={style.titleContainer}>
                    <TextInput style={style.title} value = {item.taskName} multiline = {true}/>
                <TouchableOpacity>
                <Delete style={style.icon} width={30} height={30}></Delete>
                </TouchableOpacity>
            </View>
            <View style={[style.card, style.desCard]}>
                <Description style={style.icon} width={30} height={30}></Description>
                <TextInput
                    style= {[style.text, {width: '80%'}]} placeholder='Add description'
                    multiline={true}
                    autoFocus={false}
                    value = {item.description}
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
                    >{item.taskStartDate}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.cardDate2}>
                    <EndDate style={style.icon} width={30} height={30}></EndDate>
                    <Text
                        style={[style.text, style.dateText]}
                    >Deadline: </Text>
                    <Text
                        style={[style.text, style.dateText]}
                    >{item.taskEndDate}</Text>
                </TouchableOpacity>
            </View>
            <View style={[style.card, style.cardNote]}>
                <TextInput
                    multiline = {true}
                    style={style.text} placeholder='Add a note'
                    value = {item.note}
                />
            </View>
        </View>
    )
}
export default Detail;