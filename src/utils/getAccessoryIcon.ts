import SpeedSvg from '../assets/img/speed.svg';
import AccelerationSvg from '../assets/img/acceleration.svg';
import ForceSvg from '../assets/img/force.svg';
import GasolineSvg from '../assets/img/gasoline.svg';
import ExchangeSvg from '../assets/img/exchange.svg';
import PeopleSvg from '../assets/img/people.svg';
import EnergySvg from '../assets/img/energy.svg';
import HybridSvg from '../assets/img/hybrid.svg';
import CarSvg from '../assets/img/car.svg';


export function getAccessoryIcon(type: string) {
    switch (type) {
        case 'speed':
            return SpeedSvg;
        case 'acceleration':
            return AccelerationSvg;
        case 'turnig_diameter':
            return ForceSvg;
        case 'gasoline_motor':
            return GasolineSvg;
        case 'electric_motor':
            return EnergySvg;
        case 'hybrid_motor':
            return HybridSvg;
        case 'exchange':
            return ExchangeSvg;
        case 'seats':
            return PeopleSvg;
        default:
            return CarSvg;
    }
}