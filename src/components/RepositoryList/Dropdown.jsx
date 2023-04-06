import React, { useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Divider, Menu } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import theme from '../../theme';
import BodyText from '../BodyText';

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: theme.colors.backdrop,
    position: "absolute",
    left: 0,
    right: 0,
    height,
  },
  dropdown: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 30,
    flex: 1,
  },
  menu: {
    width: "75%",
    top: "45%",
    left: "12.5%",
    transform: [{ translateY: -50 }],
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 50,
    marginRight: 15,
    marginLeft: 5,
  },
});

const Dropdown = ({ onPress, sort }) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  return (
    <>
      {visible && <View style={styles.backdrop} />}
      <View style={styles.dropdown}>
        <Menu
          style={styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity style={styles.btn} onPress={openMenu}>
              <BodyText color={theme.colors.textPrimary}>
                {sort ? sort : "Latest repositories"}
              </BodyText>
              <AntDesign
                name="caretdown"
                size={theme.fontSizes.body}
                color={theme.colors.textPrimary}
              />
            </TouchableOpacity>
          }
        >
          <Menu.Item disabled={true} title="Sort by:" />
          <Divider />
          <Menu.Item
            style={styles.menuItem}
            onPress={(e) =>
              onPress(
                e._dispatchInstances.memoizedProps.children[0].props.children[1]
                  .props.children.props.children
              )
            }
            title="Latest repositories"
          />
          <Menu.Item
            onPress={(e) =>
              onPress(
                e._dispatchInstances.memoizedProps.children[0].props.children[1]
                  .props.children.props.children
              )
            }
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={(e) =>
              onPress(
                e._dispatchInstances.memoizedProps.children[0].props.children[1]
                  .props.children.props.children
              )
            }
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
    </>
  );
}

export default Dropdown