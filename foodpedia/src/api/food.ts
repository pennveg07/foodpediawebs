import { axiosHttpRequest } from "../libs/api";

export const apiFood = async () => {
  try {
    const responseData = await axiosHttpRequest({
      endpoint: `food/`,
      headers: {
        "Content-Type": "application/json",
      },
      method: "Get",
    });
    return responseData.data;
  } catch (error) {
    throw error;
  }
};

export const searchFood = async (data: { food_name: string }) => {
  try {
    const responseData = await axiosHttpRequest({
      endpoint: `food/searchfood`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        food_name: data.food_name,
      },
      method: "POST",
    });
    return responseData.data;
  } catch (error) {
    throw error;
  }
};
