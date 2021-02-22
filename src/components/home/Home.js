import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, SectionList, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import FloatingButton from '../../img/plus.svg'
import style from './Home.style'
import MyCheckBox from './child/Checkbox'
import Confirm from '../../img/up-arrow.svg'
import { set } from 'react-native-reanimated';

const dummyTask = [
    {
        status: 'On progress',
        data: [
            {
                taskName: 'Web Programming Homework',
                taskStartDate: '2021-01-27',
                taskEndDate: '2021-01-28',
            },
            {
                taskName: 'Review Database SQL',
                taskStartDate: '2021-01-27',
                taskEndDate: '2021-01-28',
            },
            {
                taskName: 'Complete Todo Application',
                taskStartDate: '2021-01-27',
                taskEndDate: '2021-02-01',
            },
        ]
    },
    {
        status: 'Not started',
        data: [
            {
                taskName: 'Something haven\'t started',
                taskStartDate: '2021-03-05',
                taskEndDate: '2021-03-09',
            },
            {
                taskName: 'Temp',
                taskStartDate: '2022-01-01',
                taskEndDate: '2022-02-01',
            },
        ]
    },
    {
        status: 'Completed',
        data: [
            {
                taskName: 'Something done',
                taskStartDate: '2021-01-27',
                taskEndDate: '2021-01-28',
            },
            {
                taskName: '??????',
                taskStartDate: '2021-01-27',
                taskEndDate: '2021-02-01',
            },
        ]
    },

];



const formatDate = (date) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    var newDate = yyyy + '-' + mm + '-' + dd;
    return newDate;
}

const defaultNewTask = {
    taskName: '',
    taskStartDate: formatDate(new Date()),
    taskEndDate: formatDate(new Date()),
}

const Home = () => {
    const [tasks, setTasks] = useState(dummyTask);
    const [isCreateTask, setIsCreateTask] = useState(false);
    const [newTaskData, setNewTaskData] = useState(defaultNewTask);

    const [isChooseDayStart, setIsChooseDayStart] = useState({
        checked: false,
        date: '',
    });
    const [isChooseDayEnd, setIsChooseDayEnd] = useState({
        checked: false,
        date: '',
    });

    const handleCheckboxes = (status, id) => {
        let index = status == 'Completed' ? 1 : 0;
        switch (status) {
            case ('On progress'): index = 0; break;
            case ('Not started'): index = 1; break;
            case ('Completed'): index = 2; break;
        }
        let object = tasks[index].data[id];
        if (index == 1) object.taskStartDate = formatDate(new Date());
        let newIndex = index ? 0 : 2;

        let newTasks = JSON.parse(JSON.stringify(tasks));


        newTasks[newIndex].data.unshift(object);
        newTasks[index].data = tasks[index].data.filter(
            item => JSON.stringify(item.taskName) != JSON.stringify(object.taskName)
        );
        setTasks(newTasks);
    }

    const addNewTask = () => {
        let newTasks = JSON.parse(JSON.stringify(tasks));
        newTasks[1].data.push({
            taskName: [newTaskData.taskName],
            taskStartDate: [newTaskData.taskStartDate],
            taskEndDate: [newTaskData.taskEndDate],
        });
        setTasks(newTasks);
        setNewTaskData(defaultNewTask);
        setIsCreateTask(false);
    }

    const setCalender = (StartDay, EndDay) => {
        if (StartDay.checked) {
            setNewTaskData({
                ...newTaskData,
                taskStartDate: StartDay.date
            });
            setIsChooseDayStart({ ...isChooseDayStart, checked: false });
        }
        else {
            setNewTaskData({
                ...newTaskData,
                taskEndDate: EndDay.date
            });
            setIsChooseDayEnd({ ...isChooseDayEnd, checked: false });
        }
    }
    const cancelCalender = () => {
        setIsChooseDayStart({ ...isChooseDayStart, checked: false });
        setIsChooseDayEnd({ ...isChooseDayEnd, checked: false });
    }
    return (
        <View
            style={{ flex: 1 }}
        >
            <View style={style.main}>
                <SectionList
                    sections={tasks}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index, section }) => (
                        <TouchableOpacity
                            style = {[
                                style.card, 
                                section.status == 'Completed' ? style.completeCard
                                : section.status == 'On progress' ? style.doingCard
                                : style.notStartCard
                            ]}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    handleCheckboxes(
                                        section.status,
                                        index
                                    )
                                }}
                            >
                                <MyCheckBox isCheck=
                                    {section.status == "Completed" ? true : false}
                                />
                            </TouchableOpacity>
                            <View 
                                style={style.cardData}
                            >
                                <Text
                                    style={section.status == 'Completed'
                                        ? [style.cardHeading, style.completedHeading]
                                        : style.cardHeading}
                                >
                                    {item.taskName}</Text>
                                <View style = {style.row}>
                                <Text style={style.cardDate}>Deadline: {item.taskEndDate}</Text>
                                {
                                    Date.parse(item.taskEndDate) < Date.parse(formatDate(new Date())) && section.status == 'On progress'
                                    ? <Text style = {style.overdue}> !Overdue</Text>
                                    : <></>
                                }
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    renderSectionHeader={({section}) => (
                        section.data.length ?
                        <View style={style.sectionContainer}>
                            <Text style={style.section}>{section.status}</Text>
                        </View>
                        :
                        <></>
                    )}

                />
            </View>

            {
                isCreateTask
                    ? <View style={style.newTaskContainer}>
                        <View style={style.row}>
                            <MyCheckBox />

                            <TextInput
                                style={{ width: '80%' }}
                                placeholder='Add a task'
                                value={newTaskData.taskName}
                                autoFocus={true}
                                onChangeText={newText => setNewTaskData({
                                    ...newTaskData,
                                    taskName: newText
                                })}
                            />

                            <TouchableOpacity
                                style={style.confirmNewTask}
                                onPress={() => {
                                    if (newTaskData.taskName != '')
                                        addNewTask();
                                }}
                            >
                                <Confirm width={30} height={30} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <View style={[style.row, {paddingBottom: 8}]}>
                                <Text>Start date:  </Text>
                                <TouchableOpacity
                                    style={style.chooseDate}
                                    onPress={() => {
                                        setIsChooseDayStart({ checked: true, date: newTaskData.taskStartDate });
                                    }}
                                >
                                    <Text>
                                        {newTaskData.taskStartDate}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View>
                            <View style={style.row}>
                                <Text>End date:  </Text>
                                <TouchableOpacity
                                    style={style.chooseDate}
                                    onPress={() => {
                                        setIsChooseDayEnd({ checked: true, date: newTaskData.taskEndDate });
                                    }}
                                >
                                    <Text>
                                        {newTaskData.taskEndDate}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    : <TouchableOpacity
                        onPress={() => {
                            setIsCreateTask(true);
                            setIsChooseDayStart({ checked: false, date: new Date() });
                            setIsChooseDayEnd({ checked: false, date: new Date() });
                        }}
                        style={style.floatingButton}
                    >

                        <FloatingButton width={70} height={60}></FloatingButton>

                    </TouchableOpacity>
            }
            {
                isChooseDayStart.checked || isChooseDayEnd.checked
                    ?
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => cancelCalender()}
                        style={style.calenderContainer}>
                        <TouchableOpacity
                            style={style.subContainer}
                            activeOpacity={1}
                        >
                            <Calendar
                                hideExtraDays={true}
                                enableSwipeMonths={true}
                                style={style.calender}
                                minDate={isChooseDayStart.checked ? Date() : newTaskData.taskStartDate}
                                markedDates={{
                                    [isChooseDayStart.date]: { selectedColor: '#7eeda8', textColor: 'white', selected: true },
                                    [isChooseDayEnd.date]: { selectedColor: '#7eeda8', textColor: 'white', selected: true }
                                }}
                                onDayPress={(time) => {
                                    isChooseDayStart.checked
                                        ? setIsChooseDayStart({ checked: true, date: time.dateString })
                                        : setIsChooseDayEnd({ checked: true, date: time.dateString })
                                }}
                            />
                            <View style={style.footerCalender}>
                                <TouchableOpacity
                                    onPress={() => cancelCalender()}
                                >
                                    <Text style={style.footerText}>CANCEL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => setCalender(isChooseDayStart, isChooseDayEnd)}
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
export default Home;