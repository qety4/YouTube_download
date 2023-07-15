import React, { useState } from 'react'
import Download from './Download.jsx'
import axios from 'axios'

function App() {
  const [urlValue, setUrlValue] = useState('');
  const [data, setData] = useState(null);

  const handleDownload = async () => {
    const data = await axios.get(
      `http://localhost:4000/download?url=${urlValue}`
    );
    setData(data);
    setUrlValue("");
  };
  return (
    <div className='App'>
      <div>
        <h1 className='tc' id='sign1'>YOUTUBE MP4</h1>
      </div>
      <section className='content'>
        <h1 className='tc mt40' id='sign2'>Youtube to MP4 converter</h1>
        <p className='tc' id="desc">
          Provide youtube link <br /> Get MP4 file of it!
        </p>
        <div className='tc'>
          <input
            type="text"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            placeholder='YOUTUBE URL'
            className='input' id="url" />
        </div>
        <div className='tc'>
          <button id="download" className='download_button' onClick={handleDownload}>DOWNLOAD</button>
        </div>
      </section>
      {data?
      <Download data={data}/> :''
      }
    </div>
)
}
export default App