import { View } from 'react-native';

import { Copyright } from '../Copyright';

import { styles } from './styles';
import { theme } from '../../theme';

export function Options() {

  return (
    <View style={styles.container}>
      <Copyright />
    </View>
  )
}
