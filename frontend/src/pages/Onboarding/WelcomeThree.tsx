import React from "react";
import { Text, View, StyleSheet, Image, Alert } from "react-native";
import ImageComponent from "../../components/common/Image";
import ButtonComponent from "../../components/common/Button";
import TextComponent from "../../components/common/Text";
import WelcomeFirts from "../../components/specific/Onboarding/WelcomeFirst";
import Icon from 'react-native-vector-icons/FontAwesome'

export default function WelcomeThree({navigation}){


    function handlePass(){
        navigation.navigate('/auth')
    }

    function handkeNext(){
        navigation.navigate('/auth')
    }


    return(
        
        <View style={styles.container}>
            <ButtonComponent onPress={handlePass} style={styles.passContain}>
                <TextComponent style={styles.pass}>Passer</TextComponent>
            </ButtonComponent>
            <View style={styles.content}>
                <WelcomeFirts 
                    source={require('../../assets/images/welcome.png')}
                    children={'Encadrement'}
                    children1={'Personalisé'}
                    children2={'Trouve l\'encadreur idéal pour'}
                    children3={'t\'accompagner dans ta réussite scolaire.'}
                />
                <View style={styles.div}>
                    <View style={styles.divSub2}></View>
                    <View style={styles.divSub2}></View>
                    <View style={styles.divSub}></View>
                </View>

                <ButtonComponent onPress={handkeNext} style={styles.nextContain}>
                    <TextComponent style={styles.next}>C'est parti !</TextComponent>
                    <Icon name='arrow-right' color='white' size={15}/>

                </ButtonComponent>
            
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15
  },
  img:{
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  imageContain:{
    width: 350,
    height: 400,
    backgroundColor: '#b5a0ff52',
  },
  pass:{
    color: '#287bf8ff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  paraContain:{
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  bienv:{
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1
  },
  bienvCont:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  bienvSub:{
    fontSize: 15,
    color: 'gray',
    fontWeight: 'semibold',
    letterSpacing: 1
  },
  div:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6
  },
  divSub:{
    backgroundColor: '#287bf8ff',
    height: 8,
    width: 20,
    borderRadius: 14
  },
  divSub2:{
    backgroundColor: '#e7e7e7ff',
    height: 8,
    width: 8,
    borderRadius: 4
  },
  nextContain:{
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#287bf8ff',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10
  },
  next:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  content:{
    justifyContent: 'center',
    gap: 30,
    // paddingHorizontal: 15,
    // backgroundColor: 'black'
  },
  passContain:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  }
});