import micheAuLevain from '$lib/assets/miche-au-levain.webp';
import baguetteTradition from '$lib/assets/baguette-tradition.webp';
import croissantAuBeurre from '$lib/assets/croissant-au-beurre.webp';
import kouglof from '$lib/assets/kouglof.webp';
import tarteAuxPommes from '$lib/assets/tarte-aux-pommes.webp';
import flanPatissier from '$lib/assets/flan-patissier.webp';

export const products = [
	{
		name: 'Miche au levain',
		category: 'Pains',
		image: micheAuLevain,
		alt: 'miche tranchée, mie alvéolée',
		description: 'Farine bio T80, levain naturel, 24 h de fermentation. Croûte épaisse.'
	},
	{
		name: 'Baguette tradition',
		category: 'Pains',
		image: baguetteTradition,
		alt: 'baguettes en panier',
		description: 'Croustillante, mie crème, cuite plusieurs fois par jour.'
	},
	{
		name: 'Croissant au beurre',
		category: 'Viennoiseries',
		image: croissantAuBeurre,
		alt: 'croissant en coupe, feuilletage',
		description: 'Beurre AOP, feuilletage réalisé sur trois jours.'
	},
	{
		name: 'Kouglof',
		category: 'Viennoiseries',
		image: kouglof,
		alt: 'kouglof sucre glace',
		description: 'La brioche alsacienne aux raisins et amandes, le week-end.'
	},
	{
		name: 'Tarte aux pommes',
		category: 'Pâtisseries',
		image: tarteAuxPommes,
		alt: 'tarte fine, pommes en rosace',
		description: 'Pâte sablée maison et pommes d’Alsace, selon la saison.'
	},
	{
		name: 'Flan pâtissier',
		category: 'Pâtisseries',
		image: flanPatissier,
		alt: 'part de flan vanillé',
		description: 'Vanille de Madagascar, pâte brisée pur beurre.'
	}
];
