import logoImage from '../../assets/c66c11fb2371a7b02efba790a45e36876c588269.png';
import navbarLogoImage from '../../assets/79dcde414eec22f47abf76561fa3fad8b304c5e1.png';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'navbar';
}

export function MediumchatLogo({ className = "w-16 h-16", variant = 'default' }: LogoProps) {
  const imageSrc = variant === 'navbar' ? navbarLogoImage : logoImage;
  const imgSize = variant === 'navbar' ? 'w-full h-full' : 'w-[85%] h-[85%]';
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src={imageSrc} alt="Mediumchat Logo" className={`${imgSize} object-contain`} />
    </div>
  );
}