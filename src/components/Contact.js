import Avatar from "react-avatar";

const Contact = ({ elem }) => {
  const { id, name, phone, email } = elem;
  return (
    <tr>
      <th scope="row" key={id}>
        {id}
      </th>
      <td>
        <Avatar
          name={name}
          size="30"
          round={true}
          style={{ marginRight: "5px" }}
        />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <a href="#">
          <span className="material-icons text-primary">edit</span>
        </a>
        <a href="#">
          <span className="material-icons text-danger">remove_circle</span>
        </a>
      </td>
    </tr>
  );
};

export default Contact;
