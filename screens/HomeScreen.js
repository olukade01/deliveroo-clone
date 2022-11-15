import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { useLayoutEffect } from 'react';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const featuredArr = [
  { id: '11', title: 'this', desc: 'you' },
  { id: '14', title: 'is', desc: 'are' },
  { id: '12', title: 'boyy', desc: 'welcome' },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 p-3 bg-gray-200">
          <MagnifyingGlassIcon size={20} color="gra  y" />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {featuredArr.map((item) => (
          <FeaturedRow key={item.id} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
