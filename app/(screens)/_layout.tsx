import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import transaction from "./transaction/[id]";

const ScreenLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="transaction/[id]"
          initialParams={{ id: 123 }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="create"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default ScreenLayout;
