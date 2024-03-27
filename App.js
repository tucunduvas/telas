//tava app.tsx 
//trocou para app.js
// apagou tudo 

// import React from "react";
// import {View, Text} from "react-native";

// function App(){
//   return(

//      <View>
//            <Text> Oir Mundo! </Text>
//      </View> // view é uma tela ou um fragmento da tela

//   );
// }

// // //Depois de criar tenho que colocar o export 

// export default App; //poderia por antes da function 
// export indica qual funcao sera executada 
//todos os elementos tem que dar import 
//toda funcao te que ter um return 

// https://snack.expo.dev user: tucunduvas 

// ctrl kc comenta tudo
//ctrl ; descomenta

////////////////////////////////////////////////////

// ou pode fazer em forma de classe

//a funcao render mostra na tela 
// quando é classe precisa do render quando é funcao usa o return 

import React, {Component} from "react";
import {View, Text, Image} from "react-native";

class App extends Component{
    render(){

        let curso = 'INFO';

    return(
        <View>
            <Text> Olá Mundo! </Text>
            <Text> Exemplo! </Text>
            <text style={{color: 'blue', fontSize:30, margin:15}}> meu exemplo! </text>

            <Image source={{URL: 'url aqui'}}style={{width:300, heigth: 300}}/>
            <Text> {curso}</Text>
        </View>    
            )
}

}

class App extends Component{
    <Image source={{'url: coloca a url aqui'}} style={{width:300, height:300}}/>
    {/* Image é obrigado a informar a largura e altura */}
    <Text> {Curso}</Text>

    {/* para chamar o componente */}
    {/* <MinhaImagem> }
}