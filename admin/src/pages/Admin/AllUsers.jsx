import React from "react";
import StudentCard, { AdministratorCard, TeacherCard, UtilityCard } from "../../components/StudentCard";

function AllUsers() {
  return (
    <div>
      <StudentCard />
      <TeacherCard />
      <AdministratorCard />
      <UtilityCard />
    </div>
  );
}

export default AllUsers;
