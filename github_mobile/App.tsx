import React from 'react';

import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados do repositório</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar pelo repositório"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="dark"
        />
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.contentItem}>
          <Text style={styles.contentTitle}>ID:</Text>
          <Text style={styles.contentItemText}>23088740</Text>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentTitle}>Name:</Text>
          <Text style={styles.contentItemText}>23088740</Text>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentTitle}>Fullname:</Text>
          <Text style={styles.contentItemText}>23088740</Text>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.contentTitle}>Owner:</Text>
          <Image
            style={styles.image}
            source={{uri: 'https://github.com/ellismarjr.png'}}
          />
          <Text style={styles.contentItemText}>23088740</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Text style={styles.footerTitle}>23088740</Text>
            <Feather name="star" size={16} color="#333" />
          </View>
          <View style={styles.footerItem}>
            <Text style={styles.footerTitle}>23088740</Text>
            <Entypo name="flow-branch" size={16} color="#333" />
          </View>
        </View>
      </View>
    </View>
  );
}
