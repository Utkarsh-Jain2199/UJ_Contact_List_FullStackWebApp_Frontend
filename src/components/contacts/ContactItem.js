// import React, { useContext } from "react";
// import PropTypes from "prop-types";
// import ContactContext from "../../context/contact/contactContext";

// const ContactItem = ({ contact }) => {
//   const { _id, name, email, phone, type } = contact;
//   const contactContext = useContext(ContactContext);
//   const { deleteContact, setCurrent, clearCurrent } = contactContext;

//   const onDelete = () => {
//     deleteContact(_id);
//     clearCurrent();
//   };

//   return (
//     <div className="card">
//       <h3 className="card-header">
//         {name}
//         <span
//           className={`badge ${
//             type === "professional" ? "badge-success" : "badge-primary"
//           }`}
//         >
//           {type.charAt(0).toUpperCase() + type.slice(1)}
//         </span>
//       </h3>
//       <div className="card-body">
//         <ul className="list-group">
//           {email && (
//             <li className="list-group-item">
//               <i className="fas fa-envelope-open" /> {email}
//             </li>
//           )}
//           {phone && (
//             <li className="list-group-item">
//               <i className="fas fa-phone" /> {phone}
//             </li>
//           )}
//         </ul>
//       </div>
//       <div className="card-footer">
//         <button
//           className="btn btn-primary btn-sm"
//           onClick={() => setCurrent(contact)}
//         >
//           Edit
//         </button>
//         <button className="btn btn-danger btn-sm" onClick={onDelete}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// ContactItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };

// export default ContactItem;


import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const { _id, name, email, phone, type } = contact;
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card">
      <h3 className="card-header">
        {name}
        <span
          className={`badge ${
            type === "professional" ? "badge-success" : "badge-primary"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <div className="card-body">
        <ul className="list-group">
          {email && (
            <li className="list-group-item">
              <i className="fas fa-envelope-open" /> {email}
            </li>
          )}
          {phone && (
            <li className="list-group-item">
              <i className="fas fa-phone" /> {phone}
            </li>
          )}
        </ul>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;




