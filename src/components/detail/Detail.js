import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import style from './Detail.style'
import { HeaderBackButton } from '@react-navigation/stack'
import { Calendar } from 'react-native-calendars';

import Delete from '../../img/delete.svg'
import StartDate from '../../img/start-date.svg'
import EndDate from '../../img/end-date.svg'
import Description from '../../img/description.svg'

const Detail = ({ navigation, route }) => {

    const setCalender = (startDay, endDay) => {
        if (startDay.checked) {
            setItem({ ...item, taskStartDate: startDay.date })
            setDayStart({ date: '', checked: false });
        }
        else {
            setItem({ ...item, taskEndDate: endDay.date })
            setDayEnd({ date: '', checked: false });
        }
    }
    const cancelCalender = () => {
        setDayStart({ ...dayStart, checked: false });
        setDayEnd({ ...dayEnd, checked: false });
    }

    const STATUS = route.params.status == "Completed" ? 2
        : route.params.status == "Not started" ? 1
            : 0;
    const INDEX = route.params.index;

    const [item, setItem] = useState(route.params.item);

    const [dayStart, setDayStart] = useState({
        checked: false,
        date: ''
    });
    const [dayEnd, setDayEnd] = useState({
        checked: false,
        date: ''
    });
    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton
                    onPress={() => {
                        navigation.navigate('Home', {
                            newItem: item,
                            status: STATUS,
                            index: INDEX,
                            delete: false,
                        })
                    }}
                >

                </HeaderBackButton>
            )
        });
    });

    return (
        <View style={style.main}>
            <View style={style.titleContainer}>
                <TextInput
                    autoFocus={false}
                    style={style.title}
                    value={item.taskName}
                    multiline={true}
                    placeholder='Enter task new name'
                    onChangeText={(newName) => {
                        setItem({ ...item, taskName: newName });
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home', {
                        newItem: item,
                        status: STATUS,
                        index: INDEX,
                        delete: true,
                    })}
                >
                    <Delete style={style.icon} width={30} height={30}></Delete>
                </TouchableOpacity>
            </View>
            <View style={[style.card, style.desCard]}>
                <Description style={style.icon} width={30} height={30}></Description>
                <TextInput
                    style={[style.text, { width: '80%' }]} placeholder='Add description'
                    multiline={true}
                    autoFocus={false}
                    value={item.description}
                    onChangeText={(newDescription) => {
                        setItem({ ...item, description: newDescription });
                    }}
                />
            </View>

            <View style={style.card}>
                <TouchableOpacity
                    onPress={() => setDayStart({ checked: true, date: item.taskStartDate })}
                    style={style.cardDate1}
                >
                    <StartDate style={style.icon} width={30} height={30}></StartDate>
                    <Text
                        style={[style.text, style.dateText]}
                    >Start: </Text>
                    <Text
                        style={[style.text, style.dateText]}
                    >{item.taskStartDate}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setDayEnd({ checked: true, date: item.taskEndDate })}
                    style={style.cardDate2}
                >
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
                    numberOfLines={7}
                    multiline={true}
                    style={[style.text, style.note]} placeholder='Add a note'
                    value={item.note}
                    onChangeText={(newNote) => {
                        setItem({ ...item, note: newNote });
                    }}
                />
            </View>

            {
                dayStart.checked || dayEnd.checked
                    ?
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => cancelCalender()}
                        style={style.calenderContainer}>
                        <TouchableOpacity
                            style={style.subContainer}
                            activeOpacity={1}
                        >
                            {
                                dayStart.checked ?
                                    <Calendar
                                        current={dayStart.date}
                                        hideExtraDays={true}
                                        enableSwipeMonths={true}
                                        style={style.calender}
                                        markedDates={{
                                            [dayStart.date]: { selectedColor: '#7eeda8', textColor: 'white', selected: true },
                                        }}
                                        onDayPress={(time) => setDayStart({ checked: true, date: time.dateString })}
                                    />
                                    :
                                    <Calendar
                                        current={dayEnd.date}
                                        hideExtraDays={true}
                                        enableSwipeMonths={true}
                                        style={style.calender}
                                        minDate={item.taskStartDate}
                                        markedDates={{
                                            [dayEnd.date]: { selectedColor: '#7eeda8', textColor: 'white', selected: true }
                                        }}
                                        onDayPress={(time) => setDayEnd({ checked: true, date: time.dateString })}
                                    />
                            }
                            <View style={style.footerCalender}>
                                <TouchableOpacity
                                    onPress={() => cancelCalender()}
                                >
                                    <Text style={style.footerText}>CANCEL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => setCalender(dayStart, dayEnd)}
                                >
                                    <Text style={style.footerText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    : <></>

            }
        </View>
    )
}
export default Detail;