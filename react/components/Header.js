import Head from 'next/head'

export default () => {

	return (
			<Head>
				<title>My page title</title>

				<meta charset="UTF-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
				<meta property="og:title" content="{% block title %}{% endblock %}"/>
				<meta property="og:type" content="website"/>
				<meta property="og:description" content="{{ config.description }}"/>
				<meta property="og:url" content="http://{{ config.domain }}"/>
				<meta property="og:image" content="http://{{ config.domain }}/assets/images/icon_1024.png"/>
				<meta property="fb:app_id" content="{{ config.hybridauth.providers.Facebook.keys.id }}"/>

				<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,800" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i,700,700i" rel="stylesheet"/>
				<link rel="stylesheet" href="/_next/static/style.css"/>
				<link rel="icon" type="image/png" href="/icons/favicon.png"/>

			</Head>
)
}
