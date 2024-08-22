import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import thumbnail1 from '../images/thumbnail1.jpg'

const PostDetails = () => {
  return (
    <section className='post-detail'>
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor/>
          <div className="post-detail_buttons">
            <Link to={`/posts/Ashish/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/Ashish/delete`} className='btn sm primary'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail_thumbnail">
          <img src={thumbnail1} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos nisi minima. Cum, sapiente assumenda sequi libero inventore id repellendus atque. Libero magnam quae rerum veniam sint. Aut, eum reiciendis.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere maiores quidem, numquam ad nemo ducimus architecto quos aperiam sint iure aspernatur necessitatibus qui, in, exercitationem totam eius hic quae expedita. Quae labore ipsum ad eum incidunt doloribus magni doloremque atque facilis! Itaque quia fugiat veritatis nulla quasi voluptatem minima assumenda unde laboriosam nihil aspernatur, maxime impedit laudantium ipsa. Officia velit ullam, voluptas cupiditate veritatis provident distinctio rem laborum, commodi culpa dolorum architecto, qui aut quaerat expedita. Totam nostrum vero blanditiis eaque ad animi repudiandae, cupiditate eos nemo natus mollitia eius esse neque quaerat necessitatibus beatae consequuntur quos amet magni atque architecto, et quo. Fugit laudantium voluptas facilis neque, veniam adipisci praesentium cumque quae quidem laboriosam sunt, nisi impedit quibusdam officia asperiores! Odit deserunt totam assumenda hic quaerat consectetur aliquam quasi maxime consequuntur illum neque vero at aspernatur beatae, placeat aperiam natus necessitatibus molestiae voluptatum, ut quo. Sunt, doloremque? Accusamus possimus fuga consequuntur quisquam nihil illum cupiditate placeat eaque laborum voluptates, ipsam fugit. Laborum aspernatur velit non doloremque ratione dolore omnis perferendis et dolorum accusantium. Porro quos iure modi quia libero exercitationem obcaecati facilis enim necessitatibus iusto omnis eaque odit, nostrum sunt error magnam neque eligendi ullam. In veritatis deserunt repudiandae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quasi cupiditate cumque harum repellat quibusdam dignissimos fugiat omnis qui libero nisi sint, corporis, velit esse aut error repellendus dolores quo at distinctio praesentium eos. Dolorem alias totam quos nostrum consequatur?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis magni accusantium officia a distinctio accusamus, iste quas nobis! Vel, itaque enim repellendus doloremque voluptate nobis. Minima eum cumque animi non sed enim, totam harum, facere, iusto laudantium illum? Hic nobis, laborum sequi recusandae quas eos.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, sed neque voluptates id labore eaque cupiditate facilis saepe? Eveniet eius obcaecati maiores rerum nam debitis provident voluptates dicta ipsum vel qui hic, dolorem error officiis quo eum doloremque sequi a illo unde amet? Et quia enim perspiciatis? Quasi harum eius aspernatur. Quis sunt aliquid fuga?</p>
        </div>
      </div>
    </section>
  )
}

export default PostDetails