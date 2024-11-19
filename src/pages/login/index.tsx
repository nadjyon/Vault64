import React, { useState } from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/vault.png'
import {MaterialIcons} from '@expo/vector-icons';
import { themes } from "../../global/themes";
import{useNavigation,NavigationProp} from "@react-navigation/native";

export default function Login (){
    const navegation = useNavigation<NavigationProp<any>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,SetLoading] = useState(false)

    async function getLogin(){
        try {
            SetLoading(true)
            
            if (!email || !password){
                return Alert.alert("Atenção", "Informe os campos obrigatórios")
            }

            setTimeout(()=>{ 
                if (email=='email.teste@gmail.com' && password=='123456'){
                
                navegation.navigate("BottomRoutes")
                
                Alert.alert("Logado com sucesso!")
                }else{
                    Alert.alert("Usuario não encontrado!")

                }
                SetLoading(false)
            },2000)


        } catch (error) {
            console.log(error)
        }finally{
            SetLoading(false)
        }
    }



    return (
        <View style={style.container}>
                <View style={style.boxTop}>
                    <Image 
                        source={Logo}
                        style={style.logo}
                        resizeMode='contain'
                    />
                    <Text style={style.text}></Text>
                </View>
                <View style={style.boxMid}>
                    <Text style={style.titleInput}>USUARIO</Text>
                    <View style={style.BoxInput}>
                        <TextInput
                        style={style.input}
                        value= {email}
                        onChangeText={(email)=>setEmail(email) }
                        > 
                        
                        </TextInput>
                        <MaterialIcons
                            name='email'
                            size={20}
                            color={themes.colors.gray}
                        />
                    </View>
                    <Text style={style.titleInput}>SENHA</Text>
                    <View style={style.BoxInput}>
                        <TextInput
                        style={style.input}
                        value= {password}
                        onChangeText={(password)=>setPassword(password)}> 
                        </TextInput>
                        <MaterialIcons
                            name='remove-red-eye'
                            size={20}
                            color={themes.colors.gray}
                        />
                    </View>

                </View>
                <View style={style.boxbottom}>
                    <TouchableOpacity style={style.button}onPress={()=>getLogin()}>
                        {
                            loading?
                            <ActivityIndicator color= {'#FFF'} size={'small'}/>
                            :
                            <Text style={style.textButton}>Entrar</Text>
                        }
                    </TouchableOpacity>

                    <Text style={style.textBotton}>Não tem conta? Crie uma agora!</Text>
                </View>
                
        </View>
    )
}