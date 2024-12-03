import React from 'react';
import { useNavigate } from 'react-router-dom';

// Generic Card Component
const Card = ({ title, buttonText, navigateTo }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(navigateTo);
  };

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <div className="p-4">
        <h5 className="text-xl font-semibold text-blue-gray-700 mb-2">
          {title}
        </h5>
      </div>
      <div className="p-4 border-t">
        <button
          className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleNavigate}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Specific Components
export const StudentCard = () => (
  <Card title="Students" buttonText="Student List" navigateTo="/student-list" />
);

export const TeacherCard = () => (
  <Card title="Teachers" buttonText="Teacher List" navigateTo="/teacher-list" />
);

export const UtilityCard = () => (
  <Card title="Utility" buttonText="Utility List" navigateTo="/utility-list" />
);

export const AdministratorCard = () => (
  <Card title="Administrator" buttonText="Administrator List" navigateTo="/administrator-list" />
);

export const AddStudentCard = () => (
  <Card title="Student" buttonText="Add Student" navigateTo="/add-student" />
);

export const AddAdministratorCard = () => (
  <Card title="Administrator" buttonText="Add Administrator" navigateTo="/add-administrator" />
);

export const AddUtilityCard = () => (
  <Card title="Utility" buttonText="Add Utility" navigateTo="/add-utility" />
);

export const AddTeachersCard = () => (
  <Card title="Teacher" buttonText="Add Teacher" navigateTo="/add-teacher" />
);

// Default Export
export default StudentCard;
