import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../../components/CustomInput'
import Select from '../../../components/Select'
import DatePicker from '../../../components/Date'
import CustomButton from '../../../components/CustomButton'
import { useLocalSearchParams, useRouteInfo } from 'expo-router/build/hooks';
import transactionData from '../../../constants/data.json';
import icons from '../../../constants/icons'

const transaction = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const { id } = useLocalSearchParams();
  console.log(id );
  
  const transaction = transactionData.find(
    (transaction) => transaction.id=== id.toString(),
  );

  console.log("Transaction:", transaction);
  
  const  { title, amount, date, location, paymentType } = transaction
  useEffect(() => {
    // Here you can fetch transaction data based on the id
    console.log("Transaction ID:", id);
    // Fetch transaction data and update formData
  }, [id]);

  let description = '';
    // const formatDate = (date) => {
    //   if (date && typeof date.toDateString === 'function') {
    //     return date.toDateString();
    //   } else {
    //     return 'Select a date';
    //   }
    // };


    const handlePress = async () => {
        console.log("Create Transaction Data:",formData);
        
  }
  

  const formatDate = (date) => {
    const dateObject = new Date(Date.parse(date));
    return dateObject;
    
  };

  const handleDelete = async () => {
    console.log("Tried to delete");
    
  }
  
const formattedDate = formatDate(transaction?.date);
console.log(formattedDate);

      const categories = [
        { label: "Saving", value: "saving" },
        { label: "Expense", value: "expense" },
        { label: "Investment", value: "investment" },
    ];
    
    const payments = [
        { label: "Cash", value: "cash" },
        { label: "Card", value: "card" },
        { label: "Transfer", value: "transfer" },
    ]

    const data = {
        transaction: {
            title:"",
            description: "",
            paymentType: "",
            category: "Category",
            amount: 0,
            location: "",
            date: "",
        }
    }
    const [formData, setFormData] = useState({
      title: transaction?.title || "",
      description: description || "",
      paymentType: transaction?.paymentType || "",
      category: transaction?.category || "",
      amount: parseFloat(transaction?.amount.toString()) || "0",
      location: transaction?.location || "",
      date: formattedDate || null,
    });
  
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full h-screen p-3">
          <View className="w-full flex-row justify-between items-center px-4">
            <Text className="text-2xl text-black text-center">Transaction</Text>
            <TouchableOpacity
            onPress={handleDelete}
            >
              <Image
                source={icons.trash}
                className="h-5 w-5 mx-3"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View className="px-3 my-1 flex-1">
              {/* Transaction Form */}
              <FormField
                title="Title"
                value={formData.title}
                placeholder="Title"
                handleChangeText={(e) => setFormData({ ...formData, title: e })}
                otherStyles="my-2"
              />
              <FormField
                title="Description"
                value={formData.description}
                placeholder="Description"
                handleChangeText={(e) =>
                  setFormData({ ...formData, description: e })
                }
                otherStyles="my-2"
                big="10vh"
                multiline={true}
                numberOfLines={5}
              />

              <View className="w-full flex flex-row items-start justify-evenly gap-2  my-3 flex-1">
                <Select
                  placeholder={"Category"}
                  label="Category"
                  options={categories}
                  selectedValue={formData.category}
                  onValueChange={(itemValue) =>
                    setFormData({ ...formData, category: itemValue })
                  }
                />

                <DatePicker
                  label="Transaction Date"
                  selectedDate={formData.date}
                  onDateChange={(date) =>
                    setFormData({ ...formData, date: date })
                  }
                />

                <Select
                  label="Payment Type"
                  options={payments}
                  selectedValue={formData.paymentType}
                  onValueChange={(itemValue) =>
                    setFormData({ ...formData, paymentType: itemValue })
                  }
                  placeholder="Payment Type"
                />
              </View>

              <FormField
                title="Amount"
                value={formData.amount.toString()}
                placeholder="Amount"
                handleChangeText={(e) =>
                  setFormData({
                    ...formData,
                    amount: e === "" ? 0 : parseFloat(e),
                  })
                }
                otherStyles="my-2"
              />

              <FormField
                title="Location"
                value={formData.location}
                placeholder="Location"
                handleChangeText={(e) =>
                  setFormData({ ...formData, location: e })
                }
                otherStyles="my-2"
              />

              <CustomButton
                title="Update"
                handlePress={handlePress}
                containerStyles="mt-5 mb-5"
                textStyles="px-3"
                isLoading={isLoading}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default transaction