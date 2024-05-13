import  './services.css'

const Services = () => {
  return (
    <div className='containerServices'>
        <div className="leftService">
        <h3>
          <b>Good</b> desing
          <br />
          <b>Good</b> business
        </h3>
        <h5>We kwnow that good desing means good business</h5>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad odio commodi praesentium accusamus laborum eaque provident, rem ex aliquid delectus cupiditate sapiente eius. Beatae, tenetur iste. Natus fugit fuga placeat?
        </p>
        <button>Lear More</button>
        </div>
        <div className="rightService">
            <img src="https://me-qr.com/static/pages/blog-card-img/blog-top-img.svg" alt="" className='imageServices' />
        </div>
    </div>
  )
}

export default Services