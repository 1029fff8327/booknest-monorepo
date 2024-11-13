import axios from "../utils/axios";

export const getMasters = async () => {
  try {
    const response = await axios.get("/masters");
    return response.data;
  } catch (error) {
    console.error("Error fetching masters:", error);
    throw error;
  }
};

export const getMasterById = async (id) => {
  try {
    const response = await axios.get(`/masters/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching master by ID:", error);
    throw error;
  }
};

export const createMaster = async (masterData) => {
  try {
    const response = await axios.post("/masters", masterData);
    return response.data;
  } catch (error) {
    console.error("Error creating master:", error);
    throw error;
  }
};

export const updateMaster = async (id, masterData) => {
  try {
    const response = await axios.put(`/masters/${id}`, masterData);
    return response.data;
  } catch (error) {
    console.error("Error updating master:", error);
    throw error;
  }
};

export const deleteMaster = async (id) => {
  try {
    await axios.delete(`/masters/${id}`);
  } catch (error) {
    console.error("Error deleting master:", error);
    throw error;
  }
};
