import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // URL вашего бэкенда
  headers: {
    "Content-Type": "application/json", // Тип контента
  },
});

instance.interceptors.response.use(
  (response) => response, // Возвращаем успешный ответ
  (error) => {
    console.error("Ошибка в запросе:", error.response?.data || error.message);
    return Promise.reject(error); // Пробрасываем ошибку для дальнейшей обработки
  }
);

export default instance;
