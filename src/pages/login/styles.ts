import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";



export const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    boxTop: {
        height:Dimensions.get('window').height/2,
        width:'100%',
        backgroundColor:'#5183B6', //background em cima
        alignItems:'center',
        justifyContent:'center'

    },
    boxMid: {
        height:Dimensions.get('window').height/4,
        width:'100%',
        backgroundColor:'#5183B6', //background em meio
        paddingHorizontal:37
    },
    boxbottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'#5183B6', //background em baixo
        alignItems:'center',
        //justifyContent:'center'
    },
    logo: {
        width:200,
        height:200,
        marginTop: 150
    },
    text: {
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },
    titleInput:{
        marginLeft:5,
        color: "#FDCF3D", // cor de "usuario" e "senha"
        marginTop:20
    },
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:"#FCFBF4", //barra de usuario e senha
        borderColor:"#FDCF3D" //borda de usuario e senha
    },
    input:{
        height:'100%',
        width:'90%',
        //backgroundColor: 'red',
        borderRadius:40,
        paddingLeft:5
    },
    button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#FDCF3D", //cor do botao "entrar"
        borderRadius:40,
        shadowColor:"#000",
        shadowOffset: {
            width:0,
            height:3,
        },
        shadowOpacity:0.29,
        shadowRadius: 4.65,
        elevation:7,
    },
    textButton:{
        fontSize:16,
        color:'#5F6161', //cor do texto "entrar"
        fontWeight:'bold'
    },
    textBotton:{
        alignItems:'center',
        justifyContent:'center',
       fontSize:16,
       color:"#FDCF3D", //cor do cadastra-se
       marginTop: 30
       
    }
})