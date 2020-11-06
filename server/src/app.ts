//Imports
  import express from 'express';
  const app = express();

  import bodyParser from 'body-parser';

  import ProductsRoutes from './routes/ProductsRoutes';
  import CategoriesRoutes from './routes/CategoriesRoutes';
  import ClientsRoutes from './routes/ClientsRoutes';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/products', ProductsRoutes);
app.use('/categories', CategoriesRoutes);
app.use('/clients', ClientsRoutes);

const port: Number = 3000;
app.listen(port, (err: any = null) => {
  err ? console.log(err) : console.log(`Server running at http://localhost:${port}`)
})