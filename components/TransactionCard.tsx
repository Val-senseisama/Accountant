import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const TransactionCard = ({ Transaction }) => {
  // Destructure the Transaction object with default values
  const {
    title = "",
    amount = "",
    date = "",
    category = "expense",
    location = "",
    paymentType = "",
    handlePress = () => {},
  } = Transaction || {};

  const categoryColorMap = {
    saving: "#4DC3A8", // green
    expense: "#FD475D", // pink
    investment: "#5867BA", // blue
    default: "#C8A1E0",
  };

  // Use the category to get colors, fallback to 'default' if category is not found
  const cardColors = categoryColorMap[category] || categoryColorMap.default;

  return (
    <TouchableOpacity onPress={handlePress}>
          <View
                style={{borderLeftWidth:25, borderLeftColor: cardColors}}
              className={`min-w-[100%] my-2 py-4 px-4 bg-black rounded-xl`}>
        <View className="flex-row items-center justify-between ">
                  <Text className="text-xl font-Iregular text-primary">{title}             
          </Text>
                  <Text
                      style={{color: cardColors}}
                      className={`text-xl font-Iregular`}>
            {amount && `₦${amount}`}
          </Text>
        </View>
        {/* {paymentType && (
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-base font-Iregular text-primary">
              {category}
            </Text>
            <Text className="text-base font-Iregular text-primary">
              {paymentType}
            </Text>
          </View>
        )} */}
        {location && (
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-xs font-Iregular text-primary">
              {location}
            </Text>
            <Text className="text-xs font-Iregular text-primary">{date}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
