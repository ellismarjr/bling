/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
  Keyboard,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './styles';
import {api} from './src/services/api';

interface Repo {
  id: string;
  name: string;
  fullname: string;
  owner: number;
  stars: number;
  forks: string;
  avatar_url: string;
}

export default function App() {
  const [repoToSearch, setRepoToSearch] = useState('');
  const [repoInfos, setRepoInfos] = useState<Repo>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleGetRepo() {
    setIsLoading(true);
    try {
      const response = await api.get(`${repoToSearch}`);

      const repo: Repo = {
        id: response.data.id,
        name: response.data.name,
        fullname: response.data.full_name,
        owner: response.data.owner.login,
        stars: response.data.stargazers_count,
        forks: response.data.forks,
        avatar_url: response.data.owner.avatar_url,
      };
      setRepoInfos(repo);
      setIsLoading(false);

      Keyboard.dismiss();
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Erro na busca', 'Repositório não encontrado');
    }
  }

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
          onChangeText={text => setRepoToSearch(text)}
          value={repoToSearch}
        />
        <TouchableOpacity
          onPress={handleGetRepo}
          activeOpacity={0.8}
          style={repoToSearch ? styles.button : styles.buttonSearch}
          disabled={!repoToSearch}>
          <Text>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      {isLoading && <ActivityIndicator size={50} style={{marginTop: 50}} />}

      {repoInfos && !isLoading && (
        <View style={styles.content}>
          <View style={styles.contentItem}>
            <Text style={styles.contentTitle}>ID:</Text>
            <Text style={styles.contentItemText}>{repoInfos?.id}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentTitle}>Name:</Text>
            <Text style={styles.contentItemText}>{repoInfos?.name}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentTitle}>Fullname:</Text>
            <Text style={styles.contentItemText}>{repoInfos?.fullname}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.contentTitle}>Owner:</Text>
            <Image style={styles.image} source={{uri: repoInfos?.avatar_url}} />
            <Text style={styles.contentItemText}>{repoInfos?.fullname}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerItem}>
              <Text style={styles.footerTitle}>{repoInfos?.stars}</Text>
              <Feather name="star" size={16} color="#333" />
            </View>
            <View style={styles.footerItem}>
              <Text style={styles.footerTitle}>{repoInfos?.forks}</Text>
              <Entypo name="flow-branch" size={16} color="#333" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
