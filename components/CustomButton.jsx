import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ label, handler }) => {
  return (
    <TouchableOpacity
      onPress={handler}
      className="bg-[#364473] p-2.5 px-7 rounded-md mt-6"
    >
      <Text className="text-white font-semibold">{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
