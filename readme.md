# Agencia Viajes Node
<img src="./public/img/Portada.PNG">
This project was about a travel agency, where the customers can see what the agency offers such as travels around the world, testimonals of the people that hired those services for a specific travel and prices for different places in all continents.
This project used Model View Controller as a arquitecture pattern. 

## Built with
<ul>
    <li><img src="https://svgl.app/library/html5.svg" width=20 /> HTML</br></li>
    <li><img src="https://svgl.app/library/css.svg" width=20 /> CSS</br></li>
    <li><img src="https://svgl.app/library/javascript.svg" width=20 /> JavaScript</br></li>
    <li><img src="https://svgl.app/library/nodejs.svg" width=20 /> NodeJS</br></li>
    <li><img src="https://svgl.app/library/expressjs_dark.svg" width=20 /> Express.js</br></li>
    <li><img src="https://svgl.app/library/sequelize.svg" width=20 /> Sequelize</br></li>
    <li><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Rr7K5gOm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dbalas.gallerycdn.vsassets.io/extensions/dbalas/vscode-html2pug/0.0.2/1532242577062/Microsoft.VisualStudio.Services.Icons.Default" width=20 /> Pug as a Template Engine</br></li>
    <li><img src="https://svgl.app/library/mysql.svg" width=20 /> MySQL</br></li>
</ul>

### Overview
This project covers all the crud operations, the client side uses HTML, CSS, JS and a template engine Pug, as for the server side NodeJS with Express for the routes was used, Sequelize for the ORM in order to make the requests more easier and MySQL for the database.<br>
Table plus was used as well for database managment.<br>
All of that with an arquitecture pattern such as MVC to separate everything. The Model used was MySQL with Sequelize, the view used a template engine called Pug, and the Controller with NodeJS and Express.

### Travels Section
<img src="./public//img/Travels.PNG">
All Travels fetched from the DB along with an endpoint for each travel for more information about it.
<img src="./public//img/TravelEndpoint.PNG">

### Testimonial Section
The customer or user can see all the testimonials submitted by the people who used the Travel Agency, as well can leave a testimonial himself. <br>
Since this was a normal form with no files attached, the content type was application/x-www-form-urlencoded and used a body parser of<br>
app.use(express.urlencoded({extended: true}))<br>
<p align="center">
    <img src="./public//img/TestimonialsSubmit.PNG">
</p>
<img src="./public//img/TestimonialsSubmited.PNG">

### Responsive Mobile First
<p align="center">
    <img src="./public//img/MobileFirst1.PNG">
</p>

<p align="center">
    <img src="./public//img/MobileFirst2.PNG">
</p>

<p align="center">
    <img src="./public//img/MobileFirst3.PNG">
</p>

<p align="center">
    <img src="./public//img/MobileFirst4.PNG">
</p>



