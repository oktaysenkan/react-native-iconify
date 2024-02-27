import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import { Iconify } from 'react-native-iconify/native';

const data = [
  <Iconify icon="flag:ru-1x1" size={34} />,
  <Iconify icon="flag:by-1x1" size={34} />,
  <Iconify icon="flag:us-1x1" size={34} />,
  <Iconify icon="flag:eu-1x1" size={34} />,
  <Iconify icon="flag:az-1x1" size={34} />,
  <Iconify icon="flag:gb-1x1" size={34} />,
  <Iconify icon="flag:am-1x1" size={34} />,
  <Iconify icon="flag:bg-1x1" size={34} />,
  <Iconify icon="flag:pl-1x1" size={34} />,
  <Iconify icon="flag:cn-1x1" size={34} />,
  <Iconify icon="flag:au-1x1" size={34} />,
  <Iconify icon="flag:br-1x1" size={34} />,
  <Iconify icon="flag:hu-1x1" size={34} />,
  <Iconify icon="flag:vn-1x1" size={34} />,
  <Iconify icon="flag:hk-1x1" size={34} />,
  <Iconify icon="flag:ge-1x1" size={34} />,
  <Iconify icon="flag:dk-1x1" size={34} />,
  <Iconify icon="flag:ae-1x1" size={34} />,
  <Iconify icon="flag:eg-1x1" size={34} />,
  <Iconify icon="flag:in-1x1" size={34} />,
  <Iconify icon="flag:id-1x1" size={34} />,
  <Iconify icon="flag:kz-1x1" size={34} />,
  <Iconify icon="flag:ca-1x1" size={34} />,
  <Iconify icon="flag:qa-1x1" size={34} />,
  <Iconify icon="flag:kr-1x1" size={34} />,
  <Iconify icon="flag:md-1x1" size={34} />,
  <Iconify icon="flag:nz-1x1" size={34} />,
  <Iconify icon="flag:no-1x1" size={34} />,
  <Iconify icon="flag:sd-1x1" size={34} />,
  <Iconify icon="flag:sg-1x1" size={34} />,
  <Iconify icon="flag:tj-1x1" size={34} />,
  <Iconify icon="flag:th-1x1" size={34} />,
  <Iconify icon="flag:tr-1x1" size={34} />,
  <Iconify icon="flag:tm-1x1" size={34} />,
  <Iconify icon="flag:uz-1x1" size={34} />,
  <Iconify icon="flag:ua-1x1" size={34} />,
  <Iconify icon="flag:cz-1x1" size={34} />,
  <Iconify icon="flag:se-1x1" size={34} />,
  <Iconify icon="flag:ch-1x1" size={34} />,
  <Iconify icon="flag:rs-1x1" size={34} />,
  <Iconify icon="flag:za-1x1" size={34} />,
  <Iconify icon="flag:jp-1x1" size={34} />,
  <Iconify icon="flag:kg-1x1" size={34} />,
];

const renderItem = ({ item }) => <View style={styles.item}>{item}</View>;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 60,
    marginHorizontal: 10,
  },
});
