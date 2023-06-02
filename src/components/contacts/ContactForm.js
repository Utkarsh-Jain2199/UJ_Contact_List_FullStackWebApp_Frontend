// import React, { useState, useContext, useEffect } from "react";
// import ContactContext from "../../context/contact/contactContext";

// const ContactForm = () => {
//   const contactContext = useContext(ContactContext);
//   const { addContact, current, clearCurrent, updateContact } = contactContext;

//   const [contact, setContact] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     type: "personal",
//   });

//   useEffect(() => {
//     if (current !== null) {
//       setContact(current);
//     } else {
//       setContact({ name: "", email: "", phone: "", type: "personal" });
//     }
//   }, [contactContext, current]);

//   const { name, email, phone, type } = contact;

//   const onChange = (e) => {
//     setContact({ ...contact, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (current == null) {
//       addContact(contact);
//     } else {
//       updateContact(contact);
//     }
//     clearAll();
//   };

//   const clearAll = () => {
//     clearCurrent();
//   };

//   return (
//     <form className="form-container" onSubmit={onSubmit}>
//       <h2 className="form-heading">
//         {current ? "Edit Contact" : "Add Contact"}
//       </h2>
//       <div className="form-group">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={name}
//           onChange={onChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={email}
//           onChange={onChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={phone}
//           onChange={onChange}
//         />
//       </div>
//       <h5>Contact Type</h5>
//       <div className="form-group">
//         <input
//           type="radio"
//           name="type"
//           value="personal"
//           checked={type === "personal"}
//           onChange={onChange}
//         />
//         <label htmlFor="personal">Personal</label>
//         <input
//           type="radio"
//           name="type"
//           value="professional"
//           checked={type === "professional"}
//           onChange={onChange}
//         />
//         <label htmlFor="professional">Professional</label>
//       </div>
//       <div className="form-group">
//         <input
//           type="submit"
//           value={`${current ? "Update Contact" : "Add Contact"}`}
//           className="btn btn-primary btn-block"
//         />
//       </div>
//       {current && (
//         <div className="form-group">
//           <button className="btn btn-light btn-block" onClick={clearAll}>
//             Clear
//           </button>
//         </div>
//       )}
//     </form>
//   );
// };

// export default ContactForm;




import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: "", email: "", phone: "", type: "personal" });
    }
  }, [contactContext, current]);

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current == null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <h2 className="form-heading">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={onChange}
        />
      </div>
      <h5>Contact Type</h5>
      <div className="form-group">
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={onChange}
        />
        <label htmlFor="personal">Personal</label>
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={onChange}
        />
        <label htmlFor="professional">Professional</label>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={`${current ? "Update Contact" : "Add Contact"}`}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div className="form-group">
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
