import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function primerPost() {
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
        </Layout>
    )
}

/** <a href="/">Volver al inicio2(Paginas externas)</a>  */
