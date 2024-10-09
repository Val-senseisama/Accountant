import React from "react";
import { Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

const Chart = ({ data }) => {
  const categorySums = {
    saving: 0,
    expense: 0,
    investment: 0,
  };

  // Loop through the data once
  for (const transaction of data) {
    // Add the amount to the corresponding category sum
    if (categorySums.hasOwnProperty(transaction.category)) {
      categorySums[transaction.category] += transaction.amount;
    }
  }

  // Convert the hash table to an array of sums
  const series = [
    categorySums.saving,
    categorySums.expense,
    categorySums.investment,
  ];
  const sliceColor = ["#4DC3A8", "#FD475D", "#5867BA"];
  const wH = 180;

  // Calculate the total sum for the centered number
  const totalSum = series.reduce((a, b) => a + b, 0);

  return (
    <View className="flex items-center mt-3 justify-center">
      <View className="flex-row my-2 max-w-[80%] justify-evenly items-start">
        <View className="flex-row items-center justify-center mx-2">
          <View className="h-[1vh] w-[2vw] bg-[#4DC3A8]"></View>
          <Text className="text-base text-black font-Iregular mx-2">
            Savings
          </Text>
        </View>

        <View className="flex-row items-center justify-center mx-2">
          <View className="h-[1vh] w-[2vw] bg-[#FD475D]"></View>
          <Text className="text-base text-black font-Iregular mx-2">
            Expenses
          </Text>
        </View>

        <View className="flex-row items-center justify-center mx-2">
          <View className="h-[1vh] w-[2vw] bg-[#5867BA]"></View>
          <Text className="text-base text-black font-Iregular mx-2">
            Investments
          </Text>
        </View>
      </View>
      <View style={{ position: "relative" }}>
        <PieChart
          widthAndHeight={wH}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.75}
          coverFill={"#FFF"}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            ₦{totalSum.toFixed(2)}
          </Text>
        </View>
      </View>
      <View className="flex-row my-2 max-w-[80%] justify-evenly items-start">
        <View className="flex-row items-center justify-center mx-2">
          <View className="h-[1vh] w-[2vw] bg-[#4DC3A8]"></View>
          <Text className="text-base text-black font-Iregular mx-2">
            ₦{categorySums.saving.toFixed(2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-center mx-2">
          <View className="h-[1vh] w-[2vw] bg-[#FD475D]"></View>
          <Text className="text-base text-black font-Iregular mx-2">
            ₦{categorySums.expense.toFixed(2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-center mx-2">
          <View className="h-[1vh] w-[2vw] bg-[#5867BA]"></View>
          <Text className="text-base text-black font-Iregular mx-2">
            ₦{categorySums.investment.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Chart;
