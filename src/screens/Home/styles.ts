import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 22
  },
  input: {
    width: '100%',
    height: 150,
    fontSize: 16,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#3CB371',
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 7
  },
  form: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#999',
    padding: 16
  }
})