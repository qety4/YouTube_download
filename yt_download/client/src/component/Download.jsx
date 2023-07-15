import React from 'react'

const download= ({data})=>{

console.log(data)
const formats = ['audio/mp4 null', 'video/mp4 1080p', 'video/mp4 720p']
let fdata= data?.data.info.filter((format,index,array)=>{
  if (formats.includes(format.mimeType.split(";")[0]+' '+format.qualityLabel)){
    if(format.qualityLabel== null){return format}
    if(format.codecs.slice(0,3)=='avc'){
      return format
      }
    }
  }
)
console.log(fdata)
return(
<div>
          <div>
            <div className='tc'>
              <iframe src={`${data.data.url}`} width="360" height="180" title='video' className='iframe' />
            </div>
            <div>
            {
            fdata.map((formatName, index) => (
                <div key={index} className='tc'>
                  <button className='download_button'>
                  <a
                    href={formatName.url}
                    target="_blank"
                    download
                    className="anchor"
                  >
                    {formatName.mimeType.split(";")[0] + "  "}
                    {formatName.hasVideo ? formatName.height + "p" : ""}
                  </a>
                </button>
                </div>
              ))}
            </div>
            <div className='tc'>
              <button id='convert'>
              <a href="https://cloudconvert.com/mp4-to-mp3" target="_blank" id="convert">Convert to MP3</a>
              </button>
            </div>
          </div>
      </div>
)
}

export default download