import React from 'react';

const UserProfile = () => {
  // Aquí podrías obtener la información del perfil del usuario desde alguna fuente de datos
  // Por ejemplo, una API o una base de datos.
  const user = {
    username: 'usuario123',
    name: 'Nombre del Usuario',
    email: 'usuario123@example.com',
    // Otras propiedades del perfil...
  };

  return (
    <div className="user-profile">
      <h2>Perfil de Usuario</h2>
      <p>Nombre de usuario: {user.username}</p>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Otras propiedades del perfil... */}
    </div>
  );
};

export default UserProfile;
