import React from 'react';
import {TabTitle} from '../utils/GeneralFunctions'

function AdminsOnly() {
  TabTitle('Rota apenas para admins')

  return (
      <div className="adminsPath">
          <h1>Acessado negado! área para admins</h1>
      </div>
  )
}

export default AdminsOnly;
