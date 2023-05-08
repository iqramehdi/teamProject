import React from "react";


function EditList({ current, lists, setList }) {
    function handleInputUrl(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
        li.id === current.id ? { ...li, url: value } : li
      ));
  
      setList(newlist);
    }
  
    function handleInputSurl(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
        li.id === current.id ? { ...li, surl: value } : li
      ));
  
      setList(newlist);
    }
  
    function handleInputEdate(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
        li.id === current.id ? { ...li, edate: value } : li
      ));
  
      setList(newlist);
    }
  
    return (
      <tr>
        <td><input type="text" onChange={handleInputUrl} name='url' value={current.url} /></td>
        <td><input type="text" onChange={handleInputSurl} name='surl' value={current.surl} /></td>
        <td><input type="date" onChange={handleInputEdate} name='edate' value={current.edate} /></td>
        <td><button type='submit'>Update</button></td>
      </tr>
    );
  }
  export default EditList;