import { useRef } from "react";

function AddList({ setList }) {
    const urlRef = useRef();
    const surlRef = useRef();
    const edateRef = useRef();
  
    function handleSubmit(event) {
      event.preventDefault();
      const url = urlRef.current.value;
      const surl = surlRef.current.value;
      const edate = edateRef.current.value;
  
      if (!url || !surl || !edate) {
        return;
      }
  
     
  
  
      const newlist = {
        id: Math.random(),
        url,
        surl,
        edate
      };
      setList((prevList) => prevList.concat(newlist));
      urlRef.current.value = "";
      surlRef.current.value = "";
      edateRef.current.value = "";
    }
  
    return (
      <form className='addForm' onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="Enter URL" ref={urlRef} />
        <input type="text" name="surl" placeholder="Enter Short URL" ref={surlRef}/>
        <input type="date" name="edate" placeholder="Select Expiry Date" ref={edateRef}/>
              <button type="submit">Add</button>
          </form>
      )
  }
  export default AddList;