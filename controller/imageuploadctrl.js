const imageModel = require('../models/upload');
const fs = require('fs');
const path = require('path');


const imageuploadctrl={
    getuploadedImage:async (req, res) => {
        try{
            const imgModel = await imageModel.find({});
            res.render('home', { imgModel: imgModel });

        }catch(error){
            console.log(error);
        res.status(500).send('An error occurred', error);
        }
    },
    postImage :async function(req, res){

    let imgupload = await new imageModel({
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join('././uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    })
    try{
        await imgupload.save()
            res.redirect(`/`)
           }catch(err){
        console.log(err)
    }

    },
    deleteImage : async (req,res)=>{
      try{
        await imageModel.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"deleted the msg"})
      }
       catch(err){
          res.status(500).send(err.message);
      }
    }
}



module.exports = imageuploadctrl