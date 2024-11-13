const typographyBase = 14;
const typographyLevels = {
	base: typographyBase,
	xs: `${(typographyBase - 4) / 16}rem`,
	s: `${(typographyBase - 2) / 16}rem`,
	m: `${typographyBase / 16}rem`,
	l: `${(typographyBase + 2) / 16}rem`,
	xl: `${(typographyBase + 10) / 16}rem`,
};

/* TODO Expand this */
const paletteColors = {
	white: "#FFFFFF",
	gray50: "#FEFEFE",
	gray60: "#FEFDFE",
	gray70: "#FDFDFD",
	gray80: "#FDFCFD",
	gray90: "#FCFCFD",
	/* gray95: "#FAFAFA",
	gray97: "#F9FAFB", */
	gray100: "#F4F4F4",
	/* gray125: "#F2F4F7",
	gray150: "#EAECF0",
	gray180: "#E6E6E6", */
	gray200: "#E3E3E3",
	/* 	gray225: "#D6D9DD",
	gray250: "#D0D5DD", */
	gray300: "#A2A3A3",
	/* gray350: "#A1A1AA",
	gray450: "#8E8E8F", */
	gray500: "#838C99",
	gray600: "#454546",
	gray750: "#36363E",
	gray800: "#2D2D33",
	/* gray815: "#27272A",
	gray830: "#262115",
	gray835: "#18181a",
	gray840: "#151518", */
	gray850: "#131315",
	gray860: "#111113",
	gray870: "#0F0F11",
	gray880: "#0C0C0E",
	gray890: "#09090B",
	black: "#000000",
	blueGray20: "#E8F0FE",
	blueGray40: "#E2EAF7",
	blueGray150: "#667085",
	blueGray200: "#475467",
	blueGray400: "#344054",
	blueGray900: "#1c2130",
	blueBlueWave: "#1570EF",
	blue700: "#4E5BA6",
	purple300: "#664EFF",
	purple400: "#3A1BFF",
	green20: "#ECFDF3",
	green50: "#D4F4E1",
	green150: "#45BB7A",
	green200: "#17B26A",
	green400: "#079455",
	green800: "#1C4428",
	green900: "#12261E",
	red50: "#F9ECED",
	red100: "#FBD1D1",
	red200: "#F04438",
	red300: "#D32F2F",
	red700: "#542426",
	red800: "#301A1F",
	orange50: "#FEF8EA",
	orange100: "#FFECBC",
	orange300: "#FDB022",
	orange400: "#FF9F00",
	orange500: "#E88C30",
	orange600: "#DC6803",
	orange800: "#624711",
};

const semanticColors = {
	primary: {
		main: {
			light: paletteColors.blueBlueWave,
			dark: paletteColors.blueBlueWave,
		},
		// TODO we dont have primary light, dark or contrast text
	},
	secondary: {
		main: {
			light: paletteColors.gray100,
			dark: paletteColors.gray800,
		},
		// TODO we dont have secondary light
		dark: {
			light: paletteColors.gray200,
			//TODO we dont have secondary dark for dark mode
		},
		constrastText: {
			light: paletteColors.blueGray200,
			//TODO we dont have secondary contrastText for dark mode
		},
	},
	success: {
		main: {
			light: paletteColors.green200,
			dark: paletteColors.green150,
		},
		contrastText: {
			//TODO values are equal (confirm)
			//TODO contrasttext semantically should be something that contrasts with the main
			light: paletteColors.green400,
			dark: paletteColors.green400,
		},
		light: {
			light: paletteColors.green50,
			//TODO dark mode light success is darker than the main success
			dark: paletteColors.green800,
		},
		dark: {
			light: paletteColors.green20,
			dark: paletteColors.green900,
		},
	},
	error: {
		main: {
			light: paletteColors.red300,
			dark: paletteColors.red300,
		},
		contrastText: {
			//TODO contrasttext semantically should be something that contrasts with the main
			light: paletteColors.gray50,
			dark: paletteColors.red50,
		},
		light: {
			light: paletteColors.red100,
			dark: paletteColors.red700,
		},
		dark: {
			light: paletteColors.red50,
			dark: paletteColors.red800,
		},
	},
	warning: {
		main: {
			light: paletteColors.orange300,
			dark: paletteColors.orange400,
		},
		light: {
			light: paletteColors.orange100,
			dark: paletteColors.orange800,
		},
		contrastText: {
			light: paletteColors.orange600,
			dark: paletteColors.orange500,
		},
		dark: {
			light: paletteColors.orange50,
			dark: paletteColors.gray830,
		},
	},
	/* From this part on, try to create semantic structure, not feature based structure */
	gradient: {
		color1: {
			light: paletteColors.gray90,
			dark: paletteColors.gray890,
		},
		color2: {
			light: paletteColors.gray80,
			dark: paletteColors.gray880,
		},
		color3: {
			light: paletteColors.gray70,
			dark: paletteColors.gray870,
		},
		color4: {
			light: paletteColors.gray60,
			dark: paletteColors.gray860,
		},
		color5: {
			light: paletteColors.gray50,
			dark: paletteColors.gray850,
		},
	},
	background: {
		main: {
			light: paletteColors.white,
			dark: paletteColors.gray840,
		},
		alt: {
			light: paletteColors.gray90,
			dark: paletteColors.gray890,
		},
		fill: {
			light: paletteColors.gray100,
			dark: paletteColors.gray800,
		},
		accent: {
			light: paletteColors.gray100,
			dark: paletteColors.gray835,
		},
	},
	text: {
		primary: {
			light: paletteColors.blueGray900,
			dark: paletteColors.gray100,
		},
		secondary: {
			light: paletteColors.blueGray400,
			dark: paletteColors.gray180,
		},
		tertiary: {
			light: paletteColors.blueGray200,
			dark: paletteColors.gray350,
		},
		accent: {
			light: paletteColors.gray500,
			dark: paletteColors.gray450,
		},
	},
	border: {
		light: {
			light: paletteColors.gray150,
			dark: paletteColors.gray815,
		},
		dark: {
			light: paletteColors.gray250,
			dark: paletteColors.gray750,
		},
	},
	percentage: {
		/* uptimeFair: {
			light: paletteColors.
		} */
	},
	unresolved: {
		main: {
			light: paletteColors.blue700,
			dark: paletteColors.purple300,
		},
		light: {
			light: paletteColors.blueGray40,
			dark: paletteColors.purple400,
		},
		bg: {
			light: paletteColors.gray125,
			dark: paletteColors.gray125,
		},
	},
	other: {
		icon: {
			light: paletteColors.blueGray150,
		},
		line: {
			light: paletteColors.gray225,
		},
		grid: {
			light: paletteColors.gray300,
			dark: paletteColors.gray600,
		},
		autofill: {
			light: paletteColors.blueGray20,
		},
	},
};
export { typographyLevels, semanticColors as colors };
