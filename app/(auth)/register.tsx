import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { ReactHTMLElement, useState } from "react";
import images from "../../constants/images";
import FormField from "../../components/CustomInput";
import { router } from "expo-router";


const register = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  
    const [ formData, setFormData ] = useState({
        fname: "",
        lname: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value });
    }


    const handlePress = () => {
        setIsLoading(true);
        console.log(formData);
        
        router.replace('/login');
    }

    const goToLogin = () => {
        router.push('/login');
    }



  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-screen w-full flex justify-center items-center bg-primary">
          <View className="w-full px-5">
            <Image
              source={images.ab}
              resizeMode="contain"
              className="w-[80%] mx-auto mb-0 h-[128px]"
            />
          </View>

          <View className="w-[85%]">
            <Text className="text-center text-3xl px-5 font-psemibold">
              Sign Up
            </Text>
            <FormField
              title="First Name"
              value={formData.fname || ""}
              placeholder="Your Firstname"
              handleChangeText={(e) => setFormData({ ...formData, fname: e })}
              otherStyles="my-2"
              name="fname"
            />
            <FormField
              title="Last Name"
              value={formData.lname || ""}
              placeholder="Your Lastname"
              handleChangeText={(e) => setFormData({ ...formData, lname: e })}
              otherStyles="my-2"
              name="lname"
            />
            <FormField
              title="Password"
              value={formData.password || ""}
              placeholder="Your Password"
              handleChangeText={(e) =>
                setFormData({ ...formData, password: e })
              }
              otherStyles="my-2"
              name="password"
            />
            <CustomButton
              title="Sign Up"
              handlePress={handlePress}
              containerStyles="mt-5 mb-5"
              textStyles="px-3"
              isLoading={isLoading}
            />
            <View className="flex flex-row items-center justify-center mt-2">
              <Text className="text-base font-pregular mx-1">
                Already have an account ?
              </Text>
              <Text
                className="text-lg font-pmedium text-blue-900"
                onPress={goToLogin}>
                Login
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default register