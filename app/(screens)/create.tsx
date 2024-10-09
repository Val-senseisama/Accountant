import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/CustomInput'
import Select from '../../components/Select'
import DatePicker from '../../components/Date'
import CustomButton from '../../components/CustomButton'
//import transaction from './transaction'

const create = () => {
    const [ isLoading, setIsLoading ] = useState(false);

    function formatDate(dateString: string): string {
      return dateString.split("T")[0];
    }


    const handlePress = async () => {
        console.log("Create Transaction Data:",formData);
        
    }
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
      title: data?.transaction?.title || "",
      description: data?.transaction?.description || "",
      paymentType: data?.transaction?.paymentType || "",
      category: data?.transaction?.category || "",
      amount: data?.transaction?.amount || "",
      location: data?.transaction?.location || "",
      date: data?.transaction?.date || "",
    });
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full h-screen p-3">
          <View className="w-full">
            <Text className="text-2xl text-black text-center">
              Create a New Transaction
            </Text>
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
              />

              <View className="w-full flex flex-row items-start justify-evenly gap-2  my-3 flex-1">
                              <Select
                                  placeholder={'Category'}
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
                    setFormData({ ...formData, date: formatDate(date) })
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
                value={formData.amount}
                placeholder="Amount"
                handleChangeText={(e) =>
                  setFormData({ ...formData, amount: parseFloat(e) })
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
                title="Submit"
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

export default create