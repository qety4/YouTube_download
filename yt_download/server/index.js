const express=require('express')
const ytdl=require('ytdl-core')

const app = express()
var cors=require('cors')
app.use(cors());

app.listen(4000,()=>{
    console.log('Express server on port 4000')
})

app.get('/download',async (req,res)=>{
    try{
        const url =req.query.url
        const videoId= await ytdl.getURLVideoID(url)
        const metaInfo= await ytdl.getInfo(url)
        let data = {
            url:'https://www.youtube.com/embed/'+videoId,
            info: metaInfo.formats
        }
        return res.send(data);
    }
    catch(e){
        return res.status(500)
    }
})