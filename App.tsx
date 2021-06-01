import React from 'react';
import AppLoading from 'expo-app-loading'; //Biblioteca que trava o carregamento da tela até que a função desejada seja totalmente carregada
import Routes from './src/routes';
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost' //Biblioteca que carrega as fontes disponíveis no portfólio do GoogleFonts

export default function App() {
  //Construtor para carregar as fontes que eu quero
  const [fontsloaded] = useFonts({Jost_400Regular, Jost_600SemiBold})

  //Se o contrutor ainda não estiver com as fontes carrega a função da biblioteca expo-app-loading
  if(!fontsloaded){
    return (
      <AppLoading />
    )
  }

  //Página que deve ser carregada após o carregamento das fontes. No caso é a navegação
  return ( 
   <Routes />
  );
}
