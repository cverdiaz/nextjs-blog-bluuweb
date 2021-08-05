/*import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';*/
import Layout from '../../components/Layout';

/*export default function primerPost() {
    return (
        <Layout title = 'about | nex.js' description="agregue descripcion">
            <Head>
                <title>Este es mi primer Post</title>
                <meta 
                    name = "description"
                    content = "Descripcion de mi primer Post"
                />
            </Head>
            <h1>Mi primer Post</h1>
            <Image
                src="/img/1.jpg"
                width={660}
                height={600}
                alt="Mi imagen"
            ></Image>
            <Link href="/">
                <a>Volver al Inicio(Paginas Locales)</a>
            </Link>
            <br></br>
            <a href="/">Volver al inicio2(Paginas externas)</a>
        </Layout>
    )
}*/

export default function primerPost ({data}){
    return (
        <Layout>
            <h1>{data.id} - {data.title}</h1>
            <p>{data.body}</p>
        </Layout>
    )
}

export async function getStaticPaths(){

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        const paths = data.map(({id}) => ({params: {id: `${id}`}}));

        return {
            paths,
            fallback: false, //se genera de forma automatica el 404 en caso que la solicitud falle
        }
    } catch (error) {
        console.log(error);
    }
}

/** esta funcion solo se va a ejecutar en el servidor */
export async function getStaticProps( {params }){

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
        const data = await res.json();
        console.log(data);
        return {
            props: {
                data,
            },
        }
    } catch (error){
        console.log(error);
    }
}
