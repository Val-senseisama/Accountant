import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images';
import data from '../../constants/data.json'
import TransactionCard from '../../components/TransactionCard';
import { router } from 'expo-router';
import Chart from '../../components/Chart';

function home() {
  return (
    <SafeAreaView>
      <View className="h-screen w-full flex flex=1 items-center bg-primary">
        <View className="w-full px-5">
          <Image
            source={images.ab}
            resizeMode="contain"
            className="w-[80%] mx-auto my-1 h-[80px]"
          />
        </View>

        <View className="w-full px-4 bg-[#f2f2f2] py-2">
          <Text className=" text-base font-psemibold">Hello User,</Text>
          <Text className=" text-2xl font-psemibold">Your Finances</Text>
        </View>

        <View className='w-full'>
          <Chart data={data} />
        </View>

        <View className="bg-[#f2f2f2] w-full rounded-t-xl rounded-r-xl p-4 m-2 h-[50vh] pb-6 mb-6 flex-1">
          <FlatList
            className="min-w-[90%] mt-2"
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
            data={data}
            renderItem={({ item }) => (
              <TransactionCard
                Transaction={{
                  ...item,
                  handlePress: () => router.push(`/transaction/${item.id}`),
                }}
              />
            )}
            keyExtractor={(d) => d.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <TransactionCard
                Transaction={{
                  title: "Create a new Transaction",
                  handlePress: () => router.push("/create"),
                  amount: null,
                  date: null,
                  category: null,
                  location: null,
                  paymentType: null,
                }}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default home