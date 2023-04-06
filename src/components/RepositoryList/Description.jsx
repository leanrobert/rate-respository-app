import React from 'react'
import { StyleSheet, View } from 'react-native'
import Subheading from '../Subheading'
import BodyText from '../BodyText'
import theme from '../../theme';

const styles = StyleSheet.create({
  descriptionContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexShrink: 1,
    paddingLeft: 20,
  },
  subheading: {
    lineHeight: 26,
  },
  description: {
    lineHeight: 26,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 7,
    borderRadius: 7,
    marginTop: 5,
  },
});

const Description = ({ fullName, description, language }) => {
  return (
    <View style={styles.descriptionContainer}>
      <Subheading style={styles.subheading} color="textPrimary" testID="fullname">{fullName}</Subheading>
      <BodyText style={styles.description} color="textSecondary" testID="description">{description}</BodyText>
      <View style={styles.language}>
        <BodyText color="textLight" testID="language">{language}</BodyText>
      </View>
    </View>
  )
}

export default Description