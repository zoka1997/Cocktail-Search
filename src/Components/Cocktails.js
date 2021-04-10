import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../Components/CocktailsList.css';

export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className="flex-cocktail-container">
       <Card className="cocktails-card" style={{ width: '18rem' }}>
               <Card.Img className="img-fluid" variant="top" src={image} alt={name}  />
               <Card.Body>
               <Card.Title className="card-title-cocktail">{name}</Card.Title>
               <Card.Text className="card-title-cocktail-text">
               <h6 className="card-title-cockt">{glass}</h6>
               <p className="card-tit">{info}</p>
               </Card.Text>
               <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
               Details
              </Link>
  </Card.Body>
</Card>
    </article>
  )
}