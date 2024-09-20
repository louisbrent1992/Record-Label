export const social = {
	Youtube: {
		url: "https://www.youtube.com/c/RecordLabelOfficial",
		icon: "youtube",
	},
	Instagram: {
		url: "https://www.instagram.com/recordlabelofficial",
		icon: "instagram",
	},
	Facebook: {
		url: "https://www.facebook.com/RecordLabelOfficial",
		icon: "facebook",
	},
	Twitter: { url: "https://twitter.com/RecordLabelHQ", icon: "twitter" },
	Spotify: {
		url: "https://open.spotify.com/user/recordlabelofficial",
		icon: "spotify",
	},
};

export const sliderItems = [
	{
		id: 1,
		img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
		title: "New Release: 'Echoes of Tomorrow' by Stellar Waves",
		description:
			"Experience the future of sound with Stellar Waves' groundbreaking new album.",
		buttonText: "Listen Now",
		link: "/releases/echoes-of-tomorrow",
	},
	{
		id: 2,
		img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
		title: "Summer Tour 2023: Neon Dreams",
		description:
			"Join Neon Dreams on their electrifying summer tour across the nation!",
		buttonText: "Get Tickets",
		link: "/tours/neon-dreams-2023",
	},
	{
		id: 3,
		img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
		title: "Artist Spotlight: Rising Star Luna Eclipse",
		description:
			"Discover the haunting melodies and powerful lyrics of our newest signing, Luna Eclipse.",
		buttonText: "Explore Artist",
		link: "/artists/luna-eclipse",
	},
];

export const latestVideos = [
	{
		id: 1,
		video: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
		title: "Stellar Waves - 'Cosmic Rhythm' (Official Music Video)",
		thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg",
		views: 1500000,
		likes: 75000,
		releaseDate: "2023-05-15",
	},
	{
		id: 2,
		video: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
		title: "Neon Dreams - 'Electric Nights' (Live at Glastonbury)",
		thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/0.jpg",
		views: 980000,
		likes: 62000,
		releaseDate: "2023-04-22",
	},
	{
		id: 3,
		video: "https://www.youtube.com/watch?v=RgKAFK5djSk",
		title: "Luna Eclipse - 'Shadows and Light' (Lyric Video)",
		thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/0.jpg",
		views: 750000,
		likes: 45000,
		releaseDate: "2023-03-10",
	},
];

export const labelArtists = [
	{
		id: 1,
		name: "Stellar Waves",
		img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
		genre: "Electronic",
		bio: "Pioneering the future of electronic music with their unique blend of cosmic sounds and pulsating rhythms.",
		social: {
			Youtube: { url: "https://www.youtube.com/c/StellarWaves" },
			Instagram: { url: "https://www.instagram.com/stellarwaves" },
			Facebook: { url: "https://www.facebook.com/StellarWaves" },
			Twitter: { url: "https://twitter.com/StellarWaves" },
			Spotify: { url: "https://open.spotify.com/artist/stellarwaves" },
		},
		website: "https://www.stellarwaves.com",
		store: "https://store.stellarwaves.com",
		topTracks: ["Cosmic Rhythm", "Nebula Dreams", "Starlight Serenade"],
		albums: [
			{ name: "Echoes of Tomorrow", year: 2023 },
			{ name: "Galactic Pulse", year: 2021 },
			{ name: "Astral Journeys", year: 2019 },
		],
	},
	{
		id: 2,
		name: "Neon Dreams",
		img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
		genre: "Synth Pop",
		bio: "Bringing the 80s back with a modern twist, Neon Dreams creates infectious synth-pop anthems that light up the night.",
		social: {
			Youtube: { url: "https://www.youtube.com/c/NeonDreams" },
			Instagram: { url: "https://www.instagram.com/neondreams" },
			Facebook: { url: "https://www.facebook.com/NeonDreams" },
			Twitter: { url: "https://twitter.com/NeonDreams" },
			Spotify: { url: "https://open.spotify.com/artist/neondreams" },
		},
		website: "https://www.neondreams.com",
		store: "https://store.neondreams.com",
		topTracks: ["Electric Nights", "Retrowave Romance", "Neon Heart"],
		albums: [
			{ name: "Synthopia", year: 2022 },
			{ name: "Glow", year: 2020 },
			{ name: "Nightdrive", year: 2018 },
		],
	},
	{
		id: 3,
		name: "Luna Eclipse",
		img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80",
		genre: "Alternative Rock",
		bio: "With haunting melodies and introspective lyrics, Luna Eclipse brings a fresh voice to the alternative rock scene.",
		social: {
			Youtube: { url: "https://www.youtube.com/c/LunaEclipse" },
			Instagram: { url: "https://www.instagram.com/lunaeclipse" },
			Facebook: { url: "https://www.facebook.com/LunaEclipse" },
			Twitter: { url: "https://twitter.com/LunaEclipse" },
			Spotify: { url: "https://open.spotify.com/artist/lunaeclipse" },
		},
		website: "https://www.lunaeclipse.com",
		store: "https://store.lunaeclipse.com",
		topTracks: ["Shadows and Light", "Midnight Whispers", "Lunar Tides"],
		albums: [
			{ name: "Twilight Hour", year: 2023 },
			{ name: "Eclipse", year: 2021 },
		],
	},
	// ... more artists ...
];

export const newReleases = [
	{
		id: 1,
		title: "Echoes of Tomorrow",
		artist: "Stellar Waves",
		img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
		type: "Album",
		genre: "Electronic",
		releaseDate: "2023-05-01",
		tracks: [
			"Cosmic Rhythm",
			"Nebula Dreams",
			"Starlight Serenade",
			"Quantum Leap",
			"Solar Flares",
		],
		streamingLinks: {
			spotify: "https://open.spotify.com/album/echoesoftomorrow",
			appleMusic: "https://music.apple.com/album/echoesoftomorrow",
			youtube: "https://www.youtube.com/playlist?list=echoesoftomorrow",
		},
	},
	{
		id: 2,
		title: "Electric Nights (Single)",
		artist: "Neon Dreams",
		img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
		type: "Single",
		genre: "Synth Pop",
		releaseDate: "2023-04-15",
		streamingLinks: {
			spotify: "https://open.spotify.com/track/electricnights",
			appleMusic: "https://music.apple.com/album/electricnights",
			youtube: "https://www.youtube.com/watch?v=electricnights",
		},
	},
	{
		id: 3,
		title: "Luna Eclipse Tour T-Shirt",
		artist: "Luna Eclipse",
		img: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1000&q=80",
		type: "Merch",
		price: 25.99,
		currency: "USD",
		sizes: ["S", "M", "L", "XL"],
		colors: ["Black", "White"],
		storeLink: "https://store.lunaeclipse.com/products/tour-tshirt",
	},
];
