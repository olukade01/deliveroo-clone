import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const catContent = [
  { imgUrl: 'https://links.papareact.com/gn7', title: 'this' },
  { imgUrl: 'https://links.papareact.com/gn7', title: 'is' },
  { imgUrl: 'https://links.papareact.com/gn7', title: 'boyy' },
];

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      showsHorizontalScrollIndicator={false}
    >
      {catContent.map((item) => (
        <CategoryCard key={item.title} {...item} />
      ))}
    </ScrollView>
  );
};

export default Categories;
