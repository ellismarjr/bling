import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#121214',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e4e4e4',
    flex: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: 50,
    paddingHorizontal: 10,
  },
  buttonSearch: {
    padding: 10,
    backgroundColor: '#ccc',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#999',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  content: {
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 5,
    marginTop: 20,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c3c3c3',
    padding: 10,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 10,
  },

  contentTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#121214',
  },
  contentItemText: {
    marginLeft: 5,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
  },
  footerItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerTitle: {
    fontWeight: 'bold',
    color: '#121214',
    marginRight: 10,
  },
});
