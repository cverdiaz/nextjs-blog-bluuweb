import Layout from '../../components/Layout';

export default function index({data}) {
    return (
        <Layout title = 'about | nex.js' description="agregue descripcion">
            <h1>Lista de Posts</h1>
            {
                data.map(({id, title, body}) => (
                    <div key={id}>
                        <h3>{id} - {title}</h3>
                        <p>{body}</p>
                    </div>
                ))
            }
        </Layout>
    )
}

/** esta funcion solo se va a ejecutar en ele servidor */
export async function getStaticProps(){

    try{
  
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
  
      return {
        props: {
          data
        }
      }
  
    } catch(error){
      console.log(error);
    }
  }
