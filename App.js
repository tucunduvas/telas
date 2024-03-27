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
            <text style={{color: 'blue', fontSize:30, margin:15}}> meu exemplo! </text>  {/* nao precisa por px na formatacao, se por da erro*/}

            <Image source={{URL: 'url aqui'}}style={{width:300, heigth: 300}}/>
            <Text> {curso}</Text>
        </View>    
            )
}

}
 //extends pega todas as caracteristicas da classe component
class App extends Component{
    <Image source={{'url: coloca a url aqui'}} style={{width:300, height:300}}/> 
    {/* uri é o caminho da iamgem, se for por o libnk da internet tem que por com https */}
    {/* Image é obrigado a informar a largura e altura */}
    <Text> {Curso}</Text>

    {/* para chamar o componente */}
    {/* <MinhaImagem/>  */}
    {/* <MinhaImagem largura={400} altura{400} nome= "Imagem 1"/> */} {/*<- EXEMPLO DE PROPRIEDADE */}
       
    </View> 

};

export default App;

    class MinhaImagem extends Component{
        render(){
            let img = 'url da imagem';
            return(
                <View>
                    {/* <Image source={{url: img}} style={{width:300, height:300}}/>  COMENTEI PQ É IGUAL A DE BAIXO*/}
                    <Image source={{uri: img}} style={{width: this.props.largura, height:this.props.altura}}> </Image> 
{/* PASSA PROPRIEDADE DE UMA CLASSE PARA OUTRA                             */}
                    <Text> {this.props.nome}</Text>
                </View>
            );
        }
    }

    
