import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { AuthContextList } from '../../context/authContext_list';

interface Props {
  state: any; 
  navigation: any; 
}

const TabBar: React.FC<Props> = ({ state, navigation }) => {

    const {onOpen} = useContext<any>(AuthContextList)

    const go = (ScreenName: string) => {
        navigation.navigate(ScreenName)
    }

    return (
    <View style={styles.tabArea}>
      <TouchableOpacity style={styles.tabItem} onPress={() => go("List")}>
        <AntDesign name="bars" style={{ opacity: state.index == 0 ? 1 : 0.3, color: themes.colors.primary, fontSize: 32 }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItemButton} onPress={() => onOpen()}>
       <View style={{width: '100%', left: 10, top: 4, }}>
        <Entypo name="plus" size={40} color={"#ffff"}></Entypo>
       </View>
       <View style={{flexDirection: 'row-reverse', width: '100%', right: 10, bottom: 10}}>
        <MaterialIcons name='edit' style={{color:'#ffff'}} size={30}>
        </MaterialIcons>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => go("User")}>
        <FontAwesome name="user" style={{ opacity: state.index == 1 ? 1 : 0.3, color: themes.colors.primary, fontSize: 32 }} />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
