const redis =require("redis");
const client = redis.createClient();

client.on("error",(e)=>{
    console.log(e);//Bağlantıda hata varsa 
});



client.set('user2','test2Name',(err,reply)=>{
    if(err){
        console.log(err);
    }
    console.log(reply);
    
});

client.get('user2',(err,reply)=>{
    if(err){
        console.log(err);
    }
    console.log(reply);
});
  
client.exists('user2',(err,reply)=>{
    if(err){
        console.log(err);
    }
    console.log(reply);
});
  
client.del('user2',(err,reply)=>{
    if(err){
        console.log(err);
    }
    console.log(reply);
});


client.on("message",(channel,message)=>{
    console.log(channel,message);
});

client.subscribe("messageChannel");
  