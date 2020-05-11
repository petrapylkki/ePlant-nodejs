// importing all images and naming them
import jukkapalmuImage from '../assets/plant_img/jukkapalmu.png';
import kaktusImage from '../assets/plant_img/kaktus.png';
import aloeveraImage from '../assets/plant_img/aloe_vera.png'
// import avocadoImage from '../assets/plant_img/avocado.png'
// import basilikaImage from '../assets/plant_img/basilika.png'
// import korianteriImage from '../assets/plant_img/korianteri.png'
// import peikonlehtiImage from '../assets/plant_img/peikonlehti.png'
import anopinkieliImage from '../assets/plant_img/anopinkieli.png'
// import murattiImage from '../assets/plant_img/muratti.png'
import palmuvehkaImage from '../assets/plant_img/palmuvehka.png'
import placeholderImage from '../assets/plant_img/aloe_vera.png';

// selecting which image to return based on param
export default function SetPlantImg(plant) {
    switch (plant) {
        case 'Jukkapalmu':
        return jukkapalmuImage;
        case 'Kaktus':
        return kaktusImage;
        case 'Aloe Vera':
        return aloeveraImage;
        //case 'Avokado':
        //return avocadoImage;
        //case 'Basilika':
        //return basilikaImage;
        //case 'Korianteri':
        //return korianteriImage;
        //case 'Peikonlehti':
        //return peikonlehtiImage;
        case 'Anopinkieli':
        return anopinkieliImage;
        //case 'Varjomuratti':
        //return murattiImage;
        case 'Palmuvehka':
        return palmuvehkaImage;
        default:
        return placeholderImage;
        
    }
};

