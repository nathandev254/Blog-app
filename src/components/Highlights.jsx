import './Highlights.css'

function Highlights({ Highlightpost }) {
  // Highlightpost.map(blog=>console.log(blog))
  return (
    <div className='highlights'>
      {Highlightpost.map((post, index) => {
        
        return (
          <div className='highlights--item' key={index}>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Highlights;
