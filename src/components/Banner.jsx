import { TbTruckDelivery } from 'react-icons/tb';

const Banner = () => {
  return (
    <div className="flex h-14 w-screen items-center justify-center gap-4 bg-black text-xs font-light text-white">
      <TbTruckDelivery />
      <span>Livaison offerte dès 139€ avec Mondial Relay</span>
    </div>
  );
};

export default Banner;
