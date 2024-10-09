import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { useState } from "react";


export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const handlePress = () => {
        router.replace('/register');
}


    return (
        <SafeAreaView>
            <View className="h-screen flex justify-center items-center bg-primary">
                <View className="w-full px-5">
                    <Image
                        source={images.ab}
                        resizeMode="contain"
                        className="w-[80%] mx-auto mb-0 h-[128px]"
                    />

                    <Text className="text-center font-pmedium text-2xl mb-3">Welcome to Accountant</Text>
                </View>

                <View>
                    <Text
                    className="text-center text-base px-5 font-pregular"
                    >Take control of your finances and keep track of your spending</Text>
                    <CustomButton
                        title='Sign Up'
                        handlePress={handlePress}
                        containerStyles="mt-5 mb-24 mx-3"
                        textStyles="px-3"
                        isLoading={isLoading}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}
