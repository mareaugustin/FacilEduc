import React, {useState} from "react";
import { View , StyleSheet, Text, TouchableOpacity} from "react-native";
import TextComponent from "../../components/common/Text";
import ButtonComponent from "../../components/common/Button";
import Icone from "../../components/common/Icone";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Statut({navigation}){

    const [statut, setStatut] = useState('')
    const [choixEleve, setChoixEleve] = useState(false)
    const [choixPrest, setChoixPrest] = useState(false)
    // const [active, setActive] = useState(false)



    async function handleEleve(){
        if(choixPrest){
            setChoixPrest(false)
            setChoixEleve(true)
            AsyncStorage.setItem('statut-el', 'eleve')

            return
            
        }else{
            setChoixEleve(!choixEleve)
            AsyncStorage.setItem('statut-el', 'eleve')
            return
            
        }
    }

    function handlePrestataire(){
        if(choixEleve){
            setChoixEleve(false)
            setChoixPrest(true)
            AsyncStorage.setItem('statut-prest', 'prestataire')
            return
            
        }else{
            setChoixPrest(!choixPrest)
            AsyncStorage.setItem('statut-prest', 'prestataire')
            return
            
        }
        
    }



    // const data = AsyncStorage.getItem('statut-el')
    
    //     console.log('statut-el', data)
    

    // const data2 = AsyncStorage.getItem('statut-prest')
    // if(data2){
    //     console.log('statut-prest', data2)
    // }

    function handleNext({navigation}){
        navigation.navigate('/login')
    }

    return(
        <View style={styles.statContain}>
            <View style={styles.choixContain}>
                <TextComponent style={styles.label}>Commencez par définir votre statut !</TextComponent>
                
            </View>
            <View>

                <TextComponent style={styles.label1}>Je suis</TextComponent>
            </View>
            <View style={styles.statusContent}>
                <TouchableOpacity  activeOpacity={0.8} onPress={handleEleve} 
                    style={
                        [
                            styles.eleveContain, 
                            // {
                            //     boxShadow: `${choixEleve || choixPrest ? '0 0 10px 0' : null}`, 
                            //     // borderWidth: 2, 
                            //     borderColor: `${choixEleve || choixPrest ? 'blue' : ''}`
                            // }
                        ]
                    }
                >
                    <View style={styles.icon}>
                        <Icone nom={'user'} couleur={'blue'} taille={30}/>
                    </View>
                    <TextComponent style={styles.ele}>Elève</TextComponent>
                    <TextComponent style={styles.eleSub}>Consultatez vos cours, jouez aux quiz,</TextComponent>
                    <TextComponent style={styles.eleSub}>et rechercher des prestataires</TextComponent>
                    {choixEleve && (
                        <View style={styles.check}>
                            <Icone nom={'check-circle'} couleur={'blue'} taille={40}/>
                        </View>
                    )}
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.8} onPress={handlePrestataire}
                    style={
                        [
                            styles.eleveContain, 
                            // {
                            //     boxShadow: `${choixEleve || choixPrest ? '0 0 10px 0' : null}`, 
                            //     // borderWidth: 2, 
                            //     borderColor: `${choixEleve || choixPrest ? 'blue' : ''}`
                            // }
                        ]
                    }
                >
                    <View style={styles.icon}>
                        <Icone nom={'briefcase'} couleur={'blue'} taille={30}/>
                    </View>
                    <TextComponent style={styles.ele}>Prestataire</TextComponent>
                    <TextComponent style={styles.eleSub}>Proposer vos services en tant</TextComponent>
                    <TextComponent style={styles.eleSub}>qu'encadreurs.</TextComponent>
                    {choixPrest && (
                        <View style={styles.check}>
                            <Icone nom={'check-circle'} couleur={'blue'} taille={40}/>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                activeOpacity={0.7}
                disabled={!choixEleve && !choixPrest} 
                style={[styles.nextContain, {backgroundColor: `${choixEleve || choixPrest ? '#287bf8ff' : '#a6c9ffff'}`}]}
             >
               <TextComponent style={styles.next}>Enregistrer et Continuer</TextComponent>
                <Icone nom='arrow-right' couleur='white' taille={15}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    nextContain:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 5,
        width: '70%',
    },
    next:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    icon:{
        backgroundColor: '#c3c3ffff',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    ele:{
        fontWeight: 'bold',
        fontSize: 20
    },
    eleSub:{
        color: 'gray'
    },
    statContain:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 100,
        backgroundColor: '#fff',
        // paddingHorizontal: 15
    },
    choixContain:{
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    label:{
        fontSize: 18
    },
    label1:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    statusContent:{
        alignItems:'center',
        justifyContent: 'center',
        gap: 25,
        height: '70%',
        width: '70%',
        position: 'relative'
    },
    check:{
        position: 'absolute',
        top: 8,
        right : 8
    },
    eleveContain:{
        backgroundColor: '#e7e7e7ff',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5%',
        gap: 10,
        elevation: 6,
        
    },
    eleveContainAcitve:{
        boxShadow: '0 0 10px 0px',
        borderWidth: 2,
        borderColor: 'blue'
    }
})