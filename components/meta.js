import Head from 'next/head';

    const Meta = (props) => (
        <Head>
          <title key="title">{props.title}</title>

          <meta
            key="description"
            name="description"
            content={props.description || "Bleedinginks has everything you need to know about tech news. You will find here valuable information about programming"}
          />
          <meta
            key="og:type"
            name="og:type"
            content={"website"}
          />
          <meta
            key="og:title"
            name="og:title"
            content={props.title}
          />
          <meta
            key="og:description"
            name="og:description"
            content={props.description}
          />
          <meta
            key="og:url"
            name="og:url"
            content={props.url || "https://bleedinginks.com"}
          />
          <meta
            key="og:image"
            name="og:image"
            content={props.image || "https://res.cloudinary.com/dlmozkbdc/image/upload/v1616471100/SkillSchool/icon-min_gpijxi-removebg-preview_rhaxpv.png"}
          />
           <meta name="theme-color" content="#000" />
           <meta name="msapplication-TileColor" content="#000000" />
           <link rel="shortcut icon" href="/favicon/favicon.ico" />
           <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="https://res.cloudinary.com/dlmozkbdc/image/upload/v1616471100/SkillSchool/icon-min_gpijxi-removebg-preview_rhaxpv.png"
            />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://res.cloudinary.com/dlmozkbdc/image/upload/v1616471100/SkillSchool/icon-min_gpijxi-removebg-preview_rhaxpv.png"
          />
          <meta name="keywords" content={"Bleedinginks, Blog, Javascript, React, Programming, HTML, CSS, Nodejs, Redux"}/>
        </Head>
    );

    export default Meta;