import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

    const [waitlist, setWaitlist] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/waitlist").then((response) => {
        setWaitlist(response.data);
      });
    }, []);

  return (
    <div>
        {waitlist.map((value, key) => { 
        return <div key={key}> {value.name} </div>;
      })}
    </div>
  )
}

export default Home;