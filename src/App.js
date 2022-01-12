import './App.css';
import books from "./books.json";


const bookCard = books.map(({id, imgSrc, name, author, price, format, starRating, reviewers}) =>{
  return (
    <Book 
        imgSrc={imgSrc} 
        name={name} 
        author={author} 
        key={id} 
        price={price} 
        format={format}
        reviewers={reviewers}
        starRating={starRating} />
  )
})

function BookList() {
  return (
    <section className="bookList">
     {bookCard}
    </section>
  )
}

function StarRating({star}) {
  const starsArray = [1, 2, 3, 4, 5];
  const stars = starsArray.map((item, index)=>{
    if(index <= star - 1) {
      return <span className="fa fa-star checked" key={index} />
    } else {
      return <span className="fa fa-star" key={index} />
    }
  })
  return (
    <span>
      {stars}
    </span>
  )
}

function Book({imgSrc, name, author, price, format, starRating, reviewers}) {
  return (
    <div className="card">
      <img src={imgSrc} alt="Avatar" style={{width: "100%"}}/>
      <div className="container">
        <h4 className='bookName'>{name}</h4> 
        <p className='author'>{author}</p>
        <div>
           <StarRating star={starRating} />
           <span className='reviewers'>{reviewers}</span>
        </div>
        <p className='price'>&#8377;{price}</p>
        <p className='format'>{format}</p> 
      </div>
    </div>
  )
}

export default BookList;
