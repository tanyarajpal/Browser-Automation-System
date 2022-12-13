const { exec } = require("child_process");


exports.openURL = async (req,res)=>{
    try{
        const url = req.query.url;
        const browser = req.query.browser;
        exec(`open -a "${browser}" ${url}`)
        // await open('http://'+url, {app: {name:browser}});
        res.send("url opened in "+ browser+" app");
    }catch(err){
        res.send("error opening url" , err);
    }
}

exports.clearCacheAndHistory = async(req,res)=>{
    try{
        res.send({message:"history cleared "});
    }catch(err){
        res.json({message:"error clearing history ", err});
    }
}

exports.closeBrowser = async (req,res) =>{
    try{
        const browser = req.params.browser;
        exec(`pkill ${browser}`);
        res.status(200).json({message:"browser closed successfully"});
    }catch(err){
        res.status(400).json({message:"error closing browser ", err});
    }
}

