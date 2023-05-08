import React, { useState, useEffect } from 'react';
import './History.css';
import EditList from "./EditList";
import AddList from "./AddList";

function History() {
  const [lists, setList] = useState(JSON.parse(localStorage.getItem('lists')) || []);
  const [updateState, setUpdateState] = useState(-1);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  function handleEdit(id) {
    setUpdateState(id);
  }

  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = event.target.elements.url.value;
    const surl = event.target.elements.surl.value;
    const edate = event.target.elements.edate.value;

    if (!url || !surl || !edate) {
      return;
    }

    const newlist = lists.map((li) => (
      li.id === updateState ? { ...li, url: url, surl: surl, edate: edate } : li
    ));

    setList(newlist);
    setUpdateState(-1);
    event.target.reset();
  }

  return (
    <div className='crud'>
      <div>
        <AddList setList={setList} />
        <form onSubmit={handleSubmit}>
        {lists.length>0&&<>
          <table>
            {
              lists.map((current) => (
                updateState === current.id ?
                  <EditList current={current} lists={lists} setList={setList} key={current.id} /> :
                  <tr key={current.id}>
                    <td>{current.url}</td>
                    <td>{current.surl}</td>
                    <td>{current.edate}</td>
                    <td>
                      <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                      <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                    </td>
                  </tr>
              ))
            }
          </table>
          </>}
            {lists.length < 1 && <div>No data added yet</div>}
        </form>
      </div>
    </div>
  );
}

export default History;