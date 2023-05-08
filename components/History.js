import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function History() {
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("links")) || []
  );

  const handleDeleteLink = (id) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
  };

  const handleUpdateDate = (id) => {
    const linkToUpdate = links.find((link) => link.id === id);
    const newDate = prompt("Enter new date (YYYY-MM-DD):", linkToUpdate.date);
    if (newDate) {
      const newLinks = links.map((link) => {
        if (link.id === id) {
          return {
            ...link,
            date: newDate,
          };
        }
        return link;
      });
      setLinks(newLinks);
      localStorage.setItem("links", JSON.stringify(newLinks));
    }
  };
  function isValidDate(dateString) {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  }
  const handleCopyLink = (id) => {
    const newLinks = links.map((link) => {
      if (link.id === id) {
        return {
          ...link,
          copied: true,
        };
      }
      return link;
    });
    setLinks(newLinks);
    const shortUrl = newLinks.find((link) => link.id === id).shortUrl;
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className="container">
      <h1>History Page</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Expiry Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.id}>
              <td>{link.url}</td>
              <td>{link.shortUrl}</td>
              <td>
                
              <ReactDatePicker
  selected={
    isValidDate(link.date) ? new Date(link.date) : null
  }
  onChange={(date) => {
    const newDate = date.toISOString().slice(0, 10);
    handleUpdateDate(link.id, newDate);
  }}
/>

              </td>
              <td>
              <button
                className="btn btn-danger mr-2"
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this link?")) {
                    handleDeleteLink(link.id);
                  }
                }}
              >
                Delete
              </button>

                <button
                  className="btn btn-info mr-2"
                  onClick={() => handleUpdateDate(link.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleCopyLink(link.id)}
                  disabled={link.copied}
                >
                  {link.copied ? "Copied" : "Copy"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
