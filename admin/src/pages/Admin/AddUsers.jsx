import React from 'react'
import { AddAdministratorCard, AddStudentCard, AddTeachersCard, AddUtilityCard } from '../../components/StudentCard'

const AddUsers = () => {
  return (
    <div>
      <AddStudentCard />
      <AddTeachersCard />
      <AddAdministratorCard />
      <AddUtilityCard />
    </div>
  )
}

export default AddUsers
