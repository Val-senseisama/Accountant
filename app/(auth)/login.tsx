import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { ReactHTMLElement, useState } from "react";
import images from "../../constants/images";
import FormField from "../../components/CustomInput";
import { router } from "expo-router";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
  });

  const handlePress = () => {
    setIsLoading(true);
    console.log(formData);

    router.replace("/home");
  };

  const goToSignup = () => {
    router.push("/register");
  };

  return (
    <SafeAreaView>
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
            Welcome back User
          </Text>
       
      
          <FormField
            title="Password"
            value={formData.password || ""}
            placeholder="Your Password"
            handleChangeText={(e) => setFormData({ ...formData, password: e })}
            otherStyles="my-2"
            name="password"
          />
          <CustomButton
            title="Login"
            handlePress={handlePress}
            containerStyles="mt-5 mb-5"
            textStyles="px-3"
            isLoading={isLoading}
          />
          <View className="flex flex-row items-center justify-center mt-2">
            <Text className="text-base font-pregular mx-1">
              Don't have an account ?
            </Text>
            <Text
              className="text-lg font-pmedium text-blue-900"
              onPress={goToSignup}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
