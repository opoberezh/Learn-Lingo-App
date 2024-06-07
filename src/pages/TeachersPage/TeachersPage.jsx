import  { useEffect } from 'react';
import TeacherList from "../../components/TeacherList/TeacherList";

const TeachersPage = () => {
  useEffect(() => {
    // Зміна стилів body при монтуванні компонента
    document.body.style.backgroundColor = '#f0f0f0'; // Задайте потрібний колір

    // Відновлення стилів body при демонтуванні компонента
    return () => {
      document.body.style.backgroundColor = ''; // Повертаємо попередній колір
    };
  }, []);

  return (
    <div>
      <TeacherList />
    </div>
  );
};

export default TeachersPage;
