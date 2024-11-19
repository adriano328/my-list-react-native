import React, { createContext, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, Alert } from "react-native";
import Modalize from "react-native-modalize";
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Input } from "../components/input";
import { themes } from "../global/themes";
import { Flag } from "../components/flag";
import CustomDateTimerPicker from "../components/CustomDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any): any => {
    const modalizeRef = useRef<Modalize>(null);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFlag, setSelectedFlag] = useState('urgente');
    const [selectedDate, setselectedDate] = useState(new Date());
    const [selectedTime, setselectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimerPicker] = useState(false);
    const [item, setItem] = useState(0);
    const [taskList, setTaskList] = useState([]);

    const onOpen = () => {
        modalizeRef?.current?.open();
    }

    const onClose = () => {
        modalizeRef?.current?.close();
    }

    const setData = () => {
        setTitle(''),
        setDescription('')
        setSelectedFlag('Urgente'),
        setselectedDate(new Date())
        setselectedTime(new Date())
        setItem(0)
    }

    useEffect(() => {
        get_TaskList()
    }, [])

    const flags = [
        { caption: 'Urgente', color: themes.colors.red },
        { caption: 'Opcional', color: themes.colors.blueLigth },
    ]

    const _renderFlags = () => {
        return (
            flags.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => {
                    setSelectedFlag(item.caption)
                }}>
                    <Flag caption={item.caption} color={item.color}
                        selected={item.caption == selectedFlag} />
                </TouchableOpacity>
            )))
    }

    const handleDateChange = (date: Date) => {
        setselectedDate(date);
    };

    const handleTimeChange = (date: Date) => {
        setselectedTime(date);
    };

    const handleSave = async () => {
        if(!title || !description || !selectedFlag) {
            return Alert.alert('Atenção!','Preencha os campos corretamente.')
        }
        try {
            const newItem = {
                item: Date.now(),
                title,
                description,
                flag: selectedFlag,
                timeLimit: new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth(),
                    selectedDate.getDate(),
                    selectedDate.getHours(),
                    selectedDate.getMinutes(),
                ).toISOString()
            }

            const storageData = await AsyncStorage.getItem('taskList');
            let taskList = storageData ? JSON.parse(storageData) : [];
            taskList.push(newItem)
            await AsyncStorage.setItem('taskList', JSON.stringify(taskList))
            setTaskList(taskList)
            setData()
            onClose()
        } catch (error) {
            console.log('Erro ao salvar o item', error)
        }
    }

    async function get_TaskList() {
        try {
            const storageData = await AsyncStorage.getItem('taskList');
            const  taskList = storageData ? JSON.parse(storageData) : [];
            setTaskList(taskList)
        } catch (error) {
            console.log(error);
            
        }
    }

    const _container = () => {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => onClose()}>
                            <MaterialIcons name="close" size={30} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Criar Tarefa</Text>
                        <TouchableOpacity onPress={() => handleSave()}>
                            <AntDesign name="check" size={30}></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>

                        <Input title="Titulo" labelStyle={styles.label} value={title} onChangeText={setTitle} />
                        <Input title="Descrição" labelStyle={styles.label} height={100} multiline
                            numberOfLines={5} value={description} onChangeText={setDescription} textAlignVertical="top" />
                        <View style={{ flexDirection: 'row', gap: 10, width: '100%' }}>
                            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ width: 200 }}>
                                <Input
                                    title="Data Limite"
                                    labelStyle={styles.label}
                                    editable={false}
                                    value={selectedDate.toLocaleDateString()}
                                    onPress={() => setShowDatePicker(true)}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 120 }} onPress={() => setShowTimerPicker(true)}>
                                <Input
                                    title="Hora Limite"
                                    labelStyle={styles.label}
                                    editable={false}
                                    value={selectedTime.toLocaleTimeString()}
                                    onPress={() => setShowTimerPicker(true)}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '40%' }}>
                            <CustomDateTimerPicker onDateChange={handleDateChange} setShow={setShowDatePicker} show={showDatePicker} type={'date'} />
                            <CustomDateTimerPicker onDateChange={handleTimeChange} setShow={setShowTimerPicker} show={showTimePicker} type={'time'} />
                        </View>
                        <View style={styles.containerFlag}>
                            <Text style={styles.label}>Flags:</Text>
                            <View style={styles.Rowflags}>
                                {_renderFlags()}
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

    return (
        <AuthContextList.Provider value={{ onOpen, taskList }}>
            {props.children}
            <Modalize
                ref={modalizeRef}
                {...({ modalHeight: Dimensions.get('window').height / 1.3 } as any)}
                adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>
        </AuthContextList.Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    header: {
        width: '100%',
        height: 40,
        paddingHorizontal: 40,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    content: {
        width: '100%',
        padding: 20
    },
    containerFlag: {
        width: '100%',
    },
    label: {
        fontWeight: 'bold',
        color: '#000'
    },
    Rowflags: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    }
})