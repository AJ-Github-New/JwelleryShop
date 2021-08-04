import express from 'express';
import data from './data.js';
const app=express();
app.get('/',(req,res)=>{
    res.send('Server is running');
});
const port=process.env.PORT || 5000;
app.get('/api/earrings',(req,res)=>{
    res.send(data.earrings);
});
app.get('/api/necklaces',(req,res)=>{
    res.send(data.necklaces);
});
app.get('/api/bracelets',(req,res)=>{
    res.send(data.bracelets);
});
app.get('/api/anklets',(req,res)=>{
    res.send(data.anklets);
});
app.get('/api/earrings/:id', (req, res) => {
    const earring = data.earrings.find((x) => x._id === req.params.id);
    if (earring) {
      res.send(earring);
    } else {
      res.status(404).send({ message: 'Earring Not Found' });
    }
  });
  app.get('/api/anklets/:id', (req, res) => {
    const anklet = data.anklets.find((x) => x._id === req.params.id);
    if (anklet) {
      res.send(anklet);
    } else {
      res.status(404).send({ message: 'Anklet Not Found' });
    }
  });
  app.get('/api/bracelets/:id', (req, res) => {
    const bracelet = data.bracelets.find((x) => x._id === req.params.id);
    if (bracelet) {
      res.send(bracelet);
    } else {
      res.status(404).send({ message: 'Bracelet Not Found' });
    }
  });
  app.get('/api/necklaces/:id', (req, res) => {
    const necklace = data.necklaces.find((x) => x._id === req.params.id);
    if (necklace) {
      res.send(necklace);
    } else {
      res.status(404).send({ message: 'Necklace Not Found' });
    }
  });  
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
})
