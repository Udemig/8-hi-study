const Table = ({ userData }) => {
  // Obje dağıtma (Deconstruct)
  // Sürekli olarak obje ismini yazıp kod kalabıılağına sebep
  // olamamk için objenini içindeki değerleri dağıtırız (değişkenlere aktarma)
  // const { userData, text } = props;

  console.log(userData[0]);

  return (
    <table className="table table-dark my-5 table-responsive table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>isim</th>
          <th>email</th>
          <th>şirket</th>
          <th>şehir</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
