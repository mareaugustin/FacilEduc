import React from "react";
import { View, StyleSheet } from "react-native";
import ImageComponent from "../../common/Image";
import TextComponent from "../../common/Text";


export default function WelcomeFirts({children, children1, children2, children3, source}){
    return(
        <>
            <View style={styles.imageContain}>
                <ImageComponent source={source}  style={styles.img}/>
            </View>
            <View style={styles.paraContain}>
                <View style={styles.bienvCont}>
                    <TextComponent style={styles.bienv}>{children}</TextComponent>
                    <TextComponent style={styles.bienv}>{children1}</TextComponent>
                </View>
                <View style={styles.bienvCont}>
                    <TextComponent style={styles.bienvSub}>{children2}</TextComponent>
                    <TextComponent style={styles.bienvSub}>{children3}</TextComponent>
                </View>
            </View>
        </>
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